import { Routes, Route } from "react-router-dom"
import LandingPage from './pages/LandingPage.jsx'
import Blog from './pages/Blog.jsx'
import Projects from './pages/Projects.jsx'
import About from './pages/About.jsx'
import Resume from './pages/Resume.jsx'
import AutodocBlog from './blogposts/AutodocBlog.jsx'
export default function App() {
  return (
  <div className="h-screen">
  <Routes>
    <Route path="/" element={<LandingPage/>}/>
    <Route path="/projects" element={<Projects/>}/>

    <Route path="/blog" element={<Blog/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/resume" element={<Resume/>}/>
    <Route path="/autodoc" element={<AutodocBlog/>}/>
  </Routes>
  </div>
  );
}
