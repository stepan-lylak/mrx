import {useLiveQuery} from "dexie-react-hooks";
import {db} from "@/db/db";
import BlocksRenderer from "@/components/setup/BlocksRenderer/BlocksRenderer";

export default function BlockRelationsRenderer({ blockId }) {
    const blocks = useLiveQuery(
        async function () {
            const relations = await db.blockRelations.where({ fromId: blockId }).toArray();
            const blockIds = relations.map(({ toId }) => toId);
            return db.blocks.bulkGet(blockIds);
        },
        [blockId]
    );

    return <BlocksRenderer blocks={blocks}/>;
}
