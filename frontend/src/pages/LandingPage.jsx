import Navigation from '../components/Navigation.jsx'
import Hero from '../components/Hero.jsx'
import LinkBar from '../components/LinkBar.jsx'
export default function LandingPage () {
    return (
        <>
      <div className="flex flex-col items-center">
            <Navigation />
            <Hero />
            <LinkBar />
      </div>
        </>
    )
}
