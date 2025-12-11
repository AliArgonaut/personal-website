import { Github, Linkedin } from 'lucide-react'
export default function LinkBar () {
  return (
    <div className=" max-w-1/2 flex flex-row text-black gap-10">
      <a href="https://github.com/AliArgonaut">  <Github /></a>
       <a href="www.linkedin.com/in/lloyd-bonds-460978214"> <Linkedin /></a>
    </div>
  )
}
