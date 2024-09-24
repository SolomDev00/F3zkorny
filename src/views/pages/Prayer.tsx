import React, { useState, useEffect } from "react";
import moment, { Moment } from "moment";
import moonImg from "../../assets/moon.png";
import sunImg from "../../assets/sun.png";
import poinImg from "../../assets/poinsettia.png";

interface PrayerTimes {
  Fajr: string;
  Sunrise: string;
  Dhuhr: string;
  Asr: string;
  Maghrib: string;
  Isha: string;
}

const PrayerTimes: React.FC = () => {
  const [prayerTimes, setPrayerTimes] = useState<PrayerTimes | null>(null);
  const [country, setCountry] = useState<string>("مصر");
  const [date, setDate] = useState<Moment>(moment());
  const [nextPrayer, setNextPrayer] = useState<string | null>(null);

  useEffect(() => {
    const fetchPrayerTimes = async () => {
      const city =
        country === "مصر"
          ? "Cairo"
          : country === "السعودية"
            ? "Riyadh"
            : "Dubai";
      const url = `https://api.pray.zone/v2/times/day.json?city=${city}&date=${date.format("YYYY-MM-DD")}`;
      try {
        const response = await fetch(url);
        const data = await response.json();
        const timings = data.results.datetime[0].times;
        setPrayerTimes({
          Fajr: timings.Fajr,
          Sunrise: timings.Sunrise,
          Dhuhr: timings.Dhuhr,
          Asr: timings.Asr,
          Maghrib: timings.Maghrib,
          Isha: timings.Isha,
        });
      } catch (error) {
        console.error("فشل في جلب أوقات الصلاة:", error);
      }
    };
    fetchPrayerTimes();
  }, [country, date]);

  useEffect(() => {
    if (prayerTimes) {
      setNextPrayer(
        Object.keys(prayerTimes).find((prayer) =>
          moment(prayerTimes[prayer as keyof PrayerTimes], "HH:mm").isAfter(
            moment()
          )
        ) || null
      );
    }
  }, [prayerTimes]);

  const getTimeToNextPrayer = (prayerTimes: PrayerTimes | null): string => {
    if (!prayerTimes) return "";

    const now = moment();
    const prayerTimesArray = Object.values(prayerTimes);
    const nextPrayerTime = prayerTimesArray.find((time) =>
      moment(time, "HH:mm").isAfter(now)
    );
    if (!nextPrayerTime) return "";

    const timeToNextPrayer = moment.duration(
      moment(nextPrayerTime, "HH:mm").diff(now)
    );
    const minutes = timeToNextPrayer.asMinutes().toFixed(0);
    const hours = Math.floor(Number(minutes) / 60);
    const minutesRemainder = Number(minutes) % 60;

    let timeString = "";

    if (hours > 0) {
      timeString += `${hours} ساعة `;
    }

    if (minutesRemainder > 0) {
      if (timeString.length > 0) {
        timeString += ", ";
      }
      timeString += `${minutesRemainder} دقيقة`;
    }

    return timeString;
  };

  const handleCountryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCountry(event.target.value);
  };

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDate(moment(event.target.value));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(moment());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container-fixed">
      <h2 className="timesForDiv">أوقات الصلاة في {country}</h2>
      <select value={country} onChange={handleCountryChange}>
        <option value="مصر">مصر</option>
        <option value="السعودية">السعودية</option>
        <option value="الإمارات">الإمارات</option>
      </select>
      <div className="time-to-next-prayer">
        الوقت المتبقي للصلاة القادمة: {getTimeToNextPrayer(prayerTimes)}
        <br />
        الوقت الحالي: {moment().format("HH:mm:ss")}
        <br />
        الصلاة التالية: {nextPrayer || ""}
      </div>
      <input
        type="date"
        value={date.format("YYYY-MM-DD")}
        onChange={handleDateChange}
      />
      <div className="prayer-times">
        {prayerTimes && (
          <>
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
          </>
        )}
      </div>
    </div>
  );
};

export default PrayerTimes;
