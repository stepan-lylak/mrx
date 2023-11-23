import {Button, Tree, Typography} from "antd";
import {ApartmentOutlined, AppstoreOutlined, DeleteOutlined, FormOutlined} from "@ant-design/icons";
import useSidebarData from "@/components/setup/Sidebar/useSidebarData";
import {isEmpty} from "lodash/lang";
import {BT_AREA, BT_CATEGORY, BT_TOPIC} from "@/constants/constants";
import {addEmptyBlock} from "@/db/services";

const { Title } = Typography;


const showLine = {
    showLeafIcon(props) {
        if (props.data.type === BT_TOPIC) {
            return <FormOutlined/>;
        }
        if (props.data.type === BT_AREA) {
            return <ApartmentOutlined/>;
        }
        return <AppstoreOutlined/>;
    }
}

export default function Sidebar({setBlockIds}) {
    const treeData = useSidebarData();

    if(isEmpty(treeData)) return null;

    return <>
        <Title level={4}>Structure</Title>
        <Tree
            blockNode={true}
            defaultExpandAll={true}
            showLine={showLine}
            onSelect={function (ids) {
                setBlockIds(ids);
            }}
            treeData={treeData}
            // multiple={true}
            titleRender={titleRender}
        />
    </>
}

function titleRender({key, title, type}) {
    return <>
        {title} <div>
        {type !== BT_TOPIC && <Button
            size="small"
            type="dashed"
            onClick={(e) => {
                e.stopPropagation();
                addEmptyBlock(BT_TOPIC, key, type);
            }}
            icon={<FormOutlined/>}
        />} {type !== BT_TOPIC && <Button
        size="small"
        type="dashed"
        onClick={(e) => {
            e.stopPropagation();
            addEmptyBlock(BT_CATEGORY, key, type);
        }}
        icon={<AppstoreOutlined/>}
    />}
    </div>
    </>;
}
