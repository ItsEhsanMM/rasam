import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import Stepper from './Stepper';

const Process = () => {
  return (
    <div className="space-y-10">
      <div className="text-center">
        <h2>فرآیند اجرایی پروژه های UI/UX</h2>
        <span className="font-extralight">
          آماده ارائه خدمات حرفه‌ای با بیش از 7 سال تجربه کاری
        </span>
      </div>
      <div className="flex flex-col gap-y-10 md:flex-row">
        <Stepper />
        <ReactCompareSlider
          className="size-fit"
          itemOne={
            <ReactCompareSliderImage
              src={'https://rasam.agency/wp-content/uploads/2023/11/portfolio-after.webp'}
              alt="prototype"
            />
          }
          itemTwo={
            <ReactCompareSliderImage
              src={'https://rasam.agency/wp-content/uploads/2023/11/portfolio-before.webp'}
              alt="wireframe"
            />
          }
        />
      </div>
    </div>
  );
};
export default Process;
