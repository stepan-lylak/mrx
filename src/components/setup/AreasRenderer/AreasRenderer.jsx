import {useLiveQuery} from "dexie-react-hooks";
import {db} from "@/db/db";
import {BT_AREA, BT_CATEGORY, BT_TOPIC} from "@/constants/constants";
import BlocksRenderer from "@/components/setup/BlocksRenderer/BlocksRenderer";
import {isEmpty} from "lodash/lang";
import {Button, Empty, Flex} from "antd";
import {addEmptyBlock} from "@/db/services";

export default function AreasRenderer({ blockIds }) {
    const blocks = useLiveQuery(
        function () {
            if(isEmpty(blockIds)) {
                return db.blocks.where({type: BT_AREA}).toArray();
            }
            return db.blocks.bulkGet(blockIds);
        },
        [blockIds]
    );

    if(isEmpty(blocks)) return <Empty image={Empty.PRESENTED_IMAGE_SIMPLE}>
        {isEmpty(blockIds) && <Button type="primary" onClick={() => addEmptyBlock(BT_AREA)}>Create Now</Button>}
    </Empty>;

    return <>
        <BlocksRenderer blocks={blocks}/>
        {isEmpty(blockIds) && <Flex gap="small" wrap="wrap" justify="center">
            <Button type="primary" onClick={() => addEmptyBlock(BT_AREA)}>ADD AREA</Button>
        </Flex>}
    </>;
}
