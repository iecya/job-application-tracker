import type { JobApplication } from "../types/JobApplication";

export const mockJobs: JobApplication[] = [
  {
    id: crypto.randomUUID(),
    title: "Frontend Engineer",
    company: "Airwallex",
    hiringCompany: "Paxus Recruitment",
    url: "https://example.com/airwallex-frontend",
    expiryDate: "2025-02-15T00:00:00.000Z",
    locationType: "hybrid",
    salary: "$130k–$150k + super",
    jobType: "full-time",
    status: "applied",
    notes: "Applied through recruiter; strong focus on React + TypeScript.",
    dateApplied: "2025-01-28T00:00:00.000Z",
    source: "LinkedIn",
    lastUpdated: "2025-01-28T12:40:00.000Z",
    nextFollowUp: "2025-02-03T00:00:00.000Z"
  },

  {
    id: crypto.randomUUID(),
    title: "Junior Bookkeeper",
    company: "Perth Accounting Solutions",
    url: "https://example.com/bookkeeping",
    locationType: "office",
    salary: "$55k–$65k",
    jobType: "full-time",
    status: "saved",
    notes: "Small firm; requires MYOB experience. Might be a good skill-builder.",
    source: "Seek",
    lastUpdated: "2025-01-27T09:20:00.000Z"
  },

  {
    id: crypto.randomUUID(),
    title: "React Developer (Contract)",
    company: "Canva",
    hiringCompany: "Hays Recruitment",
    url: "https://example.com/canva-contract",
    expiryDate: "2025-02-20T00:00:00.000Z",
    locationType: "remote",
    salary: "$700/day",
    jobType: "contract",
    status: "interview",
    notes: "Had screening interview with Hays; tech interview scheduled.",
    dateApplied: "2025-01-25T00:00:00.000Z",
    source: "Recruiter Referral",
    lastUpdated: "2025-01-29T15:30:00.000Z",
    nextFollowUp: "2025-02-01T00:00:00.000Z"
  },

  {
    id: crypto.randomUUID(),
    title: "Part-Time Admin Assistant",
    company: "WA Clinic Group",
    url: "https://example.com/admin-assistant",
    locationType: "office",
    salary: "$30–35/hour",
    jobType: "part time",
    status: "rejected",
    notes: "Received email rejection; asking for experience in medical admin.",
    dateApplied: "2025-01-20T00:00:00.000Z",
    source: "Indeed",
    lastUpdated: "2025-01-26T08:10:00.000Z"
  },

  {
    id: crypto.randomUUID(),
    title: "Software Support Specialist",
    company: "Atlassian",
    url: "https://example.com/atlassian-support",
    expiryDate: "2025-02-10T00:00:00.000Z",
    locationType: "remote",
    salary: "Competitive",
    jobType: "full-time",
    status: "offer",
    notes: "Offer received — deciding whether to accept.",
    dateApplied: "2025-01-10T00:00:00.000Z",
    source: "Company Website",
    lastUpdated: "2025-01-29T18:00:00.000Z",
    nextFollowUp: "2025-02-05T00:00:00.000Z"
  }
];
