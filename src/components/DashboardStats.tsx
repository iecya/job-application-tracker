import type { JobApplication } from "../types/JobApplication"
import StatCard from "./StatCard"

type DashboardStatsProps = {
    jobApps: JobApplication[]
}

function getApplicationCountByStatus(jobApplications: JobApplication[], status: string): number {
    return jobApplications.filter(japp => japp.status === status).length
}

function DashboardStats({ jobApps: jobs }: DashboardStatsProps) {
    const stats = {
        applications: jobs.length,
        applied: getApplicationCountByStatus(jobs, "applied"),
        interview: getApplicationCountByStatus(jobs, "interview"),
        offer: getApplicationCountByStatus(jobs, "offer"),
        accepted: getApplicationCountByStatus(jobs, "accepted"),
        rejected: getApplicationCountByStatus(jobs, "rejected")
    }
    return (
        <>
            <div className="flex flex-wrap w-full gap-4 justify-between">
                {Object.entries(stats).map(([key, value]) => (
                    <StatCard key={key} statName={key} statValue={value} />
                ))}
            </div>
        </>
    )
}

export default DashboardStats