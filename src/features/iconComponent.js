import React from "react";
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

const IconComponent = (props) => {
    return (
        <div className="eachIcon">
            <a href={props.url} className="link">
                <div className="iconApp">
                    {props.reactIcon}
                </div>
                <div className="underLetter">
                    {props.underLetter}
                </div>
            </a>
        </div>
    );
}
export default IconComponent;

<IconComponent url="#" underLetter="workday" reactIcon="MdOutlineCardGiftcard" />