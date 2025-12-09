export type LocationType = "remote" | "hybrid" | "office";

export type JobType = "contract" | "full-time" | "part time"

export type ApplicationStatus = "saved" | "applied" | "interview" | "offer" | "accepted" | "rejected";

export interface JobApplication {
    id: string;
    title: string;
    company: string;
    hiringCompany?: string;
    url?: string;
    expiryDate?: string;
    locationType: LocationType;
    salary?: string;
    jobType: JobType;
    status: ApplicationStatus;
    notes?: string;
    dateApplied?: string;
    source?: string;
    lastUpdated: string;
    nextFollowUp?: string;
}