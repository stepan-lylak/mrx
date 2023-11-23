import {useLiveQuery} from "dexie-react-hooks";
import {db} from "@/db/db";
import {isEmpty} from "lodash/lang";
import {addSubject, deleteSubject, updateSubjectText} from "@/db/services";
import {Button, Empty, Flex, Input, Tag} from "antd";
import {useState} from "react";
import {DeleteOutlined} from "@ant-design/icons";

const {TextArea} = Input;

export default function Subjects({topicId, complexity}) {
    const [draft, setDraft] = useState('');

    const subjects = useLiveQuery(
        () => db.subjects.where({topicId, complexity}).toArray(),
        [topicId, complexity]
    );

    return <>
        {!isEmpty(subjects) && subjects.map(function (subject, index) {
            return <Flex gap="small" wrap="wrap" justify="start" key={subject.id} align="center" style={{paddingBottom: 10}}>
                <Tag style={{margin: 0}} color="processing">{index+1}</Tag>
                <TextArea autoSize style={{width: 400}}
                          value={subject.text} onChange={function ({target}) {
                    updateSubjectText(subject.id, target.value);
                }}/>
                <Button type="dashed" onClick={() => deleteSubject(subject.id)} icon={<DeleteOutlined />} />
            </Flex>
        })}
        <Flex gap="small" wrap="wrap" justify="start" align="center" >
            <Tag style={{margin: 0}} color="processing">{(subjects?.length || 0)+1}</Tag>
            <TextArea placeholder="Autosize height based on content lines" value={draft} autoSize style={{width: 400}}
                      onChange={function ({target}) {
                          setDraft(target.value);
                      }}/>
            <Button type="dashed" onClick={function () {
                addSubject(topicId, complexity, draft);
                setDraft('');
            }}>+ Add Subject</Button>
        </Flex>
    </>
}
