"use client"

import MobileWindowWrapper from "@/hoc/MobileWindowWrapper";
import {useEffect, useLayoutEffect, useRef, useState} from "react";
import MobileWindowHeader from "@/components/mobile/WindowHeader";
import "react-pdf/dist/Page/AnnotationLayer.css"
import "react-pdf/dist/Page/TextLayer.css"

const MobileResumeInfo = () => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const [containerWidth, setContainerWidth] = useState(0)
    const [Pdf, setPdf] = useState<any>(null)

    useEffect(() => {
        // Import react-pdf only in the browser
        import("react-pdf").then(mod => {
            // Configure worker
            mod.pdfjs.GlobalWorkerOptions.workerSrc = new URL(
                "pdfjs-dist/build/pdf.worker.min.mjs",
                import.meta.url
            ).toString()
            setPdf(mod)
        })
    }, [])

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
    if (!Pdf) return <p>Loading PDF…</p>

    return (
        <>
          <MobileWindowHeader windowKey={"resume"} title={"Resume"}/>

          <div ref={containerRef} className={"w-full"}>
              <Pdf.Document className={"resume-pdf"} file={"files/resume.pdf"}>
              <Pdf.Page
                  pageNumber={1}
                  width={containerWidth || undefined}
                  renderTextLayer
                  renderAnnotationLayer
              />
              </Pdf.Document>
          </div>
        </>
    )
}

const MobileResume = MobileWindowWrapper(MobileResumeInfo, "resume")

export default MobileResume
