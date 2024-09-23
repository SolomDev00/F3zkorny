import Slider from "../../components/website-slider/SliderMode";

const FeatureSection = () => {
  return (
    <section id="feature">
      <div className="mt-10 h-auto pb-5">
        <div className="flex flex-row-reverse justify-between items-center pt-20 gap-20 container max-sm:flex-col max-sm:space-x-0">
          <Slider />
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
