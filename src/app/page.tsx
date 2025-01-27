import Landing from "@/components/Landing/Landing";

import SuccessStories from "@/components/Landing/Testimonial";
import RotatingCards from "@/components/ui/WhyChooseCoFounds";

export default function Home() {
  return (
    <div className="">
      <Landing />
      <RotatingCards />
      <SuccessStories />
      {/* <HowItWorks /> */}
    </div>
  );
}
