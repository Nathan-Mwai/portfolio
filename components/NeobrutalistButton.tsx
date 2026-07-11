import React from 'react';

interface NeobrutalistButtonBaseProps {
    children: React.ReactNode;
    bgColor?: string;
    href?: string;
}

type NeobrutalistButtonProps = NeobrutalistButtonBaseProps &
    (
        | (React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined })
        | (React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string })
    );

export default function NeobrutalistButton({
    children,
    bgColor = 'bg-white',
    className = '',
    href,
    ...props
}: NeobrutalistButtonProps) {
    const styles = `
        px-5 py-2.5 font-bold border-[3px] border-black text-black inline-flex items-center justify-center
        ${bgColor}
        shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
        hover:translate-x-[2px] hover:translate-y-[2px]
        hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]
        active:translate-x-[4px] active:translate-y-[4px]
        active:shadow-[0px_0px_0px_0px_rgba(0,0,0,1)]
        transition-all duration-100 ease-in-out cursor-pointer
        ${className}
    `;

    if (href) {
        return (
            <a
                href={href}
                className={styles}
                {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
            >
                {children}
            </a>
        );
    }

    return (
        <button
            className={styles}
            {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
        >
            {children}
        </button>
    );
}
