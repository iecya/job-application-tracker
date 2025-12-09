import type { JobApplication } from '../types/JobApplication';
import { formatKeyLabel, formatValue } from '../utils/formats';
import "./JobApplicationsTable.css";

type JobApplicationsTableProps = {
    jobApps: JobApplication[]
}

function JobApplicationsTable({ jobApps: jobs }: JobApplicationsTableProps) {
    const headers = Array.from(
        new Set(jobs.flatMap(j => Object.keys(j).filter(k => k !== "id")))
    ) as (keyof JobApplication)[];

    return(
        <>
            <div className='space-y-4'>
                <h2 className='text-2xl font-bold text-center'>Job Applications</h2>
                <button className='bg-teal-800 py-2 px-3 w-auto mx-auto block font-semibold hover:bg-teal-900 hover:border-transparent focus:outline-teal-600 focus-visible:outline-teal-600'>New Application</button>
                <div className='space-y-15'>
                    {jobs.map(job => (
                        <table className='w-full text-sm table-fixed text-left border-collapse bg-teal-950/10 lg:hidden'>
                            <thead className='bg-teal-900/50 text-3xl text-center font-bold'>
                                <tr>
                                    <th colSpan={2} className='p-3'>{job.title}</th>
                                </tr>
                            </thead>
                            <tbody>
                                {Object.entries(job).filter(([k, _]) => k !== "id" && k !== "title").map(([dataKey, dataValue]) => (
                                    <tr>
                                        <td className='border-y border-gray-600 px-2 py-3 font-bold'>{formatKeyLabel(dataKey)}</td>
                                        <td className='border-y border-gray-600 px-2 py-3'>{formatValue(dataKey, dataValue)}</td>
                                    </tr>
                                ))}
                                <tr>
                                    <td className='px-2 py-3 text-right'>
                                        <button className="actionButton actionEditButton w-full">Edit</button>
                                    </td>
                                    <td className='px-2 py-3 text-left'>
                                        <button className="actionButton actionDeleteButton w-full">Delete</button>
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
                                        <th className='p-6'>{formatKeyLabel(h)}</th>
                                    ))}
                                    <th className='p-6'>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {jobs.map(job => (
                                    <tr className='hover:bg-teal-800/10'>
                                        {headers.map(header => (
                                            <td className='border-y border-gray-600 p-6 max-w-lg'>{formatValue(header, job[header] ?? "")}</td>
                                        ))}
                                        <td className='border-y border-gray-600 p-6 max-w-lg space-x-4'>
                                            <button className="actionButton actionEditButton">Edit</button>
                                            <button className="actionButton actionDeleteButton">Delete</button>
                                    </td>
                                    </tr>                                    
                                ))}                                
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default JobApplicationsTable