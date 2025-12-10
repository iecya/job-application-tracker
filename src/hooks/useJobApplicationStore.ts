import { useState } from "react";
import type { JobApplication } from "../types/JobApplication";


function useJobApplicationStore(initialJobs: JobApplication[]) {
    const [jobApplications, setJobApplications] = useState<JobApplication[]>(initialJobs)

    function handleDeleteJobApplication(id: string) {
        setJobApplications(prevJobApplications => prevJobApplications.filter(jobApp => jobApp.id !== id))
    }

    function handleNewJobApplication(newJobApplication: JobApplication) {
        setJobApplications(prevJobApplications => [newJobApplication, ...prevJobApplications])
    }

    function handleSaveJobApplication(jobApplication: JobApplication) {
        setJobApplications(prevJobApplications =>
            prevJobApplications.map(prevJobApplication =>
                prevJobApplication.id === jobApplication.id ? jobApplication : prevJobApplication
            )
        )
    }

    return {
        jobApplications,
        handleDeleteJobApplication,
        handleNewJobApplication,
        handleSaveJobApplication
    }

}


export default useJobApplicationStore