import type { JobApplication } from '../types/JobApplication';
import { formatKeyLabel, formatValue } from '../utils/formats';
import "./JobApplicationsTable.css";

type JobApplicationsTableProps = {
    jobApps: JobApplication[],
    onDeleteJob: (id: string) => void,
    onNewJobApp: () => void
    onEditJobApp: (id: string) => void
}

function JobApplicationsTable({ jobApps, onDeleteJob, onNewJobApp, onEditJobApp }: JobApplicationsTableProps) {
    const headers = Array.from(
        new Set(jobApps.flatMap(j => Object.keys(j).filter(k => k !== "id")))
    ) as (keyof JobApplication)[];

    return(
        <>
            <div className='space-y-4'>
                <h2 className='text-2xl font-bold text-center'>Job Applications</h2>
                <button className='bg-teal-800 py-2 px-3 w-auto mx-auto block font-semibold hover:bg-teal-900 hover:border-transparent focus:outline-teal-600 focus-visible:outline-teal-600'
                    onClick={() => onNewJobApp()}>New Application</button>
                {jobApps.length === 0 ? (
                        <div className='italic text-gray-400'>
                            <p>You do not have any job application saved.</p>
                            <p>Add a new job application using the button above to get started</p>
                        </div>
                    ) : (
                        <div className='space-y-15'>
                            {jobApps.map(job => (
                                <table key={job.id} className='w-full text-sm table-fixed text-left border-collapse bg-teal-950/10 lg:hidden'>
                                    <thead className='bg-teal-900/50 text-3xl text-center font-bold'>
                                        <tr>
                                            <th colSpan={2} className='p-3'>{job.title}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {Object.entries(job).filter(([k, _]) => k !== "id" && k !== "title").map(([dataKey, dataValue]) => (
                                            <tr key={dataKey}>
                                                <td className='border-y border-gray-600 px-2 py-3 font-bold'>{formatKeyLabel(dataKey)}</td>
                                                <td className='border-y border-gray-600 px-2 py-3'>{formatValue(dataKey, dataValue)}</td>
                                            </tr>
                                        ))}
                                        <tr>
                                            <td className='px-2 py-3 text-right'>
                                                <button className="actionButton actionEditButton w-full"
                                                    onClick={() => {onEditJobApp(job.id)}}
                                                >Edit</button>
                                            </td>
                                            <td className='px-2 py-3 text-left'>
                                                <button className="actionButton actionDeleteButton w-full"
                                                    onClick={() => {
                                                        const shouldDelete = window.confirm(
                                                            `Are you sure you want to delete "${job.title}"?`
                                                        )

                                                        if (shouldDelete) onDeleteJob(job.id)
                                                    }}>Delete</button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            ))}

                            <div className='w-full overflow-x-auto'>
                                <table className='table-auto min-w-max text-md text-left border-collapse bg-teal-950/10 hidden lg:block'>
                                    <thead className='bg-teal-900/50 font-bold'>
                                        <tr>
                                            {headers.map(h => (
                                                <th key={h} className='p-6'>{formatKeyLabel(h)}</th>
                                            ))}
                                            <th className='p-6'>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {jobApps.map(job => (
                                            <tr key={job.id} className='hover:bg-teal-800/10'>
                                                {headers.map(header => (
                                                    <td key={header} className='border-y border-gray-600 p-6 max-w-lg'>{formatValue(header, job[header] ?? "")}</td>
                                                ))}
                                                <td className='border-y border-gray-600 p-6 max-w-lg space-x-4'>
                                                    <button className="actionButton actionEditButton"
                                                            onClick={() => {onEditJobApp(job.id)}}
                                                    >Edit</button>
                                                    <button className="actionButton actionDeleteButton"
                                                            onClick={() => {
                                                                const shouldDelete = window.confirm(
                                                                    `Are you sure you want to delete "${job.title}"?`
                                                                )

                                                                if (shouldDelete) onDeleteJob(job.id)
                                                            }}
                                                    >Delete</button>
                                                </td>
                                            </tr>                                    
                                        ))}                                
                                    </tbody>
                                </table>
                            </div>
                        </div>

                    )}
                
            </div>
        </>
    )
}

export default JobApplicationsTable