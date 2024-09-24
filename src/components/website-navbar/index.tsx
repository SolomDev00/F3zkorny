import logoImg from "../../assets/logo.png";
import quranImg from "../../assets/quran.png";
import hadeethImg from "../../assets/hadeeth.png";
import azkarImg from "../../assets/azkar.png";
import mosqueImg from "../../assets/mosque.png";
import heartImg from "../../assets/heart.png";
import personImg from "../../assets/person.png";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

const Navbar = () => {
    return (
        <nav>
            <div className="container">
                <img className="logo icon" src={logoImg} alt="logo" />
                <div className="links">
                    <ScrollLink
                        onClick={() => scroll.scrollToTop()}
                        to="/"
                        title={"Bringovia SMSID"}
                        aria-label="home"
                        className="logo"
                    >
                        <img className="icon-sm" src={quranImg} alt="quran icon" />
                        <div>قرآن كريم</div>
                    </ScrollLink>
                    <ScrollLink
                        className="cursor-pointer"
                        activeClass="active"
                        to="azkar"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >
                        <img className="icon-sm" src={azkarImg} alt="azkar icon" />
                        <div>الآذكار</div>
                    </ScrollLink>
                    <ScrollLink
                        className="cursor-pointer"
                        activeClass="active"
                        to="azkar"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >
                        <img className="icon-sm" src={hadeethImg} alt="hadeeth icon" />
                        <div>الأحاديث</div>
                    </ScrollLink>
                    <ScrollLink
                        className="cursor-pointer"
                        activeClass="active"
                        to="azkar"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >
                        <img className="icon-sm" src={mosqueImg} alt="mosque icon" />
                        <div>الصلاة</div>
                    </ScrollLink>
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
        </nav>
    );
};

export default Navbar;