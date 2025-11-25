import Navbar from "@/components/Navbar";
import Welcome from "@/components/Welcome";
import Dock from "@/components/Dock";
import Terminal from "@/windows/Terminal";
import Safari from "@/windows/Safari";
import Resume from "@/windows/Resume";
import Finder from "@/windows/Finder";
import Text from "@/windows/Text";
import Image from "@/windows/Image";
import Contact from "@/windows/Contact";

const Page = () => {
    return (
        <main>
            <Navbar/>
            <Welcome/>
            <Dock/>
            <Terminal/>
            <Safari/>
            <Resume/>
            <Finder/>
            <Text/>
            <Image/>
            <Contact/>
        </main>
    )
}
export default Page
