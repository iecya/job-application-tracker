import { useEffect, useState } from "react";
import type { JobApplication } from "../types/JobApplication";

const LOCAL_STORAGE_KEY = "job-applications";

function useJobApplicationStore() {
    function getInitialJobApplications() {
        try {
            return JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) || "[]")
        } catch(e: any) {
            console.log(`Could not retrieve job applications from local storage with error message: "${e.message}"`)
        }
    }

    const [jobApplications, setJobApplications] = useState<JobApplication[]>(getInitialJobApplications)

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

    useEffect (() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(jobApplications))
    }, [jobApplications])

    return {
        jobApplications,
        handleDeleteJobApplication,
        handleNewJobApplication,
        handleSaveJobApplication
    }

}


export default useJobApplicationStore