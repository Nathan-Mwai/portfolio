"use client"

import WindowWrapper from "@/hoc/WindowWrapper"
import WindowControls from "@/components/WindowControls"
import { Download } from "lucide-react"
import PdfViewer from "@/components/PdfViewer"

const Resume = () => {
    return (
        <>
            <div id="window-header">
                <WindowControls target="resume" />
                <h2>Resume.pdf</h2>
                <a
                    href="files/resume.pdf"
                    download
                    className="cursor-pointer"
                    title="Download Resume"
                >
                    <Download className="icon" />
                </a>
            </div>
            <PdfViewer file="files/resume.pdf" />
        </>
    )
}

const ResumeWindow = WindowWrapper(Resume, "resume")
export default ResumeWindow