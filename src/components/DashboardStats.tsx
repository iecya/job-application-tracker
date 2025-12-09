import * as jobApplications from "../data/mockJobs"
import StatCard from "./StatCard"

function getApplicationCountByStatus(status: string): number {
    return jobApplications.mockJobs.filter(japp => japp.status === status).length
}

function DashboardStats() {
    const stats = {
        applications: jobApplications.mockJobs.length,
        applied: getApplicationCountByStatus("applied"),
        interview: getApplicationCountByStatus("interview"),
        offer: getApplicationCountByStatus("offer"),
        accepted: getApplicationCountByStatus("accepted"),
        rejected: getApplicationCountByStatus("rejected")
    }
    return (
        <>
            <div className="flex flex-wrap w-full gap-4 justify-between">
                {Object.entries(stats).map(([key, value]) => (
                    <StatCard statName={key} statValue={value} />
                ))}
            </div>
        </>
    )
}

export default DashboardStats