import React, {createContext, useEffect, useState} from 'react'
import {useRouter} from "next/navigation";
import {SideBar} from "./SideBar";
import axios from "axios";

export const SideBarContext = createContext<{
    sideBarIndex: number,
    setSideBarIndex: (index: number) => void
}>(null)

export default function HomePage() {
    const router = useRouter()
    const [sideBarIndex, setSideBarIndex] = useState(0)

    useEffect(() => {
        axios.get("/v1/user/userInfo").then(res => {
            console.log(res)
        })
    }, []);

    return (
        <React.Fragment>
            <SideBarContext.Provider value={{sideBarIndex, setSideBarIndex}}>
                <div className="flex">
                    <SideBar/>
                </div>

            </SideBarContext.Provider>

        </React.Fragment>
    )
}
