import Block from "@/components/setup/Block/Block";
import {COMPLEXITIES} from "@/constants/constants";
import Subjects from "@/components/setup/TopicRenderer/Subjects/Subjects";

export default function TopicRenderer({topic}) {
    return (COMPLEXITIES.map(function (clx) {
        return <Block key={clx}>
            <Block.Header>
                {clx}
            </Block.Header>
            <Block.Body>
                <Subjects topicId={topic.id} complexity={clx}/>
            </Block.Body>
        </Block>
    }))
}
