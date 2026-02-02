"use client"
import { useState } from "react";
import { ChevronRight } from "lucide-react";
import useWindowStore from "@/store/window";
import {locations} from "@/constants";
import MobileWindowHeader from "@/components/mobile/WindowHeader";
import MobileWindowWrapper from "@/hoc/MobileWindowWrapper";
import { FolderNode, Node, WindowKey } from "@/type";

function getWindowKey(item: Node): WindowKey | null {
    if (item.kind === "folder") return null; // Folders are handled separately
    if (item.fileType === "pdf") return "resume";
    if (item.fileType === "txt") return "txtfile";
    if (item.fileType === "img") return "imgfile";
    return null;
}

const MobileFinderContent = () => {
    const { closeWindow, openWindow } = useWindowStore();
    const [currentFolder, setCurrentFolder] = useState<FolderNode | null>(null);
    const [breadcrumb, setBreadcrumb] = useState<FolderNode[]>([]);

    const rootFolders = Object.values(locations);

    const handleFolderClick = (folder: FolderNode): void => {
        setCurrentFolder(folder);
        setBreadcrumb([...breadcrumb, folder]);
    };

    const handleBackClick = (): void => {
        if (breadcrumb.length === 0) {
            closeWindow("finder");
        } else if (breadcrumb.length === 1) {
            setCurrentFolder(null);
            setBreadcrumb([]);
        } else {
            const newBreadcrumb = breadcrumb.slice(0, -1);
            setBreadcrumb(newBreadcrumb);
            setCurrentFolder(newBreadcrumb[newBreadcrumb.length - 1]);
        }
    };

    const handleItemClick = (item: Node): void => {
        if (item.kind === "folder") {
            handleFolderClick(item);
            return;
        }

        // Handle file types
        if (item.fileType === "pdf") {
            openWindow("resume");
        } else if (["fig", "url"].includes(item.fileType) && item.href) {
            window.open(item.href, "_blank");
        } else {
            const key = getWindowKey(item);
            if (key) {
                openWindow(key, item);
            }
        }
    };

    const currentItems: Node[] | FolderNode[] = currentFolder?.children || rootFolders;

    return (
        <>
            <MobileWindowHeader
                windowKey="finder"
                title={currentFolder?.name || "Portfolio"}
                onBack={handleBackClick}
            />

            {breadcrumb.length > 0 && (
                <div className="breadcrumb">
                    <button
                        onClick={() => {
                            setCurrentFolder(null);
                            setBreadcrumb([]);
                        }}
                        className="text-blue-500 text-sm"
                    >
                        Portfolio
                    </button>
                    {breadcrumb.map((folder, index) => (
                        <span key={folder.id} className="flex items-center">
              <ChevronRight size={16} className="text-gray-400 mx-1" />
              <button
                  onClick={() => {
                      const newBreadcrumb = breadcrumb.slice(0, index + 1);
                      setBreadcrumb(newBreadcrumb);
                      setCurrentFolder(folder);
                  }}
                  className="text-blue-500 text-sm line-clamp-1 text-left"
              >
                {folder.name}
              </button>
            </span>
                    ))}
                </div>
            )}

            <div className="finder-gallery">
                <ul>
                    {currentItems?.map((item) => (
                        <li key={item.id} onClick={() => handleItemClick(item)}>
                            <div className="finder-item">
                                {item.kind === "folder" ? (
                                    <img
                                        src="/images/folder.png"
                                        alt="folder"
                                        className="size-16"
                                    />
                                ) : (
                                    <img src={item.icon} alt={item.name} className="file-icon" />
                                )}
                                <p className="item-name">{item.name}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

const MobileFinder = MobileWindowWrapper(MobileFinderContent, "finder");

export default MobileFinder;
