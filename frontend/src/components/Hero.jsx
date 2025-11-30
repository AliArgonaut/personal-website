import { Moon, Sun, Database, Zap, Shield, ArrowRight, CheckCircle, Menu, X, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom'
export default function Hero() {
  return (
    <section className=" pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <div className="inline-flex items-center space-x-2 px-4 py-2 bg-[var(--badge-bg)] backdrop-blur-sm rounded-full text-[var(--text-on-primary)] text-sm mb-8">
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-[var(--text-on-primary)] mb-6 leading-tight">
          Lloyd Aleister Bonds
          <br />
        </h1>
        
        <p className="text-xl md:text-2xl text-[var(--hero-text-muted)] mb-10 max-w-3xl mx-auto">
         Backend engineer intern at Sleepy Hollow Design. Class of 2027 Software Engineering at St. Leo University School of Computing, Artificial Intelligence, Robotics, and Data Science. UFC fan.  
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center"> <Link to="/projects"> <button className="px-8 py-4 bg-red-800 flex flex-row gap-2  rounded-lg font-semibold transition"> <Sparkles className="text-white"/> <span className="text-white">Explore My Work</span></button></Link> </div>
      </div>
    </section>
  );
};


