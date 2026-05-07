/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import AcademicsAdmissions from './components/AcademicsAdmissions';
import Fees from './components/Fees';
import Materials from './components/Materials';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import NewsContact from './components/NewsContact';
import MapSection from './components/MapSection';
import Footer from './components/Footer';

import FloatingButtons from './components/FloatingButtons';

export default function App() {
  return (
    <main className="min-h-screen bg-stone font-sans selection:bg-pine selection:text-white">
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <AcademicsAdmissions />
      <Fees />
      <Materials />
      <Gallery />
      <Testimonials />
      <NewsContact />
      <MapSection />
      <Footer />
      <FloatingButtons />
    </main>
  );
}
