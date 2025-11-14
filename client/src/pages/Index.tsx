import { useEffect, useRef, useState } from 'react';

import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import MusicConsentPopup from '@/components/MusicConsentPopup';
// Cover images from attached assets
import cover1Image from '@assets/cover1_1763054214682.jpg';
import cover2Image from '@assets/prenup5_1763094338842.jpg';
import cover3Image from '@assets/prenup7_1763094343026.jpg';
import CountdownSection from '@/components/CountdownSection';
import StorySection from '@/components/StorySection';
import ScrollTriggeredTimeline from '@/components/ScrollTriggeredTimeline';
import VenueSection from '@/components/VenueSection';
import DressCodeSection from '@/components/DressCodeSection';
import HashtagGiftsSection from '@/components/HashtagGiftsSection';
import EntourageSection from '@/components/EntourageSection';
import RSVPSection from '@/components/RSVPSection';
import MemorableMomentsSection from '@/components/MemorableMomentsSection';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';
import CoverSection from '@/components/CoverSection';
import InvitationRevealSection from '@/components/InvitationRevealSection';
import MusicControl from '@/components/MusicControl';
import SaveTheDateSection from '@/components/SaveTheDateSection';
import { AnimationContext } from '@/contexts/AnimationContext';

const Index = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [showMusicConsent, setShowMusicConsent] = useState(true);
  const [animationsEnabled, setAnimationsEnabled] = useState(true);

  // Handle music consent
  const handleMusicConsent = async (consent: boolean) => {
    setShowMusicConsent(false);
    if (consent && audioRef.current) {
      try {
        await audioRef.current.play();
      } catch (error) {
        console.error('Music play failed:', error);
      }
    }
  };

  // Ensure audio is properly initialized
  useEffect(() => {
    if (audioRef.current) {
      const audio = audioRef.current;
      audio.volume = 0.3;
      audio.loop = true;

      // Handle audio loading
      const handleCanPlay = () => {
        console.log('Audio is ready to play');
      };

      const handleError = (e: Event) => {
        console.error('Audio loading error:', e);
      };

      const handleLoadedData = () => {
        console.log('Audio data loaded successfully');
      };

      audio.addEventListener('canplay', handleCanPlay);
      audio.addEventListener('error', handleError);
      audio.addEventListener('loadeddata', handleLoadedData);

      return () => {
        audio.removeEventListener('canplay', handleCanPlay);
        audio.removeEventListener('error', handleError);
        audio.removeEventListener('loadeddata', handleLoadedData);
      };
    }
  }, []);

  return (
    <AnimationContext.Provider value={{ animationsEnabled }}>
      {/* Background Music - Always present */}
      <audio
        ref={audioRef}
        loop
        preload="auto"
        crossOrigin="anonymous"
        style={{ display: 'none' }}
        data-testid="background-audio"
      >
        <source
          src="https://res.cloudinary.com/ds2vff7kd/video/upload/v1763094052/Yellow_-_Coldplay_BRIDGERTON_Brooklyn_Duo_f8incx.mp3"
          type="audio/mpeg"
        />
        Your browser does not support the audio element.
      </audio>

      <div className="min-h-screen relative">
        <Navigation />

        {/* Music Consent Popup */}
        <MusicConsentPopup 
          onConsent={handleMusicConsent} 
          isVisible={showMusicConsent}
        />

        {/* Main Content Sections */}
        <main className="relative z-10">
          <HeroSection />
          <InvitationRevealSection />
          <CountdownSection />
          <StorySection />
          <CoverSection
            imageUrl={cover1Image}
            alt="William & Erhica Wedding Cover Image 1"
          />
          <ScrollTriggeredTimeline />
          <VenueSection />
          <CoverSection
            imageUrl={cover2Image}
            alt="William & Erhica Wedding Cover Image 2"
          />
          <DressCodeSection />
          <CoverSection
            videoUrl="https://res.cloudinary.com/dt5dy99qx/video/upload/v1763105408/Untitled_video_-_Made_with_Clipchamp_1_vpskcg.mp4"
            alt="William & Erhica Wedding Cover Video - After Attire Guide"
          />
          <CoverSection
            videoUrl="https://res.cloudinary.com/ds2vff7kd/video/upload/v1763094504/4_apnm5e.mp4"
            alt="William & Erhica Wedding Cover Video 2"
          />
          <HashtagGiftsSection />
          <SaveTheDateSection />
          <MemorableMomentsSection />
          <RSVPSection />
          <CoverSection
            videoUrl="https://res.cloudinary.com/dt5dy99qx/video/upload/v1763105406/Untitled_video_-_Made_with_Clipchamp_2_i5fx9p.mp4"
            alt="William & Erhica Wedding Cover Video - After RSVP"
          />
          <EntourageSection />
          <CoverSection
            imageUrl={cover3Image}
            alt="William & Erhica Wedding Cover Image 3"
          />
          <FAQSection />
          <Footer />
        </main>

        {/* Music Control - always show */}
        <MusicControl audioRef={audioRef} />
      </div>
    </AnimationContext.Provider>
  );
};

export default Index;