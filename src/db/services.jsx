import {db} from "@/db/db";
import {CLX_ENTRY} from "@/constants/constants";

export function updateBlockName(id, name) {
    db.blocks.update(id, {name})
}

export function updateSubjectText(id, text) {
    db.subjects.update(id, {text})
}

export function addEmptyBlock(type, fromId, fromType) {
    db.blocks.add({type, name: ''}).then(function (toId) {
        if(!fromId || !fromType) return;
        db.blockRelations.add({fromType, fromId, toType: type, toId});
    })
}

export function addSubject(topicId, complexity = CLX_ENTRY, text = '') {
    db.subjects.add({ topicId, complexity, text })
}

export function deleteSubject(subjectId) {
    db.subjects.delete(subjectId);
}
