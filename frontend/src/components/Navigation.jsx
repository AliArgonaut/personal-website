
import { Moon, Sun, Database, Zap, Shield, ArrowRight, CheckCircle, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom'
import CorneredButton from '../components/CorneredButton.jsx'
export default function Navigation() {
    return (
    <>
        <nav className="hidden md:block w-full bg-[var(--nav-bg)] z-50 border-b border-[var(--nav-border)]">
            <div className="max-w-7xl mx-auto px-4 flex flex-row items-center justify-center sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                   <div className=" flex items-center space-x-8">
                       <div className="text-[var(--text-secondary)] hover:text-[var(--brand-primary)] transition">
                           <Link to="/about"><CorneredButton>About</CorneredButton></Link> 
                       </div>
                       <div className="text-[var(--text-secondary)] hover:text-[var(--brand-primary)] transition">
                           <Link to="/projects"><CorneredButton>Projects</CorneredButton></Link> 
                       </div>
                       <div className="text-[var(--text-secondary)] hover:text-[var(--brand-primary)] transition">
                           <Link to="/resume"><CorneredButton>Resume</CorneredButton></Link>
                       </div>
                      <div className="text-black">
                        <Link to="/blog">                         
                          <CorneredButton>Blog</CorneredButton>
                        </Link>  
                      </div>
                   </div>
                </div>
            </div>
        </nav>

    
        <nav className="block md:hidden w-full bg-[var(--nav-bg)] z-50 border-b border-[var(--nav-border)]">
            <div className="max-w-7xl mx-auto px-4 flex flex-row items-center justify-center sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                   <div className=" flex items-center space-x-8">
                       <div className="text-[var(--text-secondary)] hover:text-[var(--brand-primary)] transition">
                           <Link to="/about">About</Link> 
                       </div>
                       <div className="text-[var(--text-secondary)] hover:text-[var(--brand-primary)] transition">
                           <Link to="/projects">Projects</Link> 
                       </div>
                       <div className="text-[var(--text-secondary)] hover:text-[var(--brand-primary)] transition">
                           <Link to="/resume">Resume</Link>
                       </div>
                      <div className="text-black">
                        <Link to="/blog">                         
                          <button>Blog</button>
                        </Link>  
                      </div>

                   </div>
                </div>
            </div>
        </nav>
        </>
  );
};


