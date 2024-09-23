import React, { useState, useEffect } from "react";
import moment from "moment";
import moonImg from "../../assets/imgs/moon.png";
import sunImg from "../../assets/imgs/sun.png";
import poinImg from "../../assets/imgs/poinsettia.png";
import translations from "./translations.json";

export default function PrayerTimes() {
  const [prayerTimes, setPrayerTimes] = useState([]);
  const [country, setCountry] = useState("Egypt");
  const [date, setDate] = useState(moment());
  const [nextPrayer, setNextPrayer] = useState("");
  const [locale, setLocale] = useState("ar");
  const translate = translations[locale];

  useEffect(() => {
    const url = `http://api.aladhan.com/v1/calendarByAddress/${date.format(
      "YYYY/MM"
    )}?address=Cairo,${country}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setPrayerTimes(data.data[0].timings))
      // .then((data) => console.log(data.data[0]))
      .catch((error) => console.error(error));
  }, [country, date]);

  useEffect(() => {
    setNextPrayer(
      Object.keys(prayerTimes).find((prayer) =>
        moment(prayerTimes[prayer], "HH:mm").isAfter(moment())
      )
    );
  }, [prayerTimes]);

  function getTimeToNextPrayer(prayerTimes) {
    const now = moment();
    const prayerTimesArray = Object.keys(prayerTimes).map(
      (key) => prayerTimes[key]
    );
    const nextPrayerTime = prayerTimesArray.find((time) =>
      moment(time, "HH:mm").isAfter(now)
    );
    const timeToNextPrayer = moment.duration(
      moment(nextPrayerTime, "HH:mm").diff(now)
    );
    const minutes = timeToNextPrayer.asMinutes().toFixed(0);
    const nextPrayerName = Object.keys(prayerTimes).find((prayer) =>
      moment(prayerTimes[prayer], "HH:mm").isAfter(moment())
    );
    const hours = Math.floor(minutes / 60);
    const minutesRemainder = minutes % 60;

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
  }

  const handleCountryChange = (event) => {
    setCountry(event.target.value);
  };

  const handleDateChange = (event) => {
    setDate(moment(event.target.value));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(moment());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setNextPrayer(
        Object.keys(prayerTimes).find((prayer) =>
          moment(prayerTimes[prayer], "HH:mm").isAfter(moment())
        )
      );
    }, 1000);
    return () => clearInterval(interval);
  }, [prayerTimes]);
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
        {translate.current.replace(
          "{currentTime}",
          moment().format("HH:mm:ss")
        )}
        <br />
        {translate.nextPrayer.replace("{nextPrayer}", nextPrayer)}
      </div>
      <input
        hidden
        type="month"
        value={date.format("YYYY-MM")}
        onChange={handleDateChange}
      />
      <div className="prayer-times">
        <div className="box">
          {translate.fajr}:{" "}
          {prayerTimes.Fajr &&
            prayerTimes.Fajr.substring(0, prayerTimes.Fajr.indexOf(" "))}
          <img className="icon" src={moonImg} alt="" />
        </div>
        <div className="box">
          {translate.sunrise}:{" "}
          {prayerTimes.Sunrise &&
            prayerTimes.Sunrise.substring(0, prayerTimes.Sunrise.indexOf(" "))}
          <img className="icon" src={moonImg} alt="" />
        </div>
        <div className="box">
          {translate.dhuhr}:{" "}
          {prayerTimes.Dhuhr &&
            prayerTimes.Dhuhr.substring(0, prayerTimes.Dhuhr.indexOf(" "))}
          <img className="icon" src={sunImg} alt="" />
        </div>
        <div className="box">
          {translate.asr}:{" "}
          {prayerTimes.Asr &&
            prayerTimes.Asr.substring(0, prayerTimes.Asr.indexOf(" "))}
          <img className="icon" src={poinImg} alt="" />
        </div>
        <div className="box">
          {translate.maghrib}:{" "}
          {prayerTimes.Maghrib &&
            prayerTimes.Maghrib.substring(0, prayerTimes.Maghrib.indexOf(" "))}
          <img className="icon" src={poinImg} alt="" />
        </div>
        <div className="box">
          {translate.isha}:{" "}
          {prayerTimes.Isha &&
            prayerTimes.Isha.substring(0, prayerTimes.Isha.indexOf(" "))}
          <img className="icon" src={poinImg} alt="" />
        </div>
      </div>
    </div>
  );
}
