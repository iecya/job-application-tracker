import type { ApplicationStatus, JobType, LocationType } from "./JobApplication"

export type FilterState = {
    status: ApplicationStatus | ""
    jobType: JobType | ""
    locationType: LocationType | ""
}