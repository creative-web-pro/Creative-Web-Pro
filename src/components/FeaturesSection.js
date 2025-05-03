import { cn } from "@/lib/utils";

export function FeaturesSection({ processSteps }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative z-10 max-w-7xl mx-auto">
            {processSteps.map((feature, index) => (
                <Feature key={feature.title} {...feature} index={index} />
            ))}
        </div>
    );
}

const Feature = ({ title, icon, index }) => {
    const gradientClass = "opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full pointer-events-none";

    return (
        <div className={cn(
            "flex flex-col lg:border-r py-2 md:py-10 relative group/feature",
            (index === 0 || index === 3) && "lg:border-l",
            index < 3 && "lg:border-b"
        )}>
            <div className={cn(
                gradientClass,
                index < 3 ? "bg-gradient-to-t" : "bg-gradient-to-b",
                "from-foreground/15 to-transparent"
            )} />
            <div className="text-lg font-bold mb-2 relative z-10 px-10">
                <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
                <span className="group-hover/feature:translate-x-2 transition duration-200 text-foreground/90 flex items-center gap-5">
                    {icon}
                    {title}
                </span>
            </div>
        </div>
    );
};
