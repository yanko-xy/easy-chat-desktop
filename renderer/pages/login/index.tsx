import React, {useRef, useState} from 'react'
import Head from 'next/head'
import Image from 'next/image'
import {useRouter} from "next/navigation";
import {LoginWay} from "@/constains/login";
import {RecordLogin} from "@/pages/login/RecordLogin";
import {QrCodeLogin} from "@/pages/login/QrCodeLogin";
import {PhoneAndPwdLogin} from "@/pages/login/PhoneAndPwdLogin";

export type LoginProps = Partial<{
    isLogining: boolean,
    setIsLogining: (isLogining: boolean) => void,
    setType: (type: LoginWay) => void
}>

export default function HomePage() {
    const [message, setMessage] = React.useState('No message found')
    const [isLogining, setIsLogining] = useState(false)
    const [type, setType] = useState<LoginWay>(LoginWay.Record)
    const router = useRouter()


    React.useEffect(() => {
        window.ipc.on('message', (message: string) => {
            setMessage(message)
        })
    }, [])

    const LoginElement = () => {
        switch (type) {
            case LoginWay.Record:
                return <RecordLogin setType={setType} />
            case LoginWay.QrCode:
                return <QrCodeLogin isLogining={isLogining} setIsLogining={setIsLogining} setType={setType} />
            case LoginWay.PhoneAndPwd:
                return <PhoneAndPwdLogin setType={setType} />
            default:
                return <RecordLogin setType={setType} />
        }
    }

    return (
        <React.Fragment>
            <Head>
                <title> login </title>
            </Head>
            <div className="relative h-screen flex items-center flex-col bg-base-100 pl-8 pr-8">
                {LoginElement()}
            </div>

        </React.Fragment>
    )
}
