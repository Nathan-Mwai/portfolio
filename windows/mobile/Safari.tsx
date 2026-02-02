"use client"

import MobileWindowWrapper from "@/hoc/MobileWindowWrapper";
import MobileWindowHeader from "@/components/mobile/WindowHeader";
import {blogPosts} from "@/constants";
import {BookOpen, ChevronLeft, ChevronRight, Copy, Mic, MoveRight, Search, Share} from "lucide-react";

const MobileSafariInfo = () => {
    return (
        <>
            <MobileWindowHeader windowKey={"safari"} title={"Safari"}/>

            <div className="blog">
                <h2>My Blog</h2>

                <div className={"space-y-8"}>
                    {blogPosts.map(({id, image, title, date, link}) => (
                        <div key={id} className={"blog-post"}>
                            <div className={"col-span-2"}>
                                <img src={image} alt={title}/>
                            </div>
                            <div className={"content"}>
                                <p>{date}</p>
                                <h3>{title}</h3>
                                <a href={link} target={"_blank"} rel={"noopener noreferrer"}>
                                    Check out the full post <MoveRight className={"icon-hover"}/>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <footer>
                <div className={"search"}>
                    <Search className={"icon"}/>
                    <input
                        type={"text"}
                        placeholder={"Search or enter website name"}
                        className={"flex-1"}
                    />
                    <Mic className={"icon"}/>
                </div>

                <div>
                    <ChevronLeft size={32} className="icon text-gray-500" />
                    <ChevronRight size={32} className="icon text-gray-500" />

                    <Share size={32} className="icon text-blue-600" />
                    <BookOpen size={32} className="icon text-blue-600" />

                    <Copy size={32} className="icon text-blue-600" />
                </div>
            </footer>
        </>
    )
}

const MobileSafari = MobileWindowWrapper(MobileSafariInfo, "safari")
export default MobileSafari
