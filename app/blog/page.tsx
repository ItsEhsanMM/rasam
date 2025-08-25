import BlogCards from '@/components/Blog/BlogCards';
import { blogItems } from '@/lib/const';

const page = () => {
  return (
    <div>
      <BlogCards items={blogItems} />
    </div>
  );
};
export default page;
