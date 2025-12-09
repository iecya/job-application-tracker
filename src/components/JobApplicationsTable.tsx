import { mockJobs } from '../data/mockJobs'
import type { JobApplication } from '../types/JobApplication';
import { formatKeyLabel, formatValue } from '../utils/strings';

function JobApplicationsTable() {
    const headers = Array.from(
        new Set(mockJobs.flatMap(j => Object.keys(j).filter(k => k !== "id")))
    ) as (keyof JobApplication)[];

    return(
        <>
            <h2 className='text-2xl font-bold text-center'>Job Applications</h2>
            <div className='space-y-15'>
                {mockJobs.map(job => (
                    <table className='w-full text-sm table-fixed text-left border-collapse bg-teal-950/10 lg:hidden'>
                        <thead className='bg-teal-900/50 text-3xl text-center font-bold'>
                            <tr>
                                <th colSpan={2} className='p-3'>{job.title}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Object.entries(job).filter(([k, _]) => k !== "id" && k !== "title").map(([dataKey, dataValue]) => (
                                <tr>
                                    <td className='w-1/3 border-y border-gray-600 px-2 py-3 font-bold'>{formatKeyLabel(dataKey)}</td>
                                    <td className='w-2/3 border-y border-gray-600 px-2 py-3'>{formatValue(dataKey, dataValue)}</td>
                                </tr>
                            ))}
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
                            </tr>
                        </thead>
                        <tbody>
                            {mockJobs.map(job => (
                                <tr className='hover:bg-teal-800/10'>
                                    {headers.map(header => (
                                        <td className='border-y border-gray-600 p-6 max-w-lg'>{formatValue(header, job[header] ?? "")}</td>
                                    ))}
                                </tr>
                                
                            ))}
                            
                        </tbody>
                    </table>
                </div>


                
            </div>
        </>
    )
}

export default JobApplicationsTable