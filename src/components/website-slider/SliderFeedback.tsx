import { useState, useEffect, useRef } from 'react';
import { useSpring, animated } from 'react-spring';
import { useDrag } from 'react-use-gesture';
import { SoQuoteStart, SoQuoteEnd } from 'solom-icon';

interface Feedback {
    name: string;
    imageUrl: string;
    text: string;
}

interface FeedbackSliderProps {
    feedbacks: Feedback[];
    interval: number;
}

const FeedbackSlider: React.FC<FeedbackSliderProps> = ({ feedbacks, interval }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const sliderRef = useRef<HTMLDivElement>(null);
    const cardRef = useRef<HTMLDivElement>(null);

    const infiniteFeedbacks = [...feedbacks, ...feedbacks, ...feedbacks, ...feedbacks];

    const [{ x }, setSpring] = useSpring(() => ({ x: 0 }));

    const bind = useDrag(({ offset: [x] }) => {
        setSpring({ x });
    });

    useEffect(() => {
        const slideTimer = setInterval(() => {
            setCurrentSlide((prev) => prev + 1);
        }, interval);

        return () => clearInterval(slideTimer);
    }, [interval]);

    useEffect(() => {
        const cardWidth = cardRef.current?.clientWidth || 0;
        setSpring({ x: -currentSlide * cardWidth, immediate: false });

        if (currentSlide >= infiniteFeedbacks.length - feedbacks.length) {
            setTimeout(() => {
                setSpring({ x: 0, immediate: true });
                setCurrentSlide(0);
            }, 300);
        }
    }, [currentSlide, setSpring, infiniteFeedbacks.length, feedbacks.length]);
    return (
        <div className="overflow-hidden w-full relative">
            <animated.div
                {...bind()}
                className="flex space-x-5"
                ref={sliderRef}
                style={{ x }}
            >
                {infiniteFeedbacks.map((feedback, index) => (
                    <div
                        key={index}
                        ref={cardRef}
                        className="min-w-[300px] flex-shrink-0 bg-white shadow-lg rounded-lg p-6 cursor-grab"
                    >
                        <SoQuoteStart className='w-6 text-primary mb-5 float-start' />
                        <div className='flex flex-col items-center gap-3'>
                            <img
                                src={feedback.imageUrl}
                                alt={feedback.name}
                                className="w-20 h-20 rounded-full mb-4"
                            />
                            <h2 className="text-lg font-bold text-primary">{feedback.name}</h2>
                            <p className="text-sm text-[#565656] w-[300px] text-center">{feedback.text}</p>
                        </div>
                        <SoQuoteEnd className='w-6 text-primary mt-5 float-end' />
                    </div>
                ))}
            </animated.div>
        </div>
    );
};

export default FeedbackSlider;
