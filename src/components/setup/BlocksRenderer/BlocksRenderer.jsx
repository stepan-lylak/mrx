import Block from "@/components/setup/Block/Block";
import {Button, Empty, Flex, Input} from "antd";
import {addEmptyBlock, updateBlockName} from "@/db/services";
import { BT_CATEGORY, BT_TOPIC} from "@/constants/constants";
import {isEmpty} from "lodash/lang";
import BlockRelationsRenderer from "@/components/setup/BlockRelationsRenderer/BlockRelationsRenderer";
import TopicRenderer from "@/components/setup/TopicRenderer/TopicRenderer";

export default function BlocksRenderer({ blocks }) {

    if(isEmpty(blocks)) return <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />;

    return blocks?.map(function (block) {
        return (<Block key={block.id}>
            <Block.Header>
                <Input
                    placeholder="Enter block name"
                    addonBefore={block.type}
                    value={block.name}
                    style={{width: 300}}
                    onChange={function ({target}) {
                        updateBlockName(block.id, target.value);
                    }}
                />
            </Block.Header>
            <Block.Body>
                {block.type === BT_TOPIC && <TopicRenderer topic={block}/>}
                {block.type !== BT_TOPIC && <>
                    <BlockRelationsRenderer blockId={block.id}/>
                    <Flex gap="small" wrap="wrap" justify="center">
                        <Button onClick={() => addEmptyBlock(BT_CATEGORY, block.id, block.type)}>ADD CATEGORY</Button>
                        <Button onClick={() => addEmptyBlock(BT_TOPIC, block.id, block.type)}>ADD TOPIC</Button>
                    </Flex>
                </>}
            </Block.Body>
        </Block>);
    })
}
