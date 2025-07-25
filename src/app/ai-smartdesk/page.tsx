import AiSmartDeskPage from '@/components/page/AiSmartDeskPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Placetel AI SmartDesk – Automatisierte Anrufbearbeitung',
    description:
        'Mit SmartDesk automatisierst du eingehende Telefonanfragen und gewinnst Zeit für das Wesentliche. Ideal für Support & Kundenservice.',
};

const AiSmartDesk = () => {
    return <AiSmartDeskPage />;
};

export default AiSmartDesk;
