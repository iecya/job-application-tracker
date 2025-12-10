import { useState, type FormEvent } from 'react'
import './NewJobApplicationModal.css'
import type { JobApplication } from '../types/JobApplication'
import { createJobId } from '../utils/formats'

type NewJobApplicationModalProps = {
    onClose: () => void
}

const fields = [
    {name: "title", label: "Job Title", type: "text", required: true},
    {name: "company", label: "Company", type: "text", required: true},
    {name: "hiringCompany", label: "Hiring Company", type: "text", required: false},
    {name: "url", label: "Link / URL", type: "text", required: false},
    {name: "expiryDate", label: "Listing Expiry Date", type: "text", required: false},
    {name: "locationType", label: "Location Type", type: "select", options: ["remote", "hybrid", "office"], required: true},
    {name: "salary", label: "Salary", type: "text", required: false},
    {name: "jobType", label: "Job Type", type: "select", options: ["contract", "full-time", "part-time"], required: true},
    {name: "status", label: "Application Status", type: "select", options: ["saved", "applied", "interview", "offer", "accepted", "rejected"], required: true},
    {name: "notes", label: "Notes", type: "textarea", required: false},
    {name: "dateApplied", label: "Date of Application", type: "text", required: false},
    {name: "source", label: "Source Platform", type: "text", required: false},
    {name: "nextFollowUp", label: "Follow Up", type: "text", required: false},
]

function NewJobApplicationModal({ onClose }: NewJobApplicationModalProps) {
    const [formData, setFormData] = useState<JobApplication>({
        id: createJobId(),
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
    })

    function updateField(field: keyof JobApplication, value: string) {
        setFormData(prev => ({...prev, [field]: value}))
    }


    function handleSubmit(e: FormEvent) {
        e.preventDefault();
        console.log("Form submitted: ", { formData })
    }


    return(
        <div className="fixed inset-0 bg-black/80 z-50">
            <div className="w-full h-full relative flex justify-center items-center">
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 text-xl text-gray-300 hover:text-white"
                >
                    ×
                </button>
                <div className='max-h-[90vh] overflow-y-auto'>
                    <div className="bg-zinc-900 p-6 rounded-xl text-white relative">
                        <h2 className='text-2xl font-bold mb-4'>New Job Application</h2>
                        <form onSubmit={handleSubmit} className='space-y-4'>
                            {fields.map(field => (
                                <div key={field.name} className='space-y-1 relative'>
                                    <label className='block text-sm font-semibold' htmlFor={field.name}>
                                        {field.label}
                                        {field.required && <span className='text-red-500'> *</span>}
                                    </label>

                                    {
                                        {
                                            "select": <select 
                                                            name={field.name}
                                                            id={field.name}
                                                            className='formInput'
                                                            required={field.required}
                                                            defaultValue=""
                                                            onChange={(e) => updateField(field.name as keyof JobApplication, e.target.value)}
                                                        >
                                                            <option value="" disabled>Select an option...</option>
                                                            {field.options?.map(option => (
                                                                <option key={option} value={option}>{option}</option>
                                                            ))}
                                                        </select>,

                                            "textarea": <textarea 
                                                                name={field.name}
                                                                id={field.name}
                                                                className='formInput'
                                                                required={field.required}
                                                                value={formData[field.name as keyof JobApplication]}
                                                                onChange={(e) => updateField(field.name as keyof JobApplication, e.target.value)}
                                                        ></textarea>
                                        }[field.type] ||

                                        (
                                            <input 
                                                type={field.type}
                                                name={field.name}
                                                id={field.name}
                                                className="formInput"
                                                required={field.required}
                                                autoComplete='off'
                                                value={formData[field.name as keyof JobApplication]}
                                                onChange={e => updateField(field.name as keyof JobApplication, e.target.value)} />
                                        )
                                    }
                                </div>
                            ))}
                            
                            <div className="flex justify-between gap-2 pt-2">
                                <button
                                    type="button"
                                    onClick={onClose}
                                    className="actionButton actionCancelButton"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="actionButton actionSaveButton"
                                >
                                    Save
                                </button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default NewJobApplicationModal