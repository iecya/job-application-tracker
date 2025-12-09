import { useState } from 'react'
import './App.css'
import Header from './components/Header.tsx'
import DashboardStats from './components/DashboardStats.tsx'
import JobApplicationsTable from './components/JobApplicationsTable.tsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='space-y-4'>
        <Header />
        <DashboardStats />
        <JobApplicationsTable />
      </div>
    </>
  )
}

export default App
