import Educations from '@/components/Educations/Educations';
import Hero from '@/components/Hero';
import Plans from '@/components/Plans/Plans';
import Process from '@/components/Process/Process';
import RequestForm from '@/components/RequestForm/RequestForm';
import Services from '@/components/Services/Services';

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Process />
      <Educations />
      <RequestForm />
      <Plans />
    </>
  );
}
