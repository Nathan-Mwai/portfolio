import React from 'react';
import { Github, Linkedin, Twitter, Mail, Globe } from 'lucide-react';

export const getSocialIcon = (text: string, className?: string) => {
    const sizeClass = className || 'size-6';
    switch (text.toLowerCase()) {
        case 'github': 
            return <Github className={sizeClass} />;
        case 'linkedin': 
            return <Linkedin className={sizeClass} />;
        case 'twitter/x': 
        case 'twitter':
            return <Twitter className={sizeClass} />;
        case 'platform': 
            return <Globe className={sizeClass} />;
        default: 
            return <Mail className={sizeClass} />;
    }
};
