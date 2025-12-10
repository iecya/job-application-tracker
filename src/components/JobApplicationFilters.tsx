import { useEffect, useState } from "react"
import { type ApplicationStatus, type JobType, type LocationType } from "../types/JobApplication"

type FilterState = {
    status: ApplicationStatus | ""
    jobType: JobType | ""
    locationType: LocationType | ""
}

function JobApplicationFilters() {
    const [applicationFilters, setFilters] = useState<FilterState>({
        status: "",
        jobType: "",
        locationType: ""
    })

    const filterValues = { 
        status: ["", "saved", "applied", "interview", "offer", "accepted", "rejected"],
        jobType: ["", "contract", "full-time", "part time"],
        locationType: ["", "remote", "hybrid", "office"]
    }

    function updateFilter(
        filter: keyof FilterState, 
        value: string) {
            setFilters(prevApplicationFilter => ({
                ...prevApplicationFilter, 
                [filter]: value
            }) as FilterState)
    }

    return (
        <div className="space-y-3">
            <h3 className='text-2xl font-bold text-center'>Filters</h3>
            {Object.entries(filterValues).map(([filterName, filterValues]) => (
                <div key={filterName} className='space-y-1 relative lg:w-1/2 lg:px-2'>
                    <label className='block text-sm font-semibold' htmlFor={filterName}>{filterName}</label> 
                    <select
                        name={filterName}
                        className="w-full rounded-md bg-slate-800 border border-teal-950 px-3 py-2 focus:outline-teal-800"
                        value={applicationFilters[filterName as keyof FilterState]}
                        onChange={(e) => updateFilter(filterName as keyof FilterState, e.target.value)}
                    >
                        {filterValues.map(filterValue => (
                            <option key={filterValue} value={filterValue}>
                                {filterValue === "" ? "All" : filterValue}
                            </option>
                        ))}
                    </select>
                </div>
            ))}
        </div>
    )

}

export default JobApplicationFilters