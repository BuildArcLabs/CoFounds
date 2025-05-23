import { UserProfile } from '../../api';

export interface DateObject {
    year: string;
    month: string;
    day: string;
}

export interface Certificate {
    id: string;
    title: string;
    description: string | null;
    startDate: DateObject;
    endDate: DateObject | null;
    link: string;
    userId?: string;
    noExpiryDate: boolean;
}

export interface CertificateUpdatePayload {
    user_id: string;
    new_certificates: Array<{
        title: string;
        description: string | null;
        started_at: string | null;
        end_at: string | null;
        link: string | null;
    }>;
    updated_certificates: Array<{
        id: string;
        title: string;
        description: string | null;
        started_at: string | null;
        end_at: string | null;
        link: string | null;
    }>;
    deleted_certificates: string[];
}

export interface CertificateFormRef {
    resetForm: () => void;
    saveForm: () => void;
}

export interface CertificateFormProps {
    profile: UserProfile;
    onChange: (hasChanges: boolean) => void;
    onSaveData: (data: { certificatesUpdateData: CertificateUpdatePayload }) => void;
}

// Constants
export const MAX_CERTIFICATES = 10;