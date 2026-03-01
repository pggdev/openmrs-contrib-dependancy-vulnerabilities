import { Container } from "../components/container"
import { ModuleCard } from "../components/dropdowncards/firstlayer/modulecard"

export const Landing = () => {
    return <div className="flex justify-center">
        <Container className="">

            <div>
                <h1 className="text-5xl font-normal py-6">
                    OpenMRS Dependency Vulnerability Report
                </h1>

                <h2 className="text-md"> A summary of known security vulnerabilities detected across OpenMRS modules by automated dependency scanning. Each module lists its vulnerable dependencies, severity levels, and recommended fix versions to help maintainers prioritize upgrades. </h2>
            </div>

            <div className="flex flex-col gap-4 pt-10">
                <ModuleCard />
                <ModuleCard />
                <ModuleCard />
                <ModuleCard />
            </div>

        </Container>
    </div>
}