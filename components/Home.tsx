"use client"
import {locations} from "@/constants";
import clsx from "clsx";
import {useGSAP} from "@gsap/react";
import {Draggable}  from "gsap/Draggable";
import useWindowStore from "@/store/window";
import useLocationStore from "@/store/location";

const projects = locations.work?.children ?? []

const Home = () => {
    const {openWindow} = useWindowStore()
    const {setActiveLocation} = useLocationStore()

    const handleOpenProject = (project) => {
        setActiveLocation(project)
        openWindow('finder',project)
    }
    useGSAP(()=>{
       Draggable.create('.folder')
    },[])
    return (
        <section id={"home"}>
            <ul>
                {projects.map((project:any) => (
                    <li key={project.id} className={clsx("group folder", project.windowPosition)} onClick={() => handleOpenProject(project)}>
                        <img src={"/images/folder.png"} alt={project.name}/>
                        <p>{project.name}</p>
                    </li>
                ))}
            </ul>
        </section>
    )
}
export default Home
