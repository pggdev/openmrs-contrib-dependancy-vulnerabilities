import { cn } from "../lib/utils"

export const Badge = ({ Severity }: { Severity: string }) => {
    return <div className="flex">
        <div className={cn("rounded-full px-4 py-0.5 text-sm ",
            Severity === "critical" && "text-red-700 bg-red-400",
            Severity === "high" && "text-red-500 bg-red-200",
            Severity === "medium" && "text-yellow-600 bg-yellow-200",
            Severity === "low" && "text-green-500 bg-green-100",


        )}>
            {Severity}
        </div>
    </div>
}