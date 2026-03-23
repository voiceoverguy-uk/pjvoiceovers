import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import AudioDemos from '@/components/AudioDemos';
import VideoWork from '@/components/VideoWork';
import Services from '@/components/Services';
import Studio from '@/components/Studio';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <AudioDemos />
      <VideoWork />
      <Services />
      <Studio />
      <Contact />
      <Footer />
    </main>
  );
}
