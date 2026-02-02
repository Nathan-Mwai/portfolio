"use client"

import MobileWindowWrapper from "@/hoc/MobileWindowWrapper";
import {Document, Page, pdfjs} from "react-pdf";
import {useLayoutEffect, useRef, useState} from "react";
import MobileWindowHeader from "@/components/mobile/WindowHeader";

pdfjs.GlobalWorkerOptions.workerSrc = new URL("" +
    "pdfjs-dist/build/pdf.worker.min.mjs",
    import.meta.url
).toString()

import "react-pdf/dist/Page/AnnotationLayer.css"
import "react-pdf/dist/Page/TextLayer.css"

const MobileResumeInfo = () => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const [containerWidth, setContainerWidth] = useState(0)

    useLayoutEffect(() => {
        if (!containerRef.current) return;

        const updateWidth = () => {
            if (containerRef.current) {
                setContainerWidth(containerRef.current.offsetWidth);
            }
        };

        updateWidth()

        const resizeObserver = new ResizeObserver(updateWidth);
        resizeObserver.observe(containerRef.current);

        return () => resizeObserver.disconnect()
    },[])
    return (
        <>
          <MobileWindowHeader windowKey={"resume"} title={"Resume"}/>

          <div ref={containerRef} className={"w-full"}>
              <Document className={"resume-pdf"} file={"files/resume.pdf"}>
              <Page
                  pageNumber={1}
                  width={containerWidth || undefined}
                  renderTextLayer
                  renderAnnotationLayer
              />
              </Document>
          </div>
        </>
    )
}

const MobileResume = MobileWindowWrapper(MobileResumeInfo, "resume")

export default MobileResume
