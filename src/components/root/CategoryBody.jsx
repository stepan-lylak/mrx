import {categories, topics} from "@/components/root/data";
import {useMemo} from "react";
import {Collapse} from "antd";
import TopicBody from "@/components/root/TopicBody";
import {isEmpty} from "lodash/lang";

export default function CategoryBody({ category }) {
    const { id } = category;

    const categoryTopics = useMemo(function () {
        return topics.filter(function ({categoryId}) {
            return categoryId === id;
        })
    }, [id]);

    if (isEmpty(categoryTopics)) return null;

    return <Collapse items={categoryTopics.map(function (topic) {
        return {
            key: topic.id,
            label: topic.title,
            children: <TopicBody topic={topic}/>
        }
    })}/>;
}
