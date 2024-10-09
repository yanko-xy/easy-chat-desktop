import Image from 'next/image'
import {LoginWay} from "@/constains/login";
import {LoginProps} from "@/pages/login/index";

export const QrCodeLogin = ({isLogining, setIsLogining, setType}: LoginProps) => {
    return (
        <>
            <div
                className="mt-12 text-xl font-black text-base-content cursor-default">EasyChat
            </div>
            <Image className="mt-8 bg-primary rounded-md" width={190} height={190} alt="Sheep"
                   src="/images/default_img.jpg"/>
            <div
                className="mt-5 text-base-content text-sm font-medium cursor-default">请使用手机WeChat扫码登录
            </div>

            <div className="absolute bottom-6 flex text-xs mt-4 items-center text-secondary gap-3">
                <div className="cursor-pointer" onClick={() => setType(LoginWay.PhoneAndPwd)}>账号登录</div>
                <div className="w-[1px] h-2 bg-base-content"></div>
                <div className="cursor-pointer">注册账号</div>
            </div>
        </>
    )
}