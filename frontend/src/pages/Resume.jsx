import Navigation from '../components/Navigation.jsx'
import ResumeData from '../static/ResumeData.js'
import { Download, Mail } from 'lucide-react'
export default function Resume () {
  return (
  
  <>
    <Navigation />
    <section className=" pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <div className="inline-flex items-center space-x-2 px-4 bg-[var(--badge-bg)] backdrop-blur-sm rounded-full text-[var(--text-on-primary)] text-sm mb-8">
        </div>
        
        <h1 className="text-3xl md:text-3xl font-bold text-[var(--text-on-primary)]  leading-tight">
          Resume 
        </h1>
        <div className="flex mt-3 flex-row sm:flex-row gap-4 justify-center items-center scale-75"> 
             
              <button className="px-3 py-4 bg-red-800 flex flex-row gap-2  rounded-lg font-semibold transition"> 
                <Download className="text-white"/> 
                <span className="text-white">
                 Save 
                </span>
              </button>

              <button className="px-3 py-4 border border-b flex flex-row gap-2  rounded-lg font-semibold transition"> 
                <Mail className="text-black"/> 
                <span className="text-black">
                 Email
                </span>
              </button>
      </div>
<div className="text-left border border-dashed border-black scale-90">           <div className="max-w-4xl mx-auto p-8 bg-white text-black">
      {/* Header */}
      <header className="border-b-2 border-black pb-4 mb-6">
        <h1 className="text-4xl font-bold mb-1">{ResumeData.name}</h1>
        <h2 className="text-xl font-semibold text-gray-700">{ResumeData.title}</h2>
      </header>

      {/* Summary */}
      <section className="mb-6">
        <h3 className="text-lg font-bold uppercase tracking-wide border-b border-black pb-1 mb-3">
          Summary
        </h3>
        <p className="text-sm leading-relaxed">{ResumeData.summary}</p>
      </section>

      {/* Education */}
      <section className="mb-6">
        <h3 className="text-lg font-bold uppercase tracking-wide border-b border-black pb-1 mb-3">
          Education
        </h3>
        {ResumeData.education.map((edu, i) => (
          <div key={i} className="mb-3">
            <div className="flex justify-between items-baseline">
              <div>
                <p className="font-semibold">{edu.school}</p>
                <p className="text-sm">{edu.major}</p>
              </div>
              <div className="text-right text-sm">
                <p>GPA: {edu.gpa}</p>
                <p>Expected {edu.grad}</p>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Work Experience */}
      <section className="mb-6">
        <h3 className="text-lg font-bold uppercase tracking-wide border-b border-black pb-1 mb-3">
          Experience
        </h3>
        {ResumeData.work.map((job, i) => (
          <div key={i} className="mb-4">
            <div className="flex justify-between items-baseline mb-2">
              <div>
                <p className="font-semibold">{job.role}</p>
                <p className="text-sm">{job.employer}</p>
              </div>
              <p className="text-sm font-medium">{job.period}</p>
            </div>
            <ul className="list-disc list-inside space-y-1">
              {job.details.map((detail, j) => (
                <li key={j} className="text-sm leading-relaxed">{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* Projects */}
      <section className="mb-6">
        <h3 className="text-lg font-bold uppercase tracking-wide border-b border-black pb-1 mb-3">
          Projects
        </h3>
        {ResumeData.projects.map((project, i) => (
          <div key={i} className="mb-4">
            <div className="flex justify-between items-baseline mb-1">
              <p className="font-semibold">{project.title}</p>
              {project.link && (
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm underline"
                >
                  GitHub
                </a>
              )}
            </div>
            <p className="text-sm italic mb-1">{project.description}</p>
            <p className="text-xs mb-2">
              <span className="font-semibold">Tech:</span> {project.tech.join(", ")}
            </p>
            <ul className="list-disc list-inside space-y-1">
              {project.impact.map((item, j) => (
                <li key={j} className="text-sm leading-relaxed">{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </div>
</div>


        
      </div>
    </section>
  



   </>
  )
  
}
