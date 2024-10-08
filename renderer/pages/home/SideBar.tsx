import {
    ChatBubbleOutlineRounded,
    ChatBubbleRounded,
    Person2Outlined,
    Person2
} from "@mui/icons-material"
import Image from "next/image";
import {useContext} from "react";
import {SideBarContext} from "./index";
import {cn} from "@/lib/utils";

const outlineIcons = [
    <ChatBubbleOutlineRounded width={24} height={24}/>,
    <Person2Outlined width={24} height={24}/>
]

const filledIcons = [
    <ChatBubbleRounded width={24} height={24}/>,
    <Person2 width={24} height={24}/>
]

export const SideBar = () => {

    const {sideBarIndex, setSideBarIndex} = useContext(SideBarContext)

    return (
        <div className="w-16 h-screen bg-neutral flex flex-col items-center">
            <Image className="rounded-full mt-12 mb-2.5" src="/images/default_img.jpg" alt="sheep"
                   height={40} width={40}/>
            {
                outlineIcons.map((icon, index) => {
                    return <div key={index}
                                className={cn(
                                    "w-9 h-9 rounded mt-2 flex justify-center items-center" +
                                    " text-neutral-content hover:bg-opacity-10 hover:bg-base-content",
                                    index === sideBarIndex && "bg-opacity-10 bg-base-content"
                                )}
                                onClick={() => setSideBarIndex(index)}
                    >
                        {sideBarIndex !== index ? icon : filledIcons[index]}
                    </div>
                })
            }
        </div>
    )
}