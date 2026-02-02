import Navbar from "@/components/Navbar";
import Welcome from "@/components/Welcome";
import Dock from "@/components/Dock";
import Home from "@/components/Home";
import Terminal from "@/windows/Terminal";
import Safari from "@/windows/Safari";
import Resume from "@/windows/Resume";
import Finder from "@/windows/Finder";
import Text from "@/windows/Text";
import Image from "@/windows/Image";
import Contact from "@/windows/Contact";
import {Activity} from "react";

import MobileNavbar from "@/components/mobile/Navbar";
import MobileTerminal from "@/windows/mobile/Terminal";
import MobileSafari from "@/windows/mobile/Safari";
import MobileResume from "@/windows/mobile/Resume";
import MobileFinder from "@/windows/mobile/Finder";
import MobileText from "@/windows/mobile/file/Text";

const Page = () => {
    return (
        <main>
            <Navbar/>
            <MobileNavbar/>

            <Welcome/>
            <Dock/>

            <Activity>
                <Terminal/>
                <MobileTerminal/>

                <Safari/>
                <MobileSafari/>

                <Resume/>
                <MobileResume/>

                <Finder/>
                <MobileFinder/>

                <Text/>
                <MobileText/>

                <Image/>
                <Contact/>
                <Home/>
            </Activity>
        </main>
    )
}
export default Page
