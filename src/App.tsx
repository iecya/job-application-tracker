import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header.tsx'
import DashboardStats from './components/DashboardStats.tsx'
import JobApplicationsTable from './components/JobApplicationsTable'
import NewJobApplicationModal from './components/NewJobApplicationModal'
import type { JobApplication } from './types/JobApplication.ts'
import EditJobApplicationModal from './components/EditJobApplicationModal.tsx'
import useJobApplicationStore from './hooks/useJobApplicationStore.ts'
import JobApplicationFilters from './components/JobApplicationFilters.tsx'

function App() {
  const [isNewAppModalOpen, setIsNewAppModalOpen] = useState(false)
  const [editingJobApp, setEditingJobApp] = useState<JobApplication | null>(null)
  const {
    jobApplications,
    handleDeleteJobApplication,
    handleNewJobApplication,
    handleSaveJobApplication
  } = useJobApplicationStore()

  function handleStartEditJob(id: string) {
    const jobApp = jobApplications.find(japp => japp.id === id)
    if (!jobApp) return
    setEditingJobApp(jobApp)
  }

  function handleNewJobAndCloseModal(newJobApplication: JobApplication) {
    handleNewJobApplication(newJobApplication)
    setIsNewAppModalOpen(false)
  }

  function handleSaveJobAndCloseModal(jobApplication: JobApplication) {
    handleSaveJobApplication(jobApplication)
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

        {jobApplications.length > 0 && (
          <>
            
            <DashboardStats jobApps={jobApplications} />
          </>
        )}
        <div className='space-y-4'>
            <h2 className='text-2xl font-bold text-center'>Job Applications</h2>
            <button className='bg-teal-800 py-2 px-3 w-auto mx-auto block font-semibold hover:bg-teal-900 hover:border-transparent focus:outline-teal-600 focus-visible:outline-teal-600'
                onClick={() => setIsNewAppModalOpen(true)}>New Application</button>
            
            {jobApplications.length === 0 ? (
              <div className='italic text-gray-400'>
                  <p>You do not have any job application saved.</p>
                  <p>Add a new job application using the button above to get started</p>
              </div>
            ) : (
              <>
                <JobApplicationFilters />
                <JobApplicationsTable 
                  jobApps={jobApplications} 
                  onDeleteJob={handleDeleteJobApplication} 
                  onEditJobApp={handleStartEditJob}
                />  
              </> 
            )}
                         
        </div>
        {isNewAppModalOpen && (
          <NewJobApplicationModal 
            onClose={() => setIsNewAppModalOpen(false)} 
            onSave={handleNewJobAndCloseModal} 
          />
        )}
        {editingJobApp && (
          <EditJobApplicationModal
            job={editingJobApp}
            onClose={() => setEditingJobApp(null)}
            onSave={handleSaveJobAndCloseModal}
          />
        )}
      </div>
    </>
  )
}

export default App
