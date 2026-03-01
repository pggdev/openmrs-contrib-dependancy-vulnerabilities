import { IconChevronDown } from "@tabler/icons-react"
import { useState } from "react"
import { cn } from "../../../lib/utils"
import { Secondlayerdropdown } from "../secondlayer/secondlayerdropdown"

export const ModuleCard = () => {

    const [isOpen, setIsOpen] = useState(false)



    return <div className="max-w-full w-full">
        <div

            className="py-8 bg-white border border-neutral-200 shadow-sm cursor-pointer">

            <div className="px-4 flex justify-between items-center">
                <h1 className="font-semibold text-lg text-gray-500">openmrs-core</h1>
                <button onClick={() => setIsOpen(c => !c)}>
                    <IconChevronDown className={cn("size-4 text-gray-500 transition-transform", isOpen && "rotate-180")} />
                </button>

            </div>

            {isOpen && <div className="py-6">
                <Secondlayerdropdown />

            </div>}
        </div>
    </div>
}






