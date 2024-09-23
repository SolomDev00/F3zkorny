import LandingImg from '../../assets/landing.svg'

const LandingSection = () => {
  return (
    <section id="landing">
      <div className="mt-20 h-auto pb-5">
        <div className="flex flex-col justify-between items-center pt-20 space-x-10 container max-sm:flex-col max-sm:space-x-0">
          <h2 className="text-black text-4xl text-center font-bold font-italic max-sm:text-3xl">
            Your Safety And The Safety Of <span className='text-primary'>Your <br /> Family Ones</span> Is Important To Us
          </h2>
          <div className='flex-shrink-0 w-full max-sm:mt-10'>
            <img className="cursor-pointer duration-300" src={LandingImg} alt="Landing" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingSection;
