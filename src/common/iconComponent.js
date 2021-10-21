import React from "react";
import { FaAddressCard} from "react-icons/fa";
import { IoMdRocket } from "react-icons/io";
import { MdOutlineCardGiftcard } from "react-icons/md";
import { GiTakeMyMoney,GiPayMoney, GiBoltShield, GiPlayerTime, GiTeacher} from "react-icons/gi";
import { BsFillBarChartLineFill } from "react-icons/bs";
import { FaRegAddressBook } from "react-icons/fa";
import { SiTimescale } from "react-icons/si";
import { RiSettings4Fill } from "react-icons/ri";

const IconComponent = (props) => {
    const Letter = props.underLetter;
    let LetterWriting;
    if (Letter==="Contract") {
        LetterWriting = 
        <div>
             <div className="underLetter">{props.underLetter}</div>
             <div className="underLetter">{props.underLetterSpecial}</div>
        </div>
    } else {
        LetterWriting =
        <div className="underLetter">{props.underLetter}</div>
    }
    return (
        <div className="eachIcon">
            <a href={props.url} className="link">
                <div>
                    {(() => {
                        switch (props.reactIcon) {
                            case "FaAddressCard":
                                return <FaAddressCard className="iconApp" />;
                            case "IoMdRocket":
                                return <IoMdRocket className="iconApp" />;
                            case "MdOutlineCardGiftcard":
                                return <MdOutlineCardGiftcard className="iconApp" />;
                            case "GiTakeMyMoney":
                                return <GiTakeMyMoney className="iconApp" />;
                            case "GiPayMoney":
                                return <GiPayMoney className="iconApp" />;
                            case "BsFillBarChartLineFill":
                                return <BsFillBarChartLineFill className="iconApp" />;
                            case "FaRegAddressBook":
                                return <FaRegAddressBook className="iconApp" />;
                            case "GiBoltShield":
                                return <GiBoltShield className="iconApp" />;
                            case "SiTimescale":
                                return <SiTimescale className="iconApp" />;
                            case "GiPlayerTime":
                                return <GiPlayerTime className="iconApp" />;
                            case "GiTeacher":
                                return <GiTeacher className="iconApp" />;
                            case "RiSettings4Fill":
                                return <RiSettings4Fill className="iconApp" />;
                            default:
                                return null;
                        }
                    })()}
                </div>
                {LetterWriting}
            </a>
        </div>
    );
};
export default IconComponent;
