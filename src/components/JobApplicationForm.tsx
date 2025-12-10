import { useState, type FormEvent } from "react"
import type { JobApplication } from "../types/JobApplication"

export type JobFormValues = Omit<JobApplication, "id">

type JobApplicationFormProps = {
  initialValues: JobFormValues
  onSubmit: (values: JobApplication) => void
  onCancel: () => void
  submitLabel?: string
}

function JobApplicationForm({
    initialValues,
    onSubmit,
    onCancel,
    submitLabel = "Save"
}: JobApplicationFormProps) {
    const [formData, setFormData] = useState<JobFormValues>(initialValues)

    function updateField(field: keyof JobApplication, value: string) {
        setFormData(prev => ({...prev, [field]: value}))
    }

    function handleSubmit(e: FormEvent) {
        e.preventDefault();
        const creationTime = new Date().toISOString()
        onSubmit({
            id: crypto.randomUUID(),
            ...formData, 
            lastUpdated: creationTime})
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
        {name: "dateApplied", label: "Date of Application", type: "text", required: false},
        {name: "source", label: "Source Platform", type: "text", required: false},
        {name: "nextFollowUp", label: "Follow Up", type: "text", required: false},
        {name: "notes", label: "Notes", type: "textarea", required: false},
    ]

    return (
        <form onSubmit={handleSubmit} className='space-y-4 lg:flex lg:flex-wrap'>
            {fields.map(field => (
                <div key={field.name} className='space-y-1 relative lg:w-1/2 lg:px-2'>
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
                                            value={formData[field.name as keyof JobFormValues]}
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
                                            value={formData[field.name as keyof JobFormValues]}
                                            onChange={(e) => updateField(field.name as keyof JobApplication, e.target.value)}
                                        ></textarea>,

                            "text": <input 
                                        type={field.type}
                                        name={field.name}
                                        id={field.name}
                                        className="formInput"
                                        required={field.required}
                                        autoComplete='off'
                                        value={formData[field.name as keyof JobFormValues]}
                                        onChange={e => updateField(field.name as keyof JobApplication, e.target.value)} />
                        }[field.type]
                    }
                </div>
            ))}
            
            <div className="flex justify-between gap-2 pt-2 lg:w-full lg:justify-end">
                <button
                    type="button"
                    onClick={onCancel}
                    className="actionButton actionCancelButton"
                >
                    Cancel
                </button>
                <button
                    type="submit"
                    className="actionButton actionSaveButton"
                >
                    {submitLabel}
                </button>
            </div>
        </form>
    )

}

export default JobApplicationForm