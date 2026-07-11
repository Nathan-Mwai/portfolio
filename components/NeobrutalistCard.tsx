import React from 'react';

interface NeobrutalistCardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    bgColor?: string;
    shadowSize?: string;
    borderSize?: string;
}

export default function NeobrutalistCard({
    children,
    bgColor = 'bg-white',
    shadowSize = 'shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]',
    borderSize = 'border-[3px]',
    className = '',
    ...props
}: NeobrutalistCardProps) {
    return (
        <div
            className={`border-black ${borderSize} ${bgColor} ${shadowSize} transition-all duration-200 ${className}`}
            {...props}
        >
            {children}
        </div>
    );
}
