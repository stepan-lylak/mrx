"use client"

import './Setup.scss';
import AreasRenderer from "@/components/setup/AreasRenderer/AreasRenderer";
import Sidebar from "@/components/setup/Sidebar/Sidebar";
import {useState} from "react";

import ImportExport from "@/components/setup/Sidebar/ImportExport";

export default function Setup() {

    const [blockIds, setBlockIds] = useState([]);

    return <div className="su-page">
        <main>
            <aside>
                <Sidebar setBlockIds={setBlockIds}/>
                <ImportExport />
            </aside>
            <section>
                <AreasRenderer blockIds={blockIds}/>
            </section>
        </main>
    </div>;
}
