import HeroSection from '../../components/HomeComponents/HeroSection';
import Stats from '../../components/HomeComponents/Stats';
import GetStarted from '../../components/HomeComponents/GetStarted';
import CoachingVideoSection from '../../components/HomeComponents/CoachingVideoSection';
import OurEvents from '../../components/HomeComponents/OurEvents';
import BlogSection from '../../components/HomeComponents/BlogSection';
import BookSessionCTA from '../../components/HomeComponents/BookSessionCTA';

export default function Home() {

    return (
        <div className="bg-white">

            <HeroSection />

            <Stats />

            <GetStarted />

            <CoachingVideoSection />

            <OurEvents />

            <BlogSection />

            <BookSessionCTA />

        </div>
    )
}
