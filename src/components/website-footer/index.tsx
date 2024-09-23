import "./Footer.style.css";
import LogoImg from '../../assets/logo_footer.svg'
import VisaIcon from '../../assets/visa.svg'
import KlarnaIcon from '../../assets/klarna.svg'
import JoudpayIcon from '../../assets/joudpay.svg'
import MastercardIcon from '../../assets/mastercard.svg'
import DownloadIcon from '../../assets/download.svg'
import Waves from '../../assets/wave.svg'
import { SoLocation2 } from "solom-icon";

const Footer = () => {
  return (
    <footer className="bg-[#BC1F34] pb-5 relative overflow-hidden">
      <div className="w-full h-auto absolute flex flex-col items-center z-10">
        <img className="w-full" src={Waves} alt="WAVES" />
      </div>
      <div className="container relative z-50">
        <div className="flex items-center justify-between gap-10 pt-10 max-sm:flex-col max-sm:justify-center max-sm:gap-0">
          <div className="flex-shrink-0 w-1/3 space-y-10 max-sm:w-full max-sm:flex max-sm:flex-col max-sm:items-center">
            <img className="w-48" src={LogoImg} alt="Logo" />
            <img className="w-64 cursor-pointer" src={DownloadIcon} alt="Logo" />
          </div>
          <div className="flex-shrink-0 w-1/3 space-y-10 max-sm:w-full">
            <div className="flex flex-col items-center justify-center gap-5 text-base max-sm:text-sm text-black/70">
              <div className="flex flex-row items-center justify-center gap-3 text-base max-sm:text-sm text-black/70">
                <SoLocation2 className="w-8 h-8 text-white max-sm:w-7 max-sm:h-7" />
                <p className="text-white text-base">Ahmed Kamel Street, off the street</p>
              </div>
              <div className="flex flex-row items-center justify-center gap-3 text-base max-sm:text-sm text-black/70">
                <SoLocation2 className="w-8 h-8 text-white max-sm:w-7 max-sm:h-7" />
                <p className="text-white text-base">Ahmed Kamel Street, off the street</p>
              </div>
            </div>
            <div className="flex flex-row items-center justify-center space-x-3">
              <img className="w-20 max-sm:w-16" src={VisaIcon} alt="Logo" />
              <img className="w-20 max-sm:w-16" src={KlarnaIcon} alt="Logo" />
              <img className="w-20 max-sm:w-16" src={JoudpayIcon} alt="Logo" />
              <img className="w-20 max-sm:w-16" src={MastercardIcon} alt="Logo" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[1px] bg-white mt-6 mb-5 relative z-50" />
      <p className="text-center text-sm text-white relative z-50">
        Copyright © 2024 SOS Alert | All Rights Reserved | <span className="underline cursor-pointer">Terms and Conditions</span> | <span className="underline cursor-pointer">Privacy Policy</span>.
      </p>
    </footer>
  );
};

export default Footer;
