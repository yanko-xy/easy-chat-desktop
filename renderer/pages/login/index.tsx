import React, {useState} from 'react'
import Head from 'next/head'
import Image from 'next/image'
import {useRouter} from "next/navigation";

export default function HomePage() {
    const [message, setMessage] = React.useState('No message found')
    const [isLogining, setIsLogining] = useState(false)
    const router = useRouter()

    React.useEffect(() => {
        window.ipc.on('message', (message: string) => {
            setMessage(message)
        })
    }, [])

    return (
        <React.Fragment>
            <Head>
                <title> login </title>
            </Head>
            <div className="flex items-center flex-col bg-base-100">
                <div
                    className="mt-14 text-xl font-black text-base-content cursor-default">EasyChat
                </div>
                <Image className="mt-12 bg-primary rounded-md" width={100} height={100} alt="Sheep"
                       src="/images/default_img.jpg"/>
                <div
                    className="mt-5 text-accent-content text-base-content font-medium cursor-default">Sheep
                </div>


                <button
                    className="btn lo btn-primary w-[190px] rounded-md min-h-[40px] h-[40px]  mt-16"
                    disabled={isLogining}
                    onClick={() => {
                        // router.push("/home")
                        setIsLogining(true)
                        // window.ipc.adjustScreenSize(960, 640)
                    }}>
                    {isLogining && <span className="loading loading-spinner loading-xs"></span>}
                    {isLogining ? "登录中" : "登录"}
                </button>
                <div className="flex text-xs mt-4 items-center text-secondary gap-3">
                    <div className="cursor-pointer">添加账号</div>
                    <div className="w-[1px] h-2 bg-base-content"></div>
                    <div className="cursor-pointer">移除账号</div>
                </div>
            </div>

        </React.Fragment>
    )
}
