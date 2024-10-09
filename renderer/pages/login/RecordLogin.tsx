import React from "react";
import Image from 'next/image'
import {LoginWay} from "@/constains/login";
import {LoginProps} from "@/pages/login/index";
import {Button} from "@/components/ui/Button";

export const RecordLogin = ({isLogining, setIsLogining, setType}: LoginProps) =>
{
    return (
        <>
            <div
                className="mt-12 text-xl font-black text-base-content cursor-default">EasyChat
            </div>
            <Image className="mt-12 bg-primary rounded-md" width={100} height={100} alt="Sheep"
                   src="/images/default_img.jpg"/>
            <div
                className="mt-5 text-base-content font-medium cursor-default">Sheep
            </div>

            <Button className="w-[190px] rounded-md min-h-[40px] h-[40px]  mt-16"
                disabled={isLogining}
                onClick={() => {
                // router.push("/home")
                setIsLogining(true)
                // window.ipc.adjustScreenSize(960, 640)
            }}>
                {isLogining && <span className="loading loading-spinner loading-xs"></span>}
                {isLogining ? "登录中" : "登录"}
            </Button>
            <div className="absolute bottom-6 flex text-xs mt-4 items-center text-secondary gap-3">
                <div className="cursor-pointer" onClick={() => setType(LoginWay.QrCode)}>添加账号</div>
                <div className="w-[1px] h-2 bg-base-content"></div>
                <div className="cursor-pointer">移除账号</div>
            </div>
        </>
    )
}