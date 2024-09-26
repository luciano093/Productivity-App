import LandingDescriptionSubheading from "./landing-description-subheading"

export default function LandingDescription({ children: subheadings, title, description }: { children: JSX.Element[], title: string, description: string }) {
    return(
        <div className="relative flex flex-row w-full bg-[#112069] min-h-96 text-white mb-[18%] md:mb-[6%]">
        <div className="absolute top-0 left-0 bottom-0 w-1/2 bg-gradient-to-r from-[#2a3ea1] to-[#112069] z-0"></div>
        <div className="flex flex-col items-center p-6 [&_*]:py-2 m-auto z-10">
          <span className="font-semibold text-3xl">{title}</span>
          <span className="font-light text-gray-200">{description}</span>
          <div className="grid min-h-52 grid-flow-row md:grid-flex-row grid-cols-1 md:grid-cols-2 grid-rows-none">
            {subheadings}
          </div>
        </div>
      </div>
    )
}