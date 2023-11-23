import {useLiveQuery} from "dexie-react-hooks";
import {BT_AREA} from "@/constants/constants";
import {db} from "@/db/db";
import {CarryOutOutlined} from "@ant-design/icons";

export default function useSidebarData() {
    return useLiveQuery(
        async function () {
            const areas = await db.blocks.where({type: BT_AREA}).toArray();

            return aggregateTree(areas);
        }
    );
}

async function aggregateTree(blocks) {
    return Promise.all(blocks.map(async function (block) {
        const children = await getRelatedTree(block.id);
        return {
            title: block.name || 'no name',
            key: block.id,
            type: block.type,
            children
        }
    }));
}

async function getRelatedTree(fromId) {
    const relations = await db.blockRelations.where({ fromId }).toArray();
    const blockIds = relations.map(({ toId }) => toId);
    const relatedBlocks = await db.blocks.bulkGet(blockIds);
    return aggregateTree(relatedBlocks);
}

