import React from 'react'
import Navbar from "@/components/Navbar";
import Welcome from "@/components/Welcome";
import Dock from "@/components/Dock";

const Page = () => {
    return (
        <main>
            <Navbar/>
            <Welcome/>
            <Dock/>
        </main>
    )
}
export default Page
