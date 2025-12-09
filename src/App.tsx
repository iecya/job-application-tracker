import { useState } from 'react'
import './App.css'
import Header from './components/Header.tsx'
import DashboardStats from './components/DashboardStats.tsx'
import JobApplicationsTable from './components/JobApplicationsTable'
import NewJobApplicationModal from './components/NewJobApplicationModal'
import type { JobApplication } from './types/JobApplication.ts'
import { mockJobs } from './data/mockJobs.ts'

function App() {
  const [jobApps, setJobs] = useState<JobApplication[]>(mockJobs)

  function handleDeleteJob(id: string) {
    setJobs(prevJobApps => prevJobApps.filter(japp => japp.id !== id))
  }

  return (
    <>
      <div className='space-y-4'>
        <Header />
        <DashboardStats jobApps={jobApps} />
        <JobApplicationsTable jobApps={jobApps} onDeleteJob={handleDeleteJob} />
        <NewJobApplicationModal />
      </div>
    </>
  )
}

export default App
