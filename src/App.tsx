import { useState } from 'react'
import './App.css'
import Header from './components/Header.tsx'
import DashboardStats from './components/DashboardStats.tsx'
import JobApplicationsTable from './components/JobApplicationsTable.tsx'
import type { JobApplication } from './types/JobApplication.ts'
import { mockJobs } from './data/mockJobs.ts'

function App() {
  const [jobApps, _setJobs] = useState<JobApplication[]>(mockJobs)

  return (
    <>
      <div className='space-y-4'>
        <Header />
        <DashboardStats jobApps={jobApps} />
        <JobApplicationsTable jobApps={jobApps} />
      </div>
    </>
  )
}

export default App
