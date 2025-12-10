import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header.tsx'
import DashboardStats from './components/DashboardStats.tsx'
import JobApplicationsTable from './components/JobApplicationsTable'
import NewJobApplicationModal from './components/NewJobApplicationModal'
import type { JobApplication } from './types/JobApplication.ts'
import { mockJobs } from './data/mockJobs.ts'

function App() {
  const [jobApps, setJobs] = useState<JobApplication[]>(mockJobs)
  const [isNewAppModalOpen, setIsNewAppModalOpen] = useState(true)

  function handleDeleteJob(id: string) {
    setJobs(prevJobApps => prevJobApps.filter(japp => japp.id !== id))
  }

  useEffect(() => {
    if (isNewAppModalOpen) {
      const originalOverflow = document.body.style.overflow
      document.body.style.overflow = "hidden"

      return () => {
        document.body.style.overflow = originalOverflow
      }
    }
  }, [isNewAppModalOpen])

  return (
    <>
      <div className='space-y-4'>
        <Header />
        <DashboardStats jobApps={jobApps} />
        <JobApplicationsTable 
          jobApps={jobApps} 
          onDeleteJob={handleDeleteJob} 
          onNewJobApp={() => setIsNewAppModalOpen(true)} 
        />
        {isNewAppModalOpen && (
          <NewJobApplicationModal onClose={() => setIsNewAppModalOpen(false)}/>
        )}
      </div>
    </>
  )
}

export default App
