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
  const [nextPrayer, setNextPrayer] = useState<{ name: string; time: string; remaining: string } | null>(null);

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
      return "Cairo"; // استخدم الرياض كافتراضي في حالة الفشل
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

  const calculateNextPrayer = (times: PrayerTimes) => {
    const now = moment();
    const prayerNames: (keyof PrayerTimes)[] = ["Fajr", "Sunrise", "Dhuhr", "Asr", "Maghrib", "Isha"];
    let next = null;

    for (const name of prayerNames) {
      const prayerTime = moment(times[name], "HH:mm");
      if (prayerTime.isAfter(now)) {
        next = { name: name, time: prayerTime.format("HH:mm"), remaining: prayerTime.from(now) };
        break;
      }
    }

    return next;
  };

  useEffect(() => {
    const getLocationAndPrayerTimes = async () => {
      const userLocation = await fetchLocation();
      fetchPrayerTimes(userLocation);
    };

    getLocationAndPrayerTimes();
  }, []);

  useEffect(() => {
    if (prayerTimes) {
      const next = calculateNextPrayer(prayerTimes);
      setNextPrayer(next);
      setCurrentTime(moment().format("HH:mm"));
    }
  }, [prayerTimes]);

  if (!prayerTimes) {
    return <div className='w-full flex items-center justify-center my-[20%] text-xl'><LoadingSpinner /></div>;
  }

  if (error) {
    return <div className='w-full flex items-center justify-center my-[20%] text-xl'>{error}</div>;
  }

  return (
    <div className='my-20 flex flex-col items-center justify-center'>
      <h1 className='text-2xl text-accent font-medium'>أوقات الصلاة في {location}</h1>
      <div className='my-4'>
        <p>الوقت الحالي: {currentTime}</p>
        {nextPrayer ? (
          <p>أقرب صلاة: {nextPrayer.name} في {nextPrayer.time} بعد {nextPrayer.remaining}</p>
        ) : (
          <p>لا توجد صلوات قادمة اليوم.</p>
        )}
      </div>
      <div className="prayer-times">
        <div className="box">
          الفجر: {prayerTimes.Fajr}
          <img className="icon" src={moonImg} alt="Moon" />
        </div>
        <div className="box">
          الشروق: {prayerTimes.Sunrise}
          <img className="icon" src={sunImg} alt="Sun" />
        </div>
        <div className="box">
          الظهر: {prayerTimes.Dhuhr}
          <img className="icon" src={sunImg} alt="Sun" />
        </div>
        <div className="box">
          العصر: {prayerTimes.Asr}
          <img className="icon" src={poinImg} alt="Poinsettia" />
        </div>
        <div className="box">
          المغرب: {prayerTimes.Maghrib}
          <img className="icon" src={poinImg} alt="Poinsettia" />
        </div>
        <div className="box">
          العشاء: {prayerTimes.Isha}
          <img className="icon" src={poinImg} alt="Poinsettia" />
        </div>
      </div>
    </div>
  );
};

export default Prayer;
