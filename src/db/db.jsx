import Dexie from 'dexie';
import "dexie-export-import";

export const db = new Dexie('myDatabase');

db.version(1).stores({
    blocks: '++id, type',
    blockRelations: '++id, fromType, fromId, toType, toId',
    subjects: '++id, text, complexity, topicId',
    questions: '++id, text, subjectId',
});
