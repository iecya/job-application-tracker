import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header.tsx'
import DashboardStats from './components/DashboardStats.tsx'
import JobApplicationsTable from './components/JobApplicationsTable'
import NewJobApplicationModal from './components/NewJobApplicationModal'
import type { JobApplication } from './types/JobApplication.ts'
import { mockJobs } from './data/mockJobs.ts'
import EditJobApplicationModal from './components/EditJobApplicationModal.tsx'
import useJobApplicationStore from './hooks/useJobApplicationStore.ts'

function App() {
  const [isNewAppModalOpen, setIsNewAppModalOpen] = useState(false)
  const [editingJobApp, setEditingJobApp] = useState<JobApplication | null>(null)
  const {
    jobApplications,
    handleDeleteJobApplication,
    handleNewJobApplication,
    handleSaveJobApplication
  } = useJobApplicationStore(mockJobs)

  function handleStartEditJob(id: string) {
    const jobApp = jobApplications.find(japp => japp.id === id)
    if (!jobApp) return
    setEditingJobApp(jobApp)
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
        <DashboardStats jobApps={jobApplications} />
        <JobApplicationsTable 
          jobApps={jobApplications} 
          onDeleteJob={handleDeleteJobApplication} 
          onNewJobApp={() => setIsNewAppModalOpen(true)}
          onEditJobApp={handleStartEditJob}
        />
        {isNewAppModalOpen && (
          <NewJobApplicationModal 
            onClose={() => setIsNewAppModalOpen(false)} 
            onSave={handleNewJobApplication} 
          />
        )}
        {editingJobApp && (
          <EditJobApplicationModal
            job={editingJobApp}
            onClose={() => setEditingJobApp(null)}
            onSave={handleSaveJobApplication}
          />
        )}
      </div>
    </>
  )
}

export default App
