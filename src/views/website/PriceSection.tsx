import Button from "../../components/schema/Button";
import { SoCheckBadge } from "solom-icon";

const PriceSection = () => {
  return (
    <section id="prices">
      <div className="mt-28 h-auto pb-5">
        <div className="flex flex-col items-center gap-5">
          <h2 className="bg-liner text-white py-2 px-4 text-2xl max-sm:text-lg font-semibold italic rounded-tl-xl rounded-br-xl">
            Membership plans built for modern life.
          </h2>
          <p className="text-lg text-center w-[500px] max-sm:text-base italic">Whichever plan you choose, rest easy knowing that your features will cover each family member.</p>
        </div>
        <div className="flex flex-row-reverse justify-between items-center gap-20 mt-16 container max-sm:flex-col max-sm:space-x-0">
          <div className='w-full flex flex-row items-center justify-between space-x-4 mt-10 max-sm:flex-col max-sm:space-y-4 max-sm:space-x-0'>
            <div className='w-2/6 bg-white px-4 py-6 rounded-2xl flex flex-col items-center justify-between space-y-8 relative overflow-hidden shadow-md max-sm:w-full'>
              <div className='flex flex-col items-center justify-between space-y-8'>
                <div className='flex flex-col items-center gap-1'>
                  <h2 className='text-primary text-5xl font-semibold'>$150</h2>
                  <h6 className='text-black text-sm'>Per Month</h6>
                </div>
                <ul>
                  <li className="text-black flex flex-row items-center gap-2">
                    <SoCheckBadge className="w-6 h-6" />
                    <p className="text-sm">Allow to include 7 devices.</p>
                  </li>
                  <li className="text-black flex flex-row items-center gap-2">
                    <SoCheckBadge className="w-6 h-6" />
                    <p className="text-sm">Unlimited Messages.</p>
                  </li>
                  <li className="text-black flex flex-row items-center gap-2">
                    <SoCheckBadge className="w-6 h-6" />
                    <p className="text-sm">Allow to use Voice.</p>
                  </li>
                  <li className="text-black flex flex-row items-center gap-2">
                    <SoCheckBadge className="w-6 h-6" />
                    <p className="text-sm">All to use Video call & broadcasting.</p>
                  </li>
                  <li className="text-black flex flex-row items-center gap-2">
                    <SoCheckBadge className="w-6 h-6" />
                    <p className="text-sm">Allow to show history and store it.</p>
                  </li>
                  <li className="text-black flex flex-row items-center gap-2">
                    <SoCheckBadge className="w-6 h-6" />
                    <p className="text-sm">2 Tira storage.</p>
                  </li>
                </ul>
              </div>
              <Button fullWidth className='bg-primary hover:bg-primary/90 mt-10'>Subscribe</Button>
            </div>
            <div className='w-2/6 bg-primary px-4 py-6 rounded-2xl flex flex-col items-center justify-between space-y-8 relative overflow-hidden shadow-md scale-110 max-sm:w-full'>
              <div className='flex flex-col items-center justify-between space-y-8'>
                <div className='flex flex-col items-center gap-1'>
                  <h2 className='text-white text-5xl font-semibold'>$150</h2>
                  <h6 className='text-white text-sm'>Per Month</h6>
                </div>
                <ul>
                  <li className="text-white flex flex-row items-center gap-2">
                    <SoCheckBadge className="w-6 h-6" />
                    <p className="text-sm">Allow to include 7 devices.</p>
                  </li>
                  <li className="text-white flex flex-row items-center gap-2">
                    <SoCheckBadge className="w-6 h-6" />
                    <p className="text-sm">Unlimited Messages.</p>
                  </li>
                  <li className="text-white flex flex-row items-center gap-2">
                    <SoCheckBadge className="w-6 h-6" />
                    <p className="text-sm">Allow to use Voice.</p>
                  </li>
                  <li className="text-white flex flex-row items-center gap-2">
                    <SoCheckBadge className="w-6 h-6" />
                    <p className="text-sm">All to use Video call & broadcasting.</p>
                  </li>
                  <li className="text-white flex flex-row items-center gap-2">
                    <SoCheckBadge className="w-6 h-6" />
                    <p className="text-sm">Allow to show history and store it.</p>
                  </li>
                  <li className="text-white flex flex-row items-center gap-2">
                    <SoCheckBadge className="w-6 h-6" />
                    <p className="text-sm">2 Tira storage.</p>
                  </li>
                </ul>
              </div>
              <Button fullWidth className='bg-white hover:bg-white/90 dark:text-primary mt-10'>Subscribe</Button>
            </div>
            <div className='w-2/6 bg-white px-4 py-6 rounded-2xl flex flex-col items-center justify-between space-y-8 relative overflow-hidden shadow-md max-sm:w-full'>
              <div className='flex flex-col items-center justify-between space-y-8'>
                <div className='flex flex-col items-center gap-1'>
                  <h2 className='text-primary text-5xl font-semibold'>$150</h2>
                  <h6 className='text-black text-sm'>Per Month</h6>
                </div>
                <ul>
                  <li className="text-black flex flex-row items-center gap-2">
                    <SoCheckBadge className="w-6 h-6" />
                    <p className="text-sm">Allow to include 7 devices.</p>
                  </li>
                  <li className="text-black flex flex-row items-center gap-2">
                    <SoCheckBadge className="w-6 h-6" />
                    <p className="text-sm">Unlimited Messages.</p>
                  </li>
                  <li className="text-black flex flex-row items-center gap-2">
                    <SoCheckBadge className="w-6 h-6" />
                    <p className="text-sm">Allow to use Voice.</p>
                  </li>
                  <li className="text-black flex flex-row items-center gap-2">
                    <SoCheckBadge className="w-6 h-6" />
                    <p className="text-sm">All to use Video call & broadcasting.</p>
                  </li>
                  <li className="text-black flex flex-row items-center gap-2">
                    <SoCheckBadge className="w-6 h-6" />
                    <p className="text-sm">Allow to show history and store it.</p>
                  </li>
                  <li className="text-black flex flex-row items-center gap-2">
                    <SoCheckBadge className="w-6 h-6" />
                    <p className="text-sm">2 Tira storage.</p>
                  </li>
                </ul>
              </div>
              <Button fullWidth className='bg-primary hover:bg-primary/90 mt-10'>Subscribe</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PriceSection;
