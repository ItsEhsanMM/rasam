import Educations from '@/components/educations/Educations';
import Hero from '@/components/Hero';
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
    </>
  );
}
