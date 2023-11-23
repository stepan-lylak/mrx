"use client"

import {Button, Upload} from "antd";
import {UploadOutlined} from "@ant-design/icons";
import {db} from "../../../db/db.jsx";
import download from 'downloadjs';

const props = {
    name: 'file',
    customRequest({file, onSuccess, onError }) {
        db.import(file).then(function () {
            onSuccess("ok");
        }, function (e) {
            console.log(e);
            onError(e);
        });
    },
    onChange(info) {
        if (info.file.status !== 'uploading') {
            console.log(info.file, info.fileList);
        }
        if (info.file.status === 'done') {
            console.log(`${info.file.name} file uploaded successfully`);
        } else if (info.file.status === 'error') {
            console.log(`${info.file.name} file upload failed.`);
        }
    },
};

export default function ImportExport() {
    return <>
        <Button type="dashed" onClick={function () {
            exportDb();
        }}>Export DB</Button>
        <Upload {...props}>
            <Button type="dashed" icon={<UploadOutlined />}>Import DB</Button>
        </Upload>
    </>;
    async function exportDb() {
        try {
            const blob = await db.export({prettyJson: true, progressCallback});
            download(blob, `dexie-export-${new Date().toISOString()}.json`, "application/json");
        } catch (error) {
            console.error(''+error);
        }
    }
}

function progressCallback ({totalRows, completedRows}) {
    console.log(`Progress: ${completedRows} of ${totalRows} rows completed`);
}
