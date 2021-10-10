import React from "react";
import Provider from "react-redux/es/components/Provider";
import TextInput from "@workday/canvas-kit-react-text-input";
import FormField from "@workday/canvas-kit-react-form-field";
import { HiOutlineCog } from "react-icons/hi";
import { FcHome } from "react-icons/fc";
import { FaAddressCard, FaCentercode } from "react-icons/fa";
import { IoMdRocket } from "react-icons/io";
import { MdOutlineCardGiftcard } from "react-icons/md";
import { GiTakeMyMoney } from "react-icons/gi";
import { GiPayMoney } from "react-icons/gi";
import { BsFillBarChartLineFill } from "react-icons/bs";
import { FaRegAddressBook } from "react-icons/fa";
import { GiBoltShield } from "react-icons/gi";
import { SiTimescale } from "react-icons/si";
import { GiPlayerTime } from "react-icons/gi";
import { GiTeacher } from "react-icons/gi";
import { RiSettings4Fill } from "react-icons/ri";



import { makeStyles } from "@material-ui/core/styles";
import "../../src/App.css";
import { flex } from "@workday/canvas-kit-react/dist/commonjs/pagination/lib/Pagination/common/utils/flex";

const Home = () => {
    const classes = useStyles();
    return (
        <div className="containerWrap">
            <div className="containerBox">
                <div className="topLogo">
                    <p className="cmxLogo">CMx</p>
                </div>
                <div className="title">
                    <h1 className={classes.titleTop}>
                        Choose your application
                    </h1>
                    <p className={classes.titleWelcome}>Welcome, Han Solo</p>
                </div>
                <div className="application">
                    <div className="wrapApp">
                        <div className="appTop">
                            <div className="flex">
                                <div>
                                    <FcHome className="home" />
                                </div>
                                <div className="flex items-center">
                                    <div className="ml-3">
                                        <span className="text-lg">
                                            12 items
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="icons">
                            <div className="eachIcon">
                                <a
                                    href="https://live.contractexperience.com/login?execution=e1s1"
                                    className="link linkSpecial"
                                >
                                    <div className="personal">
                                        <FaAddressCard className="personalIcon iconApp" />
                                    </div>
                                    <div className="underLetter">
                                        Contract
                                        <br />
                                        management
                                    </div>
                                </a>
                            </div>

                            <div className="eachIcon">
                                <a
                                    href="https://design.workday.com/"
                                    className="link"
                                >
                                    <div className="workday">
                                        <IoMdRocket className="workdayIcon iconApp" />
                                    </div>
                                    <div className="underLetter">
                                        Workday Site
                                    </div>
                                </a>
                            </div>

                            <div className="eachIcon">
                                <a href="#" className="link">
                                  <div className="purchases">
                                        <MdOutlineCardGiftcard className="purchaseIcon iconApp" />
                                    </div>
                                    <div className="underLetter">Purchase</div>
                                </a>
                            </div>

                            <div className="eachIcon">
                                <a href="#" className="link">
                                    <div className="expenses">
                                        <GiTakeMyMoney className="expenseIcon iconApp" />
                                    </div>
                                    <div className="underLetter">Expenses</div>
                                </a>
                            </div>

                            <div className="eachIcon">
                                <a href="#" className="link">
                                    <div className="pay">
                                        <GiPayMoney className="payIcon iconApp" />
                                    </div>
                                    <div className="underLetter">Pay</div>
                                </a>
                            </div>

                            <div className="eachIcon">
                                <a href="#" className="link">
                                    <div className="performance">
                                        <BsFillBarChartLineFill className="performanceIcon iconApp" />
                                    </div>
                                    <div className="underLetter">Performance</div>
                                </a>
                            </div>

                            <div className="eachIcon">
                                <a href="#" className="link">
                                    <div className="directory">
                                        <FaRegAddressBook className="directoryIcon iconApp" />
                                    </div>
                                    <div className="underLetter">
                                        Directory
                                    </div>
                                </a>
                            </div>

                            <div className="eachIcon">
                                <a href="#" className="link">
                                    <div className="benefits">
                                        <GiBoltShield className="benefitIcon iconApp" />
                                    </div>
                                    <div className="underLetter">Benefits</div>
                                </a>
                            </div>

                            <div className="eachIcon">
                                <a href="#" className="link">
                                    <div className="timeOff">
                                        <SiTimescale className="timeoffIcon iconApp" />
                                    </div>
                                    <div className="underLetter">Time Off</div>
                                </a>
                            </div>

                            <div className="eachIcon">
                                <a href="#" className="link">
                                    <div className="time">
                                        <GiPlayerTime className="timeIcon iconApp" />
                                    </div>
                                    <div className="underLetter">Time</div>
                                </a>
                            </div>

                            <div className="eachIcon">
                                <a href="#" className="link">
                                    <div className="teaching">
                                        <GiTeacher className="teachingIcon iconApp" />
                                    </div>
                                    <div className="underLetter">Teaching</div>
                                </a>
                            </div>

                            <div className="eachIcon">
                                <a href="#" className="link">
                                    <div className="setting">
                                        <RiSettings4Fill className="teachingIcon iconApp" />
                                    </div>
                                    <div className="underLetter">Setting</div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Home;

const useStyles = makeStyles((theme) => ({
    titleTop: {
        fontSize: theme.palette.fontSizes.enormous,
        fontFamily: theme.palette.fonts,
        fontWeight: theme.palette.fontWeight.large,
        display: "flex",
        justifyContent: "center",
    },
    titleWelcome: {
        fontSize: theme.palette.fontSizes.medium,
        fontFamily: theme.palette.fonts,
        fontWeight: theme.palette.fontWeight.small,
        display: "flex",
        justifyContent: "center",
        marginTop: "20px",
    },
}));
