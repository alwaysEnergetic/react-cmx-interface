import React from "react";
import { FcHome } from "react-icons/fc";
import { makeStyles } from "@material-ui/core/styles";
import IconComponent from "./iconComponent";
import "../../App.css";

const Home = () => {
    const classes = useStyles();
    return (
        <div className="containerWrap">
            <div className="containerBox">
                <div className="topLogo">
                    <p className="cmxLogo">CMx</p>
                </div>
                <div className="title">
                    <h1 className={classes.titleTop} id="titleTop">
                        Welcome, Han Solo
                    </h1>    
                    <p className={classes.titleWelcome} id="titleWelcome">Choose your application</p>
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
                          <IconComponent url="https://live.contractexperience.com/login?execution=e1s1" underLetter="Contract" underLetterSpecial="management" reactIcon="FaAddressCard" />
                          <IconComponent url="https://design.workday.com/" underLetter="Workday Site" reactIcon="IoMdRocket" />
                          <IconComponent url="#" underLetter="Purchase" reactIcon="MdOutlineCardGiftcard" />
                          <IconComponent url="#" underLetter="Expenses" reactIcon="GiTakeMyMoney" />
                          <IconComponent url="#" underLetter="Pay" reactIcon="GiPayMoney" />
                          <IconComponent url="#" underLetter="Performance" reactIcon="BsFillBarChartLineFill" />
                          <IconComponent url="#" underLetter="Directory" reactIcon="FaRegAddressBook" />
                          <IconComponent url="#" underLetter="Benefits" reactIcon="GiBoltShield" />
                          <IconComponent url="#" underLetter="Time Off" reactIcon="SiTimescale" />
                          <IconComponent url="#" underLetter="Time" reactIcon="GiPlayerTime" />
                          <IconComponent url="#" underLetter="Teaching" reactIcon="GiTeacher" />
                          <IconComponent url="#" underLetter="Setting" reactIcon="RiSettings4Fill" />
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
        textAlign: "center"
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
