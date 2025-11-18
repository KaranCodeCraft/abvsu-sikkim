
import Welcome from "@/ui/Landing/Welcome";
import Programme from "@/ui/Landing/Programme";
import MediaCoverage from "@/ui/Landing/MediaCoverage";
import Slider from "@/ui/common/Slider";
import NewsAndUpdates from "@/ui/Landing/NewsAndUpdates";
import Highlight from "@/ui/Landing/Highlight";
import Staff from "@/ui/Landing/Staff";
import Events from "@/ui/Landing/Events";
import Testimonial from "@/ui/Landing/Testimonial";
import Video from "@/ui/Landing/Video";
import Counter from "@/ui/Landing/Counter";
import AppreciationSection from "@/ui/Landing/Appreciation";

export default function Home() {
  return (
    <div className="bg-white">
      <Video/>  
      {/* <Slider/> */}
     
      <Welcome />
      <Counter/>
      <AppreciationSection/>
      <section id="programme">

        <Programme />
      </section>
      <MediaCoverage />
      <NewsAndUpdates/>
      <Highlight/>
      {/* <Staff/> */}
      {/* <Testimonial/> */}
      {/* <Events/> */}
    </div>
  );
}
