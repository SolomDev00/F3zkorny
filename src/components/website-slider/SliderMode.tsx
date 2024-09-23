import './Slider.Style.css';
import { useState } from 'react';
import Feature1Img from '../../assets/feature-1.svg';
import Feature2Img from '../../assets/feature-2.svg';
import Feature3Img from '../../assets/feature-3.svg';
import { SoArrowLeft, SoArrowRight } from 'solom-icon';

interface SlideData {
    title: string;
    description: string;
    image: string;
}

const slides: SlideData[] = [
    {
        title: 'Why are we your first choice ?',
        description:
            'You can send a distress signal to the firefighter, police or ambulance. All this through the emergency alert system.',
        image: Feature1Img,
    },
    {
        title: 'Why are we your first choice ?',
        description:
            'you can track your children’s steps and ensure their safety and know their location while you are in your home. With one click.',
        image: Feature2Img,
    },
    {
        title: 'Why are we your first choice ?',
        description:
            'Not only will it send a message to emergency and close people, but through it you can record a video, open a video call, and send a voice message.',
        image: Feature3Img,
    },
];

const Slider: React.FC = () => {
    const [activeSlide, setActiveSlide] = useState(0);
    const totalSlides = slides.length;

    const handlePrevious = () => {
        if (activeSlide > 0) {
            setActiveSlide((prev) => prev - 1);
        }
    };

    const handleNext = () => {
        if (activeSlide < totalSlides - 1) {
            setActiveSlide((prev) => prev + 1);
        }
    };

    const progressPercentage = ((activeSlide + 1) / totalSlides) * 100;

    return (
        <div className="w-full h-[50vh] relative overflow-hidden max-sm:h-[120vh]">
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`w-full slide absolute inset-0 flex flex-row justify-between items-center transition-opacity duration-500 max-sm:flex-col max-sm:justify-center ${index === activeSlide ? 'slide-active' : ''}`}
                >
                    <div className='flex flex-col items-start justify-start w-1/2 h-full mt-20'>
                        <h2 className="bg-liner text-white py-2 px-4 text-2xl max-sm:text-lg font-semibold italic rounded-tl-xl rounded-br-xl mb-10">
                            {slide.title}
                        </h2>
                        <div className="flex-grow max-sm:flex-grow-0">
                            <p className="text-lg max-sm:text-base italic">{slide.description}</p>
                        </div>
                        <div className="mb-16">
                            <div className="flex gap-4 mb-3 max-sm:justify-center max-sm:mt-5">
                                <button
                                    className={`p-2 cursor-pointer rounded-full transition-colors ${activeSlide === 0 ? 'bg-gray-300 text-gray-500' : 'bg-liner text-white hover:bg-red-700'}`}
                                    onClick={handlePrevious}
                                    disabled={activeSlide === 0}
                                >
                                    <SoArrowLeft className='w-6 h-6' />
                                </button>
                                <button
                                    className={`p-2 cursor-pointer rounded-full transition-colors ${activeSlide === totalSlides - 1 ? 'bg-gray-300 text-gray-500' : 'bg-liner text-white hover:bg-red-700'}`}
                                    onClick={handleNext}
                                    disabled={activeSlide === totalSlides - 1}
                                >
                                    <SoArrowRight className='w-6 h-6' />
                                </button>
                            </div>
                            <div className="flex items-center gap-2 max-sm:mb-5">
                                <span className="text-xl font-bold">{`0${activeSlide + 1}`}</span>
                                <div className="w-32 h-1 bg-gray-200 relative rounded">
                                    <div className="bg-liner h-full rounded" style={{ width: `${progressPercentage}%` }}></div>
                                </div>
                                <span className="text-xl font-bold">{`0${totalSlides}`}</span>
                            </div>
                        </div>
                    </div>
                    <div className="relative w-[350px] h-[350px] flex justify-center items-center max-sm:w-[200px] max-sm:h-[200px]">
                        <div className="absolute rounded-full bg-liner w-full h-full"></div>
                        <img
                            src={slide.image}
                            alt={slide.title}
                            className="max-w-[500px] max-h-[500px] object-contain relative z-10 max-sm:w-[300px] max-sm:h-[300px]"
                        />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Slider;
