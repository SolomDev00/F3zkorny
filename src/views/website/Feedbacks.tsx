import FeedbackSlider from "../../components/website-slider/SliderFeedback";
import FeedbackImg from '../../assets/feedbacks.svg'

const FeedbackSection = () => {

  const feedbacks = [
    {
      name: 'Hamouda',
      imageUrl: FeedbackImg,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip!',
    },
    {
      name: 'Ahmed',
      imageUrl: FeedbackImg,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip!',
    },
    {
      name: 'Solom',
      imageUrl: FeedbackImg,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip!',
    },
    {
      name: 'Hamouda',
      imageUrl: FeedbackImg,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip!',
    },
    {
      name: 'Ahmed',
      imageUrl: FeedbackImg,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip!',
    },
    {
      name: 'Solom',
      imageUrl: FeedbackImg,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip!',
    },
  ];

  return (
    <section id="feedbacks">
      <div className="mt-20 h-auto pb-5">
        <div className="flex flex-col justify-between items-center gap-20 max-sm:flex-col max-sm:space-x-0">
          <h2 className="bg-liner text-white py-2 px-4 text-2xl max-sm:text-lg font-semibold italic rounded-tl-xl rounded-br-xl">
            Feedbacks
          </h2>
          <FeedbackSlider feedbacks={feedbacks} interval={3000} />
        </div>
      </div>
    </section>
  );
};

export default FeedbackSection;
