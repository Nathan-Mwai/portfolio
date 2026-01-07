export interface NavLink {
    id: number;
    name: string;
    type: WindowKey;
    // location: string;
    // distance: string; // e.g., "2.5 km away"
    // avatar: string;
    // isVerified: boolean;
    // postedDate: string; // ISO date string
    // availableQuantity: number;
    // unit: string; // e.g., "kg", "pieces"
    // rating: number;
    // totalDeliveries: number;
}

export interface NavIcons {
    id: number;
    img: string;
}

export interface DockApps {
    id: string;
    name: string;
    icon: string;
    canOpen: boolean;
    showOnMobile: boolean;
}

export interface BlogPosts {
    id: number;
    date: string;
    title: string;
    image:string;
    link: string;
}

export interface TechStack {
    category: string;
    items: string[];
}

export interface Socials {
    id: number;
    text: string;
    icon: string;
    bg: string;
    link: string;
}

export interface PhotosLinks {
    id: number;
    icon:string;
    title: string
}

export interface Gallery {
    id: number;
    img: string;
}

// Define allowed kinds
type NodeKind = "folder" | "file";

// Define allowed file types
type FileType = "txt" | "url" | "img" | "fig" | "pdf";

// Base node
interface BaseNode {
    id: number;
    name: string;
    icon: string;
    kind: NodeKind;
    position?: string;
}

// File node
interface FileNode extends BaseNode {
    kind: "file";
    fileType: FileType;
    description?: string[];
    href?: string;
    imageUrl?: string;
}

// Folder node
interface FolderNode extends BaseNode {
    kind: "folder";
    type?: string; // e.g. "work"
    windowPosition?: string;
    children: Node[];
}

// Specialized file node for "txt" files that may include subtitle + image
interface TextFileNode extends FileNode {
    fileType: "txt";
    subtitle?: string;
    image?: string;
}

// Union type
type Node = FileNode | FolderNode | TextFileNode;

// Define the shape of a single window config
interface WindowState<T = unknown> {
    isOpen: boolean;
    zIndex: number;
    data: T | null;
}

// Define all possible window keys
type WindowKey =
    | "finder"
    | "contact"
    | "resume"
    | "safari"
    | "photos"
    | "terminal"
    | "txtfile"
    | "imgfile";

// Define the full config type
type WindowConfig = Record<WindowKey, WindowState>;

