import React, { useEffect, useState } from 'react';
import moment from 'moment';
import moonImg from "../../assets/moon.png";
import sunImg from "../../assets/sun.png";
import poinImg from "../../assets/poinsettia.png";
import LoadingSpinner from '../../components/website-loading';

interface PrayerTimes {
  Fajr: string;
  Sunrise: string;
  Dhuhr: string;
  Asr: string;
  Maghrib: string;
  Isha: string;
}

const Prayer: React.FC = () => {
  const [prayerTimes, setPrayerTimes] = useState<PrayerTimes | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [location, setLocation] = useState<string | null>(null);
  const [currentTime, setCurrentTime] = useState<string | null>(null);
  const [nextPrayer, setNextPrayer] = useState<{ name: string; time: string } | null>(null);

  const fetchLocation = async () => {
    try {
      const response = await fetch("https://ipapi.co/json/");
      const data = await response.json();
      const city = data.city;
      const country = data.country_name;
      setLocation(`${city}, ${country}`);
      return `${city}, ${country}`;
    } catch (err) {
      console.error(err);
      setLocation("موقع غير معروف");
      return "Cairo";
    }
  };

  const fetchPrayerTimes = async (location: string) => {
    try {
      const response = await fetch(`http://api.aladhan.com/v1/timingsByAddress?address=${location}`);
      const data = await response.json();

      if (data.code === 200) {
        setPrayerTimes(data.data.timings);
      } else {
        setError("فشل في جلب أوقات الصلاة");
      }
    } catch (err) {
      setError("فشل في جلب أوقات الصلاة");
      console.error(err);
    }
  };

  useEffect(() => {
    const getLocationAndPrayerTimes = async () => {
      const userLocation = await fetchLocation();
      fetchPrayerTimes(userLocation);
      setCurrentTime(moment().format('HH:mm'));
    };

    getLocationAndPrayerTimes();
  }, []);

  useEffect(() => {
    if (prayerTimes) {
      const timesWithIqama = {
        Fajr: moment(prayerTimes.Fajr, "HH:mm").add(30, 'minutes'),
        Dhuhr: moment(prayerTimes.Dhuhr, "HH:mm").add(15, 'minutes'),
        Asr: moment(prayerTimes.Asr, "HH:mm").add(15, 'minutes'),
        Maghrib: moment(prayerTimes.Maghrib, "HH:mm").add(10, 'minutes'),
        Isha: moment(prayerTimes.Isha, "HH:mm").add(15, 'minutes'),
      };

      let next = null;
      for (const [name, time] of Object.entries(timesWithIqama)) {
        if (moment(currentTime, 'HH:mm').isBefore(time)) {
          next = { name, time: time.format('HH:mm') };
          break;
        }
      }
      setNextPrayer(next);
    }
  }, [prayerTimes, currentTime]);

  if (!prayerTimes) {
    return <div className='w-full flex items-center justify-center my-[20%] text-xl'><LoadingSpinner /></div>;
  }

  if (error) {
    return <div className='w-full flex items-center justify-center my-[20%] text-xl'>{error}</div>;
  }

  return (
    <div className='my-20 flex flex-col items-center justify-center'>
      <h1 className='text-2xl text-accent font-medium'>أوقات الصلاة في {location}</h1>
      <h2 className='text-lg'>الوقت الحالي: {currentTime}</h2>
      {nextPrayer && (
        <h2 className='text-lg'>أقرب صلاة: {nextPrayer.name} في {nextPrayer.time}</h2>
      )}
      <div className="prayer-times text-right">
        <div className="box">
          <div className="flex flex-col gap-2">
            <h3 className='text-xl font-medium'>
              الفجر: {prayerTimes.Fajr}
            </h3>
            <h3 className='text-xl font-medium'>
              الإقامة: {moment(prayerTimes.Fajr, "HH:mm").add(30, 'minutes').format('HH:mm')}
            </h3>
          </div>
          <img className="icon" src={moonImg} alt="Moon" />
        </div>
        <div className="box">
          <h3 className='text-xl font-medium'>
            الشروق: {prayerTimes.Sunrise}
          </h3>
          <img className="icon" src={sunImg} alt="Sun" />
        </div>
        <div className="box">
          <h3 className='text-xl font-medium'>
            الظهر: {prayerTimes.Dhuhr} (الإقامة: {moment(prayerTimes.Dhuhr, "HH:mm").add(15, 'minutes').format('HH:mm')})
          </h3>
          <img className="icon" src={sunImg} alt="Sun" />
        </div>
        <div className="box">
          <h3 className='text-xl font-medium'>
            العصر: {prayerTimes.Asr} (الإقامة: {moment(prayerTimes.Asr, "HH:mm").add(15, 'minutes').format('HH:mm')})
          </h3>
          <img className="icon" src={poinImg} alt="Poinsettia" />
        </div>
        <div className="box">
          <h3 className='text-xl font-medium'>
            المغرب: {prayerTimes.Maghrib} (الإقامة: {moment(prayerTimes.Maghrib, "HH:mm").add(10, 'minutes').format('HH:mm')})
          </h3>
          <img className="icon" src={poinImg} alt="Poinsettia" />
        </div>
        <div className="box">
          <h3 className='text-xl font-medium'>
            العشاء: {prayerTimes.Isha} (الإقامة: {moment(prayerTimes.Isha, "HH:mm").add(15, 'minutes').format('HH:mm')})
          </h3>
          <img className="icon" src={poinImg} alt="Poinsettia" />
        </div>
      </div>
    </div>
  );
};

export default Prayer;
