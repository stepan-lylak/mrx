import {Card, Divider} from "antd";
import TextArea from "antd/es/input/TextArea";

export default function SetBody({ set }) {
    const { details, links } = set;
    return <>
        {details && <Card title="Details" style={{ whiteSpace: 'pre-line' }}>
            <p>{details}</p>
            <Divider />
            <TextArea
                placeholder="Enter your comment"
                autoSize={{ minRows: 2, maxRows: 6 }}
                showCount
            />
        </Card>}
        {links && <Card title="Links" style={{ whiteSpace: 'pre-line' }}>
            {links}
        </Card>}
    </>
}
