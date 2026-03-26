import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import LogoStrip from '@/components/LogoStrip'
import FeaturedSection from '@/components/FeaturedSection'
import SpeakersSection from '@/components/SpeakersSection'
import ScheduleSection from '@/components/ScheduleSection'
import WhyAttendSection from '@/components/WhyAttendSection'
import BentoSection from '@/components/BentoSection'
import Footer from '@/components/Footer'

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <LogoStrip/>
      <AboutSection/>
      <FeaturedSection/>
      <SpeakersSection/>
      <ScheduleSection/>
      <WhyAttendSection/>
      <BentoSection/>
      <Footer/>
      {/* Additional sections (About, Speakers, Schedule, Apply) will go here */}
    </main>
  )
}