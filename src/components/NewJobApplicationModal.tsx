import './NewJobApplicationModal.css'
import type { JobApplication } from '../types/JobApplication'
import JobApplicationForm, { type JobFormValues } from './JobApplicationForm'

type NewJobApplicationModalProps = {
    onClose: () => void
    onSave: (jobApp: JobApplication) => void
}

function NewJobApplicationModal({ onClose, onSave }: NewJobApplicationModalProps) {
    const initialValues: JobFormValues = {
        title: "",
        company: "",
        hiringCompany: "",
        url: "",
        expiryDate: "",
        locationType: "remote",
        salary: "",
        jobType: "full-time",
        status: "saved",
        notes: "",
        dateApplied: "",
        source: "",
        lastUpdated: "",
        nextFollowUp: ""
    }


    return (
        <div className="fixed inset-0 bg-black/80 z-50">
            <div className="w-full h-full relative flex justify-center items-center">
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 text-xl text-gray-300 hover:text-white"
                >
                    ×
                </button>
                <div className='max-h-[90vh] overflow-y-auto w-[80vw] xl:w-[70vw] 2xl:w-[50vw]'>
                    <div className="bg-zinc-900 p-6 rounded-xl text-white relative">
                        <h2 className='text-2xl font-bold mb-4'>New Job Application</h2>
                        <JobApplicationForm
                            initialValues={initialValues}
                            onSubmit={onSave}
                            onCancel={onClose} />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default NewJobApplicationModal