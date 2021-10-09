import React from 'react';
import Provider from "react-redux/es/components/Provider";
import TextInput from '@workday/canvas-kit-react-text-input';
import FormField from '@workday/canvas-kit-react-form-field';
import { HiOutlineCog } from "react-icons/hi";
import { FcHome } from "react-icons/fc";
import { FaAddressCard } from "react-icons/fa";
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
import '../../src/App.css';

const Home = () => {
  return (
    <div className="container">
      <div className="containerBox">
        <div className="wrapTop" >
          <FormField className="form-group position-relative" inputId="my-input-field">
            <TextInput className="form-control input-lg rounded-lg inputTop" placeholder="Welcome Han Solo" />
            <HiOutlineCog className="fa fa-cog fa-lg position-absolute" />
          </FormField>
        </div>
        <div className="content">
            <div className="inbox">

            </div>
            <div className="application">
              <div className="appTop"> 
                <div>
                  <FcHome className="home" />
                </div>
                <div className="flex items-center">
                  <div className="ml-3">
                    <span className="text-base"> Application </span>
                    <br/>
                    <span className="text-sm"> 11 itmes </span>
                  </div>
                </div>
              </div>
              <div className="icons">
                <div className="personal">
                  <FaAddressCard className="personalIcon iconApp" />
                </div>
                <div className="workday">
                  <IoMdRocket className="workdayIcon iconApp" />
                </div>
                <div className="purchases">
                  <MdOutlineCardGiftcard className="purchaseIcon iconApp" />
                </div>
                <div className="expenses">
                  <GiTakeMyMoney className="expenseIcon iconApp" />
                </div>
                <div className="pay">
                  <GiPayMoney className="payIcon iconApp" />
                </div>
                <div className="performance">
                  <BsFillBarChartLineFill className="performanceIcon iconApp" />
                </div>
                <div className="directory">
                  <FaRegAddressBook className="directoryIcon iconApp" />
                </div>
                <div className="benefits">
                  <GiBoltShield className="benefitIcon iconApp" />
                </div>
                <div className="timeOff">
                  <SiTimescale className="timeoffIcon iconApp" />
                </div>
                <div className="time">
                  <GiPlayerTime className="timeIcon iconApp" />
                </div>
                <div className="teaching">
                  <GiTeacher className="teachingIcon iconApp" />
                </div>
                <div className="space iconApp">

                </div>
              </div>
            </div>
          </div>  
      </div>
      
    </div>
  )

};
export default Home;
