import { plans } from '@/lib/const';
import PlanBoxes from './PlanBoxes';

const Plans = () => {
  return (
    <section className="space-y-10">
      <div className="text-center">
        <h2>پلن های قیمتی</h2>
        <span className="font-extralight">قیمت خدمات ما</span>
      </div>
      <PlanBoxes data={plans} />
    </section>
  );
};
export default Plans;
