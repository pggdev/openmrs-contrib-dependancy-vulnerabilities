import { IconArrowNarrowUp } from "@tabler/icons-react"
import { useState } from "react"
import { Badge } from "../../badge"

import { cn } from "../../../lib/utils"

interface vulnerabilities {
    dependency: string,
    Version: string,
    Severity: React.ReactNode,
    CVEs: number,
    Exploit: string,
    FixVersion: string

}


const Vulnerability: vulnerabilities[] = [
    {
        dependency: "elasticsearch-restc-client",
        Version: "8.12.2",
        Severity: <Badge Severity="critical" />,
        CVEs: 1,
        Exploit: "yes",
        FixVersion: "8.12.3",

    },

    {
        dependency: "elasticsearch-restc-client",
        Version: "8.12.2",
        Severity: <Badge Severity="high" />,
        CVEs: 1,
        Exploit: "yes",
        FixVersion: "8.12.3",

    },

    {
        dependency: "elasticsearch-restc-client",
        Version: "8.12.2",
        Severity: <Badge Severity="medium" />,
        CVEs: 1,
        Exploit: "yes",
        FixVersion: "8.12.3",

    },

    {
        dependency: "elasticsearch-restc-client",
        Version: "8.12.2",
        Severity: <Badge Severity="low" />,
        CVEs: 1,
        Exploit: "yes",
        FixVersion: "8.12.3",

    },
]





export const ThirdDropdown = () => {

    const [Rows, setRows] = useState(Vulnerability)


    return <div className="">

        <div className="grid grid-cols-6 py-4 bg-neutral-200 shadow-sm">

            <div className="font-semibold text-black text-sm px-4 ">Dependency</div>
            <div className="font-semibold text-black text-sm px-4 ">Version</div>


            <div className="font-semibold text-black text-sm px-4 flex justify-between items-center">

                <h1>Severity</h1>

                <button >

                    <IconArrowNarrowUp className={cn("size-4")} />

                </button>



            </div>
            <div className="font-semibold text-black text-sm px-4 ">CVEs</div>
            <div className="font-semibold text-black text-sm px-4 ">Exploit?</div>
            <div className="font-semibold text-black text-sm px-4 ">Fix Version</div>


        </div>

        {Rows.map((row, index) =>
            <div key={index} className="grid grid-cols-6 py-4 border-b border-neutral-200">
                <div className="px-4">{row.dependency}</div>
                <div className="px-4">{row.Version}</div>
                <div className="px-4">{row.Severity}</div>
                <div className="px-4">{row.CVEs}</div>
                <div className="px-4">{row.Exploit}</div>
                <div className="px-4">{row.FixVersion}</div>

            </div>
        )}



    </div>
}



