import Image from 'next/image'
import {LoginWay} from "@/constains/login";
import {LoginProps} from "@/pages/login/index";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup, DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger
} from "@/components/ui/DropdownMenu";
import {Input} from "@/components/ui/Input";
import {ChevronDown} from "lucide-react";
import React, {useRef, useState} from "react";
import {Button} from "@/components/ui/Button";
import {Checkbox} from "@/components/ui/Checkbox";
import {Label} from "@/components/ui/Label";

export const PhoneAndPwdLogin = ({isLogining, setIsLogining, setType}: LoginProps) => {
    const [open, setOpen] = useState(false)
    const inputRef = useRef(null)

    const closeHandler = (value) => {
        if (value === false) {
            setOpen(false)
        }
    }

    return (
        <>
            <Image className="mt-16 bg-primary rounded-md" width={80} height={80} alt="Sheep"
                   src="/images/default_img.jpg"/>
            <form className="flex flex-col gap-4 mt-5 text-sm w-full">

                <DropdownMenu open={open} onOpenChange={closeHandler}>
                    <DropdownMenuTrigger asChild>
                        <div className="relative flex items-center">
                            <Input ref={inputRef} className="h-10" placeholder="输入手机号" onClick={() => {
                                inputRef.current.focus()
                            }}/>
                            <ChevronDown size={16} className="absolute right-4 h-10 cursor-pointer"
                                         onClick={() => {
                                             setOpen(true)
                                         }}/>
                        </div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent side="bottom" align="center"
                                         className="w-[calc(100vw-4rem)] input input-bordered h-auto">
                        <DropdownMenuGroup>
                            <DropdownMenuItem>
                                <span>Profile</span>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <span>Billing</span>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <span>Billing</span>
                            </DropdownMenuItem>
                        </DropdownMenuGroup>
                    </DropdownMenuContent>

                </DropdownMenu>


                <Input className="h-10" placeholder="输入ec密码"/>

                <div className="flex items-center space-x-2">
                    <Checkbox id="notice"/>
                    <Label htmlFor="notice" className="text-[11px] text-base-content">已阅读并同意<span className="text-primary">服务协议</span>和<span
                        className="text-primary">es系统隐私政策</span></Label>
                </div>

                <Button className="w-full rounded-md min-h-[40px] h-[40px] mt-2"
                        disabled={isLogining}
                        onClick={() => {
                            // router.push("/home")
                            setIsLogining(true)
                            // window.ipc.adjustScreenSize(960, 640)
                        }}>
                    {isLogining && <span className="loading loading-spinner loading-xs"></span>}
                    {isLogining ? "登录中" : "登录"}
                </Button>
            </form>

            <div className="absolute bottom-6 flex text-xs mt-4 items-center text-secondary gap-3">
                <div className="cursor-pointer" onClick={() => setType(LoginWay.QrCode)}>扫码登录</div>
                <div className="w-[1px] h-2 bg-base-content"></div>
                <div className="cursor-pointer">更多选项</div>
            </div>
        </>
    )
}