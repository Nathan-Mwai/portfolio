"use client"

import { useEffect, useState } from "react"
import 'react-pdf/dist/Page/AnnotationLayer.css'
import 'react-pdf/dist/Page/TextLayer.css'
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function PdfViewer({ file }: { file: string }) {
    const [Pdf, setPdf] = useState<any>(null)
    const [numPages, setNumPages] = useState<number>()
    const [pageNumber, setPageNumber] = useState<number>(1)

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

    function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
        setNumPages(numPages)
    }

    function changePage(offset: number) {
        setPageNumber(prevPageNumber => prevPageNumber + offset)
    }

    if (!Pdf) return <p>Loading PDF…</p>

    return (
        <div className="relative flex flex-col items-center">
            <Pdf.Document file={file} onLoadSuccess={onDocumentLoadSuccess}>
                <Pdf.Page pageNumber={pageNumber} renderTextLayer renderAnnotationLayer />
            </Pdf.Document>

            {numPages && numPages > 1 && (
                <div className="absolute bottom-6 flex items-center justify-center gap-4 bg-white/90 dark:bg-dark-700/90 backdrop-blur-md px-4 py-2 rounded-full shadow-xl border border-gray-200 dark:border-gray-600 z-50">
                    <button 
                        type="button" 
                        disabled={pageNumber <= 1} 
                        onClick={() => changePage(-1)}
                        className="p-1.5 rounded-full hover:bg-gray-200 dark:hover:bg-dark-500 disabled:opacity-40 disabled:hover:bg-transparent transition-all cursor-pointer disabled:cursor-not-allowed"
                    >
                        <ChevronLeft className="size-5 text-gray-800 dark:text-white" />
                    </button>
                    <p className="text-sm font-medium text-gray-800 dark:text-white select-none w-20 text-center">
                        {pageNumber} / {numPages}
                    </p>
                    <button 
                        type="button" 
                        disabled={pageNumber >= numPages} 
                        onClick={() => changePage(1)}
                        className="p-1.5 rounded-full hover:bg-gray-200 dark:hover:bg-dark-500 disabled:opacity-40 disabled:hover:bg-transparent transition-all cursor-pointer disabled:cursor-not-allowed"
                    >
                        <ChevronRight className="size-5 text-gray-800 dark:text-white" />
                    </button>
                </div>
            )}
        </div>
    )
}