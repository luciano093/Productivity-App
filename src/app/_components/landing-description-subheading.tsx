export default function LandingDescriptionSubheading({ title, description }: { title: string, description: string }) {
    return(
        <div className="flex flex-col max-w-fit">
            <span className="font-semibold text-xl">{title}</span>
            <span className="font-light text-gray-200">{description}</span>
        </div>
    )
}