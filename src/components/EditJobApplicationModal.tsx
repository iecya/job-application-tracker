import type { JobApplication } from "../types/JobApplication"
import JobApplicationForm from "./JobApplicationForm"

type EditJobApplicationModalProps = {
    job: JobApplication
    onClose: () => void
    onSave: (jobApp: JobApplication) => void
}

function EditJobApplicationModal({ job, onClose, onSave }: EditJobApplicationModalProps) {
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
                        <h2 className='text-2xl font-bold mb-4'>Edit Job Application</h2>
                        <JobApplicationForm 
                            initialValues={job}
                            onSubmit={onSave}
                            onCancel={onClose}
                        
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditJobApplicationModal