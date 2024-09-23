import AppSection from "./website/AppSection";
import ContactSection from "./website/ContactSection";
import FeatureSection from "./website/FeatureSection";
import FeedbackSection from "./website/Feedbacks";
import LandingSection from "./website/LandingSection";
import PriceSection from "./website/PriceSection";

const HomePage = () => {
  return (
    <div className="w-full mb-8 max-sm:overflow-x-hidden relative">
      <LandingSection />
      <FeatureSection />
      <PriceSection />
      <AppSection />
      <FeedbackSection />
      <ContactSection />
    </div>
  );
};

export default HomePage;
