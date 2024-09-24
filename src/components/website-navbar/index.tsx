import { NavLink } from "react-router-dom";
import logoImg from "../../assets/logo.png";
import quranImg from "../../assets/quran.png";
import hadithsImg from "../../assets/hadeeth.png";
import azkarImg from "../../assets/azkar.png";
import mosqueImg from "../../assets/mosque.png";
import heartImg from "../../assets/heart.png";
import personImg from "../../assets/person.png";

const Navbar = () => {
    return <nav>
        <div className="container">
            <NavLink to="/">
                <img className="logo icon cursor-pointer" src={logoImg} alt="logo" />
            </NavLink>
            <div className="links">
                <NavLink to="/quran">
                    <img className="icon-sm" src={quranImg} alt="quran icon" />
                    <div>قرآن كريم</div>
                </NavLink>
                <NavLink to="/azkar">
                    <img className="icon-sm" src={azkarImg} alt="azkar icon" />
                    <div>الآذكار</div>
                </NavLink>
                <NavLink to="/hadiths">
                    <img className="icon-sm" src={hadithsImg} alt="Hadiths icon" />
                    <div>الأحاديث</div>
                </NavLink>
                <NavLink to="/prayer">
                    <img className="icon-sm" src={mosqueImg} alt="mosque icon" />
                    <div>الصلاة</div>
                </NavLink>
            </div>
            <div className="left">
                <div className="fav card-icon-sm">
                    <img src={heartImg} alt="fav-icon" />
                </div>
                <div className="card-icon-sm profile">
                    <img src={personImg} alt="profile-img" />
                </div>
            </div>
        </div>
    </nav>;
};

export default Navbar;