import Hero from "@/components/leadingpage/Hero"
import InfoSection from "@/components/leadingpage/InfoSection"
import NewsSection from "@/components/leadingpage/NewsSection"
import TurarJoyMajmuasi from "@/components/leadingpage/TurarJoyMajmuasi"
import WhyChooseUs from "@/components/leadingpage/WhyChooseUs"
import SponsorsCarousel from "@/components/leadingpage/SponsorsCarousel"



export default function HomePage() {
  return (
    <main>
      <Hero />
      <InfoSection/>
      <NewsSection/>
      <TurarJoyMajmuasi/>
      <WhyChooseUs/>
      <SponsorsCarousel/>
    </main>
  )
}
