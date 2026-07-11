import React from 'react';

interface NeobrutalistButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    bgColor?: string;
}

export default function NeobrutalistButton({
    children,
    bgColor = 'bg-white',
    className = '',
    ...props
}: NeobrutalistButtonProps) {
    return (
        <button
            className={`
                px-5 py-2.5 font-bold border-[3px] border-black text-black
                ${bgColor}
                shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
                hover:translate-x-[2px] hover:translate-y-[2px]
                hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]
                active:translate-x-[4px] active:translate-y-[4px]
                active:shadow-[0px_0px_0px_0px_rgba(0,0,0,1)]
                transition-all duration-100 ease-in-out cursor-pointer
                ${className}
            `}
            {...props}
        >
            {children}
        </button>
    );
}
