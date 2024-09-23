import Waves from '../../assets/wave.svg';
import App from '../../assets/app.svg';
import QrCode from '../../assets/qr-code.svg';
import Download from '../../assets/download.svg';

const AppSection = () => {
  return (
    <section id="appDownload" className="bg-[#BC1F34] relative mt-48">
      <div className="w-full absolute inset-0 flex flex-col items-center z-10">
        <img className="w-full h-full object-cover" src={Waves} alt="WAVES" />
      </div>
      <div className="container relative z-50 h-auto pt-5">
        <div className="w-full flex flex-row items-center justify-between gap-16">
          <div className="w-3/5 space-y-5">
            <h2 className="text-white text-3xl max-sm:text-lg font-semibold italic">
              Get Access To SOS Alert Memberships In The Mobile App.
            </h2>
            <div className='ml-3 space-y-5'>
              <img
                className="w-[130px]"
                src={QrCode}
                alt="Qr Code"
              />
              <img
                className="w-64 cursor-pointer"
                src={Download}
                alt="Download Googleplay & AppleStore"
              />
            </div>
          </div>
          <div className="w-1/2 flex justify-end">
            <img
              className="w-[350px] relative -mt-44"
              src={App}
              alt="Download app"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppSection;
