import React from 'react';
import Analytics from '../components/analytics/Analytics';
import Features from '../components/features/Features';
import Projects from '../components/projects/Projects';
import Roadmap from '../components/roadmap/Roadmap';
import FirstSection from '../components/sections/FirstSection';
import { FlexContainer } from '../components/shared/Container';
/* import VideoSection from '../components/video/VideoSection'; */

const MainContainer = () => {
  return (
    <FlexContainer className="column">
      <FirstSection />
      <Features />
      {/* <VideoSection /> */}
      <Projects />
      <Analytics />
      <Roadmap />
    </FlexContainer>
  );
};

export default MainContainer;
