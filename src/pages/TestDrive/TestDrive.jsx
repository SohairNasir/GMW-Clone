import React, { useEffect, useState } from "react";
import "./TestDrive.css";
import DownSvg from "../../assets/chevronDown.svg?react";
import { BsTelephone } from "react-icons/bs";
import { MdOutlineMailOutline } from "react-icons/md";
import dayjs from "dayjs";
import { CiCalendar } from "react-icons/ci";
import { LuClock } from "react-icons/lu";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import { textFieldClasses } from "@mui/material/TextField";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Header } from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import axios from "axios";
import usethemeStyle from "../../Hooks/themeStyle";
import TestPToggle from "../../Hooks/testDrvToggle";

const TestDrive = () => {
  const [CarModel, setCarModel] = useState([]);
  const [SelectCar, setSelectCar] = useState(null);
  const [showVehicle, setShowVehicle] = useState(false);
  const { bodyBg, bodyTxt, btnBg, btnTxt } = usethemeStyle();
  const { borderColor, svgColorAndTxt , placeholderTxt } = TestPToggle();
  let current = new Date();

  // console.log(current.toLocaleDateString())

  useEffect(() => {
    let fetchData = async () => {
      try {
        setCarModel(
          (
            await axios.get(
              "https://6aa0f74f2703577aa1e32ae0.mockapi.io/CarModelSml",
            )
          ).data,
        );
      } catch (error) {
        console.error(new Error(error));
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <Header />

      <main
        className={`bg-${bodyBg} flex h-[140vh] items-center justify-center`}
      >
        {console.log(bodyBg)}
        <div className="w-full max-w-[800px]">
          <div className={`flex text-${bodyTxt} items-center flex-col gap-4`}>
            <h1 className="test-driv-heading">Book a Test Drive</h1>
            <h6 className="heading-norml-txt">
              Experience the thrill of driving a Haval vehicle
            </h6>
            <p className={`bg-${bodyTxt} border-line`}></p>
          </div>

          <div className=" flex gap-5 w-full justify-between">
            <span className={`!text-${bodyTxt} inpt-title`}>
              Select a Vehicle
            </span>

            <div className="relative flex flex-col  w-full max-w-[500px] gap-2">
              <div
                onClick={() => setShowVehicle(!showVehicle)}
                className={`vehicle-select-con border-1 border-${bodyTxt} !p-[12px] flex justify-between`}
              >
                {console.log(bodyTxt)}
                <div className="flex gap-[15px] items-center">
                  <div className="image-con">
                    {SelectCar?.image ? (
                      <img
                        className="h-full w-full object-cover"
                        src={SelectCar?.image}
                        alt=""
                      />
                    ) : (
                      "Select Vehicle"
                    )}
                  </div>
                  <h6 className={`text-${bodyTxt}`}>
                    {SelectCar?.name || "Select Vehicle"}
                  </h6>
                </div>

                {/* down chevron */}
                <DownSvg className="w-[20px]" color={bodyTxt} />
              </div>

              {showVehicle && (
                <div
                  className={`absolute h-[35vh] overflow-y-auto !top-[14vh] flex flex-col !w-full border-[1px] border-${bodyTxt}  bg-${bodyBg}`}
                >
                  {CarModel.map(({ name, image, id }) => {
                    return (
                      <div
                        key={id}
                        onClick={() => (
                          setSelectCar({ name, image }),
                          setShowVehicle(false)
                        )}
                        id={id}
                        className="flex items-center h-[48px] !pt-[8px] !pl-[12px] !pr-[12px] !pb-[8px] "
                      >
                        <span className="vehicle-optin-img">
                          <img className=" object-cover" src={image} alt="" />
                        </span>
                        <h1 className={`text-${bodyTxt} vehicle-optin-txt`}>
                          {name}
                        </h1>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>

          <div className="flex justify-center !mb-[8px] !mt-[25px]">
            <p className={`bg-${bodyTxt} border-line`}></p>
          </div>
                                    {/* // Your Details section */}
          <div className="flex gap-5px w-full justify-between">
            <span className={`!text-${bodyTxt} inpt-title`}>Your Details</span>

            <div className="flex flex-wrap gap-[8px]  w-full max-w-[500px]">
              
              <div
                className={`info-inpt-con ${borderColor}`}
              >
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`${svgColorAndTxt} text-gray-400 w-[19px] `}
                  >
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                    <circle cx={12} cy={7} r={4} />
                  </svg>
                </span>

                <input
                  className={`inpt inpt-plac-txt ${svgColorAndTxt} ${placeholderTxt || 'placeholder:!text-gray-400' }  `}
                  type="text"
                  placeholder="First Name*"
                />
              </div>

              <div className={`info-inpt-con ${borderColor}`}>
                
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`w-[19px] ${svgColorAndTxt} text-gray-400`}
                  >
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                    <circle cx={12} cy={7} r={4} />
                  </svg>
                </span>

                <input
                  className={`inpt inpt-plac-txt ${svgColorAndTxt} ${placeholderTxt || 'placeholder:!text-gray-400'}`}
                  type="text"
                  placeholder="Last Name*"
                />
              </div>

              <div className={`info-inpt-con ${borderColor}`}>
                <span>
                  <BsTelephone className={`${svgColorAndTxt || 'text-gray-400'}`} />
                </span>
                <input
                  className={`inpt-plac-txt ${svgColorAndTxt} ${placeholderTxt || 'placeholder:!text-gray-400'}`} 
                  type="text"
                  placeholder="Phone Number*"
                />
              </div>

              <div className={`info-inpt-con ${borderColor}`}>
                
                <span>
                  <MdOutlineMailOutline className={`${borderColor} text-gray-400`} />
                </span>

                <input
                  className={`inpt inpt-plac-txt ${svgColorAndTxt} ${placeholderTxt || 'placeholder:!text-gray-400'}  `}
                  type="text"
                  placeholder="Email Address*"
                />
              </div>

            </div>

          </div>
                                    {/* // Line div */}
          <div className="flex justify-center !mb-[8px] !mt-[25px]">
            <p className={`border-line bg-${bodyTxt}`} ></p>
          </div>
                                       {/* // Your Preferences section                */}
          <div className="flex gap-5px w-full justify-between">
            <span className={`!text-${bodyTxt} inpt-title`}>
              Your Preferences
            </span>

            <div className="flex flex-col justify-between gap-[8px]  w-full max-w-[500px]">
              <div className={`preference-con border-${bodyTxt} ${svgColorAndTxt}`}>
                <span className="text-[15px]">Select Preferred Dealership</span>
                <span>
                  <DownSvg className="h-5" />
                </span>
              </div>

              <div className={`preference-con border-${bodyTxt}`}>
                <CiCalendar className={`preference-svg`} />
                <span className={`w-full max-w-[95%]`}>
                  {/* <DemoItem  label="Responsive variant"> */}
                  <DatePicker
                    slotProps={{
                      field: { size: "small" },
                      textField: {
                        sx: {
                          "& fieldset": { border: "none !important" },
                          "& .MuiPickersOutlinedInput-root": {
                            width: "470px",
                            color: "black !important",
                            textTransform: "lowercase !important",
                          },
                          "& .MuiSvgIcon-root": { color: "black" },
                          "& .MuiPickersSectionList-root": { opacity: "1" },
                        },
                      },
                    }}
                    disablePast
                  />
                </span>
              </div>

              <div className="preference-con">
                <LuClock className="preference-svg" />

                <span className=" w-full max-w-[95%]">
                  <TimePicker
                    slotProps={{
                      field: { size: "small" },
                      textField: {
                        sx: {
                          "& .MuiPickersOutlinedInput-root": {
                            width: "470px !important",
                            color: "black",
                            outline: "none",
                          },
                          "& .MuiSvgIcon-root": { color: "black" },
                          "& .MuiPickersSectionList-root": { opacity: "1" },
                          "& fieldset": { border: " none ! important" },
                        },
                      },
                    }}

                    //  label="--:-- --"
                  />
                </span>
              </div>

              <div className="flex flex-col !mt-[10px] gap-3">
                <span className="Own-txt">Do you own a vehicle?</span>

                <form className="flex gap-3">
                  <input id="yes" type="radio" name="own-check" />
                  <label className="radio-btn-txt" htmlFor="yes">
                    Yes
                  </label>
                  <input id="no" name="own-check" type="radio" />
                  <label className="radio-btn-txt" htmlFor="no">
                    No
                  </label>
                </form>

                <div>
                  <form className="flex flex-col gap-3">
                    <label className="radio-btn-txt ">
                      <input className="!mr-[13px]" type="checkbox" value="" />I
                      hold a valid driving license and agree to the terms and
                      conditions.
                    </label>

                    <label className="radio-btn-txt ">
                      <input className="!mr-[13px]" type="checkbox" value="" />I
                      take responsibility of any damage to vehicle during test
                      drive.
                    </label>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="heading-norml-txt w-full max-w-full flex justify-center !mt-[10vh]">
            <button type="button" className="test-Driv-btn">
              Book Test Drive
              <MdOutlineKeyboardArrowRight className="text-[25px]" />
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default TestDrive;
