import { Metadata } from 'next';
import ContactContent from './ContactContent';

export const metadata: Metadata = {
    title: 'Contact',
    description: "Get in touch with Nathan Mwai Mwaniki, a Full-Stack Software Engineer based in Nairobi, Kenya. Reach out for collaborations, project inquiries, or contract work.",
    openGraph: {
        title: 'Contact | Nathan Mwai Mwaniki',
        description: "Get in touch with Nathan Mwai Mwaniki, a Full-Stack Software Engineer based in Nairobi, Kenya. Reach out for collaborations, project inquiries, or contract work.",
    }
};

export default function ContactPage() {
    return <ContactContent />;
}
