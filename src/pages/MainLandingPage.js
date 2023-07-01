import React, { useState } from 'react';
import AnimationRevealPage from 'helpers/AnimationRevealPage.js';
import Home from 'components/home/Home.js';
import AboutUs from 'components/features/AboutUs';
import Benefits from 'components/features/Benefits.js';
import OurWork from 'components/features/OurWork.js';
import Process from 'components/features/Process.js';
import ContactUs from 'components/forms/ContactUs.js';
import Footer from 'components/footers/Footer.js';

export default () => {
  const [email, setEmail] = useState('');

  return (
    <AnimationRevealPage>
      <Home email={email} handleEmailChange={(value) => setEmail(value)} />
      <AboutUs />
      <Benefits />
      <OurWork />
      <Process />
      <ContactUs
        preFillEmail={email}
        handleEmailChange={(value) => setEmail(value)}
      />
      <Footer />
    </AnimationRevealPage>
  );
};
