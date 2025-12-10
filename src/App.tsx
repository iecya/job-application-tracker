import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header.tsx'
import DashboardStats from './components/DashboardStats.tsx'
import JobApplicationsTable from './components/JobApplicationsTable'
import NewJobApplicationModal from './components/NewJobApplicationModal'
import type { JobApplication } from './types/JobApplication.ts'
import { mockJobs } from './data/mockJobs.ts'
import EditJobApplicationModal from './components/EditJobApplicationModal.tsx'

function App() {
  const [jobApps, setJobs] = useState<JobApplication[]>(mockJobs)
  const [isNewAppModalOpen, setIsNewAppModalOpen] = useState(false)
  const [editingJobApp, setEditingJobApp] = useState<JobApplication | null>(null)

  function handleDeleteJob(id: string) {
    setJobs(prevJobApps => prevJobApps.filter(japp => japp.id !== id))
  }

  function handleNewJobApp(jobApp: JobApplication) {
    setJobs(prevJobs => [jobApp, ...prevJobs])
    setIsNewAppModalOpen(false)
  }

  function handleStartEditJob(id: string) {
    const jobApp = jobApps.find(japp => japp.id === id)
    if (!jobApp) return
    setEditingJobApp(jobApp)
  }

  function handleSaveEditingJob(jobApp: JobApplication) {
    setJobs(prevJobApps => 
      prevJobApps.map(japp => 
        japp.id === jobApp.id ? jobApp : japp
      )
    )
    setEditingJobApp(null)
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
          onEditJobApp={handleStartEditJob}
        />
        {isNewAppModalOpen && (
          <NewJobApplicationModal 
            onClose={() => setIsNewAppModalOpen(false)} 
            onSave={handleNewJobApp} 
          />
        )}
        {editingJobApp && (
          <EditJobApplicationModal
            job={editingJobApp}
            onClose={() => setEditingJobApp(null)}
            onSave={handleSaveEditingJob}
          />
        )}
      </div>
    </>
  )
}

export default App
