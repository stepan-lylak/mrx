"use client"
import {useMemo, useState} from "react";
import cx from 'classnames';
import {sets} from "@/components/root/data";
import {isEmpty} from "lodash/lang";
import {Collapse, Rate} from "antd";
import SetBody from "@/components/root/SetBody";
import {FrownOutlined, MehOutlined, SmileOutlined} from "@ant-design/icons";

import './TopicBody.scss';

const customIcons = {
    1: <FrownOutlined />,
    2: <MehOutlined />,
    3: <SmileOutlined />,
};

export default function TopicBody({ topic }) {
    const { id } = topic;

    const [value, setValue] = useState({});

    const topicSets = useMemo(function () {
        return sets.filter(function ({topicId}) {
            return topicId === id;
        })
    }, [id]);

    if (isEmpty(topicSets)) return null;

    return <Collapse items={topicSets.map(function (set) {
        return {
            key: set.level,
            label: <div className="set-collapse-label">
                {set.level}<Rate onClick={e => e.stopPropagation()} onChange={function (value) {
                setValue(s => ({...s, [set.level]: value}));
                }
            } count={3} character={({ index }) => customIcons[index + 1]} />
            </div>,
            className: cx({'r1': value[set.level] === 1, 'r2': value[set.level] === 2, 'r3': value[set.level] === 3}),
            children: <SetBody set={set}/>
        }
    })}/>;
}
