import Image from 'next/image';

interface Service {
  id: number;
  imgUrl: string;
  title: string;
  description: string;
}

interface ServicesBoxProps {
  services: Service[];
}

const ServicesBox: React.FC<ServicesBoxProps> = ({ services }) => {
  return (
    <>
      {services.map((service) => (
        <div key={service.id} className="border-border rounded-md border p-5 text-center">
          <div className="flex w-full items-center justify-center">
            <Image src={service.imgUrl} alt={service.title} width={80} height={80} />
          </div>
          <div className="space-y-2">
            <h3>{service.title}</h3>
            <p className="text-sm font-extralight">{service.description}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default ServicesBox;
