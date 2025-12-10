import type { JobApplication } from "../types/JobApplication"

type EditJobApplicationModalProps = {
    job: JobApplication
    onClose: () => void
}

function EditJobApplicationModal({ job, onClose }: EditJobApplicationModalProps) {
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
                    <h2 className='text-2xl font-bold mb-4'>New Job Application</h2>
                    <p className="mb-2 text-sm text-gray-300">
                        You are editing:
                    </p>
                    <p className="font-semibold">
                        {job.title} @ {job.company}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default EditJobApplicationModal