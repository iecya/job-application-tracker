import type { FilterState } from "../types/Filters"
import { formatKeyLabel } from "../utils/formats"

type JobApplicationFiltersProps = {
    activeFilters: FilterState
    onFilterChange: (filter: keyof FilterState, value: string) => void
}

function JobApplicationFilters({ activeFilters, onFilterChange }: JobApplicationFiltersProps) {
    const filterValues = { 
        status: ["", "saved", "applied", "interview", "offer", "accepted", "rejected"],
        jobType: ["", "contract", "full-time", "part time"],
        locationType: ["", "remote", "hybrid", "office"]
    }

    return (
        <div className="space-y-3">
            <h3 className='text-2xl font-bold text-center'>Filters</h3>
            <div className="flex flex-col lg:flex-row gap-4">
                {Object.entries(filterValues).map(([filterName, filterValues]) => (
                    <div key={filterName} className='space-y-1 relative lg:w-1/2 lg:px-2'>
                        <label className='block text-sm font-semibold' htmlFor={filterName}>{formatKeyLabel(filterName)}</label> 
                        <select
                            name={filterName}
                            className="w-full rounded-md bg-slate-800 border border-teal-950 px-3 py-2 focus:outline-teal-800"
                            value={activeFilters[filterName as keyof FilterState]}
                            onChange={(e) => onFilterChange(filterName as keyof FilterState, e.target.value)}
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
        </div>
    )

}

export default JobApplicationFilters