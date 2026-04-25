"use client"
import WindowControls from "@/components/WindowControls";
import WindowWrapper from "@/hoc/WindowWrapper";
import {ChevronLeft, ChevronRight, Copy, MoveRight, PanelLeft, Plus, Search, Share, ShieldHalf} from "lucide-react";
// import {blogPosts} from "@/constants"; // TODO: Uncomment when real blog posts are available
import Image from "next/image";

const Safari = () => {
    return (
        <>
        <div id={"window-header"}>
            <WindowControls target={"safari"}/>

            <PanelLeft className={"ml-10 icon"}/>

            <div className={"flex items-center gap-1 ml-5"}>
                <ChevronLeft className={"icon"} />
                <ChevronRight className={"icon"} />
            </div>

            <div className={"flex-1 flex-center gap-3"}>
                <ShieldHalf className={"icon"} />

                <div className={"search"}>
                    <Search className={"icon"} />

                    <input
                        type={"text"}
                        placeholder={"Search or enter website name"}
                        className={"flex-1"}
                    />
                </div>
            </div>
            <div className={"flex items-center gap-5"}>
                <Share className={"icon"} />
                <Plus className={"icon"} />
                <Copy className={"icon"} />
            </div>
        </div>

            <div className={"blog"}>
                <h2>My thoughts</h2>

                {/* TODO: Uncomment the block below once real blog posts are added to constants/index.ts */}
                {/*
                <div className={"space-y-8"}>
                    {blogPosts.map(({id, image , title, date, link}) => (
                        <div key={id} className={"blog-post"}>
                            <div className={"col-span-2"}>
                                <Image
                                  src={image}
                                  alt={title}
                                  width={800}
                                  height={600}
                                  className="w-full h-auto"
                                />
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
                */}

                {/* Coming Soon placeholder — remove this block when uncommenting the posts above */}
                <div className={"coming-soon"}>
                    <div className={"coming-soon-icon"}>✍️</div>
                    <h3 className={"coming-soon-title"}>Stories incoming</h3>
                    <p className={"coming-soon-sub"}>
                        I&apos;m currently brewing up some thoughts worth sharing.<br />
                        Check back soon — something good is on the way.
                    </p>
                    <div className={"coming-soon-badge"}>Coming Soon</div>
                </div>
            </div>
        </>
    )
}

const SafariWindow = WindowWrapper(Safari, 'safari')
export default SafariWindow