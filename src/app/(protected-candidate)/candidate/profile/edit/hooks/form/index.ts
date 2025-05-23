import { useTabState } from './useTabState';
import { useFormData } from './useFormData';
import { useFormRefs } from './useFormRefs';
import { useFormSubmission } from './useFormSubmission';
import { useStatusMessage } from './useStatusMessage';
import { UserProfile } from '../../api';
import { useMemo } from 'react';
import { PersonalInfoFormRef } from '../../components/PersonalInfoForm';
import { SkillsFormRef } from '../../components/SkillsForm';
import { CertificateFormRef } from '../../components/CertificateForm';
import { ProofOfWorkFormRef } from '../../components/ProofOfWorkForm';
import { EducationFormRef } from '../../components/education/types';
import { ProjectFormRef } from '../../components/ProjectForm';

export function useFormManagement(
    defaultTab: string,
    profileData: UserProfile,
    refetchProfile: () => Promise<UserProfile | null>
) {
    const isPersonalInfoComplete = useMemo(() =>
        Boolean(profileData.firstName && profileData.lastName),
        [profileData.firstName, profileData.lastName]
    );

    const hasSkills = useMemo(() =>
        Boolean(profileData.skillset && profileData.skillset.length > 0),
        [profileData.skillset]
    );

    const { statusMessage, setStatusMessage } = useStatusMessage();
    const {
        hasUnsavedChanges,
        setHasUnsavedChanges,
        formData,
        setFormData,
        activeForm,
        userId,
        handlePersonalInfoChange,
        handlePersonalInfoData,
        handleSkillsChange,
        handleCertificateChange,
        handleProofOfWorkChange,
        handleProofOfWorkData,
        handleEducationChange, 
        handleEducationData, 
        handleProjectChange, // Add this
        handleProjectData, // Add this
        resetFormData
    } = useFormData();

    const {
        personalFormRef,
        skillsFormRef,
        certificateFormRef,
        proofOfWorkFormRef,
        educationFormRef,
        projectFormRef
    } = useFormRefs();

    const {
        activeTab,
        setActiveTab,
        handleTabChange
    } = useTabState(defaultTab, hasUnsavedChanges);

    const {
        isSubmitting,
        showConfirmDialog,
        setShowConfirmDialog,
        handleSaveClick,
        handleCancelChanges,
        handleConfirmSave
    } = useFormSubmission(
            formData,
            resetFormData,
            personalFormRef as React.RefObject<PersonalInfoFormRef>,
            skillsFormRef as React.RefObject<SkillsFormRef>,
            certificateFormRef as React.RefObject<CertificateFormRef>,
            proofOfWorkFormRef as React.RefObject<ProofOfWorkFormRef>,
            educationFormRef as React.RefObject<EducationFormRef>, 
            projectFormRef as React.RefObject<ProjectFormRef>, 
            activeTab,
            refetchProfile,
            setStatusMessage 
        );

    return {
        // Tab state
        activeTab,
        handleTabChange,

        // Form data & state
        hasUnsavedChanges,
        setHasUnsavedChanges,
        formData,
        setFormData,

        // Form refs
        personalFormRef,
        skillsFormRef,
        certificateFormRef,
        proofOfWorkFormRef,
        educationFormRef,
        projectFormRef, // Add this

        // Status and dialogs
        statusMessage,
        setStatusMessage,
        showConfirmDialog,
        setShowConfirmDialog,

        // Form actions
        isSubmitting,
        handleSaveClick,
        handleCancelChanges,
        handleConfirmSave,

        // Form-specific handlers
        handlePersonalInfoChange,
        handlePersonalInfoData,
        handleSkillsChange,
        handleCertificateChange,
        handleProofOfWorkChange,
        handleProofOfWorkData,
        handleEducationChange,
        handleEducationData,
        handleProjectChange, // Add this
        handleProjectData, // Add this

        // User info
        userId,

        // Profile utilities
        isPersonalInfoComplete,
        hasSkills
    };
}

export type FormManagementReturn = ReturnType<typeof useFormManagement>;