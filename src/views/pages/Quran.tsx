import QuranSearch from "../../components/quran/QuranSearch";
import SurahView from "../../components/quran/SurahView";

const Quran = () => {
  return (
    <div className="quran route-h">
      <QuranSearch />
      <SurahView />
    </div>
  );
};

export default Quran;
