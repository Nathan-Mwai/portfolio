"use client"

import { useEffect, useState } from "react"
import 'react-pdf/dist/Page/AnnotationLayer.css'
import 'react-pdf/dist/Page/TextLayer.css'

export default function PdfViewer({ file }: { file: string }) {
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

    if (!Pdf) return <p>Loading PDF…</p>

    return (
        <Pdf.Document file={file}>
            <Pdf.Page pageNumber={1} renderTextLayer renderAnnotationLayer />
        </Pdf.Document>
    )
}