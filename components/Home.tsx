"use client"
import {locations} from "@/constants";
import clsx from "clsx";
import {useGSAP} from "@gsap/react";
import useWindowStore from "@/store/window";
import useLocationStore from "@/store/location";
import {Activity} from "react";

const projects = locations.work?.children ?? []

const Home = () => {
    const {openWindow} = useWindowStore()
    const {setActiveLocation} = useLocationStore()

    const handleOpenProject = (project:any) => {
        setActiveLocation(project)
        openWindow('finder',project)
    }
    useGSAP(async ()=>{
       const {Draggable} = await import('gsap/Draggable');
       Draggable.create('.folder')
    },[])
    return (
        <section id={"home"}>
            <Activity>
            <ul>
                {projects.map((project:any) => (
                    <li key={project.id} className={clsx("group folder", project.windowPosition)} onClick={() => handleOpenProject(project)}>
                        <img src={"/images/folder.png"} alt={project.name}/>
                        <p>{project.name}</p>
                    </li>
                ))}
            </ul>
            </Activity>
        </section>
    )
}
export default Home
