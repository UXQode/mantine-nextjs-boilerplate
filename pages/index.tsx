import { Contact } from '@/components/Contact/Contact';
import { Feature } from '@/components/Feature/Feature';
import { Footer } from '@/components/Footer/Footer';
import { Header } from '@/components/Header/Header';
import { Hero } from '@/components/Hero/Hero';
import PricingTable from '@/components/Pricing/Pricing';

export default function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <Feature />
      <PricingTable />
      <Contact />
      <Footer />
    </>
  );
}