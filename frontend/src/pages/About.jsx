import Navigation from '../components/Navigation.jsx'

import { Moon, Sun, Database, Zap, Shield, ArrowRight, CheckCircle, Menu, X, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom'


export default function About () {
  return (
  <>
    <Navigation />
    <section className=" pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <div className="inline-flex items-center space-x-2 px-4 bg-[var(--badge-bg)] backdrop-blur-sm rounded-full text-[var(--text-on-primary)] text-sm mb-8">
        </div>
        
        <h1 className="text-3xl md:text-3xl font-bold text-[var(--text-on-primary)] mb-6 leading-tight">
          About Me 
          <br />
        </h1>
        
        <p className="text-xl md:text-xl text-[var(--hero-text-muted)] mb-10 max-w-3xl mx-auto">
         I'm Lloyd. I am 23, and American. Most of my backend programming experience is between Java and JavaScript/TypeScript. I've been programming for about 4 years, mostly full stack WebApps and CLI tools. I like Golang, and I love working with AI in any language.  I strive for simplicity, minimalism, and taste in my work. I love working in the terminal. <br /> <br /> Fun facts: I was a quarter-finalist in the 2014 Scripps National Spelling Bee. I was on ESPN for like 5 minutes! Music is another big part of my life: I play guitar and my favorite genre is death metal. I also am a huge fan of MMA.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center"> <Link to="/resume"> <button className="px-8 py-4 flex flex-row gap-2  rounded-lg font-semibold transition"> <Sparkles className="text-white"/> <span className="text-white">Explore My Work</span></button></Link> </div>
      </div>
    </section>
  



   </>
  )
  
}
