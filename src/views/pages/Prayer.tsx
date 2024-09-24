/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect } from "react";
import moment, { Moment } from "moment";
import moonImg from "../../assets/moon.png";
import sunImg from "../../assets/sun.png";
import poinImg from "../../assets/poinsettia.png";
import translations from "../../data/translations.json";

type TranslationKeys = "ar" | "en";

interface Translation {
  timesForDiv: string;
  egypt: string;
  saudiArabia?: string;
  unitedArabEmirates?: string;
  timeToNextPrayer: string;
  current: string;
  nextPrayer: string;
  fajr: string;
  sunrise: string;
  dhuhr: string;
  asr: string;
  maghrib: string;
  isha: string;
  hour: string;
  minutes: string;
}

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
  const [country, setCountry] = useState<string>("Egypt");
  const [date, setDate] = useState<Moment>(moment());
  const [nextPrayer, setNextPrayer] = useState<string | null>(null);
  const [locale, setLocale] = useState<TranslationKeys>("ar");
  const translate: Translation = translations[locale];

  useEffect(() => {
    const fetchPrayerTimes = async () => {
      const url = `http://api.aladhan.com/v1/calendarByAddress/${date.format(
        "YYYY/MM"
      )}?address=Cairo,${country}`;
      try {
        const response = await fetch(url);
        const data = await response.json();
        setPrayerTimes(data.data[0].timings);
      } catch (error) {
        console.error("Failed to fetch prayer times:", error);
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
      timeString += `${hours} ${translate.hour}`;
    }

    if (minutesRemainder > 0) {
      if (timeString.length > 0) {
        timeString += ", ";
      }
      timeString += `${minutesRemainder} ${translate.minutes}`;
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
      <h2 className="timesForDiv">
        {translate.timesForDiv.replace("{country}", country)}
      </h2>
      <select value={country} onChange={handleCountryChange}>
        <option value="Egypt">{translate.egypt}</option>
        <option value="Saudi Arabia">{translate.saudiArabia}</option>
        <option value="United Arab Emirates">
          {translate.unitedArabEmirates}
        </option>
      </select>
      <div className="time-to-next-prayer">
        {translate.timeToNextPrayer.replace(
          "{nextPrayer}",
          getTimeToNextPrayer(prayerTimes)
        )}
        <br />
        {translate.current.replace("{currentTime}", moment().format("HH:mm:ss"))}
        <br />
        {translate.nextPrayer.replace("{nextPrayer}", nextPrayer || "")}
      </div>
      <input
        type="month"
        value={date.format("YYYY-MM")}
        onChange={handleDateChange}
      />
      <div className="prayer-times">
        {prayerTimes && (
          <>
            <div className="box">
              {translate.fajr}: {prayerTimes.Fajr?.split(" ")[0]}
              <img className="icon" src={moonImg} alt="Moon" />
            </div>
            <div className="box">
              {translate.sunrise}: {prayerTimes.Sunrise?.split(" ")[0]}
              <img className="icon" src={moonImg} alt="Moon" />
            </div>
            <div className="box">
              {translate.dhuhr}: {prayerTimes.Dhuhr?.split(" ")[0]}
              <img className="icon" src={sunImg} alt="Sun" />
            </div>
            <div className="box">
              {translate.asr}: {prayerTimes.Asr?.split(" ")[0]}
              <img className="icon" src={poinImg} alt="Poinsettia" />
            </div>
            <div className="box">
              {translate.maghrib}: {prayerTimes.Maghrib?.split(" ")[0]}
              <img className="icon" src={poinImg} alt="Poinsettia" />
            </div>
            <div className="box">
              {translate.isha}: {prayerTimes.Isha?.split(" ")[0]}
              <img className="icon" src={poinImg} alt="Poinsettia" />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default PrayerTimes;