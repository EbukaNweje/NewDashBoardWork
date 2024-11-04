// import MenuDropDown from "./MenuDropDown";

import {Drawer} from "antd";
import {useState} from "react";
import {CiSettings} from "react-icons/ci";
import {FaCaretDown, FaRegUser, FaUserCircle} from "react-icons/fa";
import {GiHamburgerMenu} from "react-icons/gi";
import {IoIosNotificationsOutline} from "react-icons/io";
import {IoLogOutOutline} from "react-icons/io5";
import {NavLink} from "react-router-dom";

const Header = () => {
    const [drop1, setDrop1] = useState(false);
    const [drop2, setDrop2] = useState(false);
    const [drop3, setDrop3] = useState(false);
    const [drop4, setDrop4] = useState(false);
    const [openSideBar, setOpenSideBar] = useState(false);

    return (
        <>
            <div className="w-full h-16 bg-[#0f3951] px-48 phone:px-6 fixed top-0 left-0 z-10">
                <div className="w-full h-full flex justify-between items-center">
                    <div className="w-max h-full flex items-center gap-10">
                        <div className="w-max h-full flex items-center phone:gap-4">
                            {/* <img src="" alt="" /> */}
                            <GiHamburgerMenu
                                className="hidden phone:flex text-white"
                                size={26}
                                onClick={() => setOpenSideBar(!openSideBar)}
                            />
                            <p className="text-3xl font-semibold">Logo</p>
                        </div>
                        <div className="w-max h-full flex gap-2 text-white phone:hidden">
                            <NavLink to={"/dashboard"}>
                                <div className="w-max h-full border-t-[3px] px-4  border-t-[#a287f4] flex items-center font-semibold uppercase">
                                    Overview
                                </div>
                            </NavLink>
                            <div className="w-max h-full border-t-[3px] px-4 border-t-[#a287f4] flex items-center font-semibold">
                                <div
                                    className="relative w-max h-full"
                                    onMouseEnter={() => setDrop1(!drop1)}
                                    onMouseLeave={() => setDrop1(!drop1)}
                                >
                                    <div className="w-max h-full flex items-center gap-2">
                                        TRANSACTION{" "}
                                        <FaCaretDown
                                            className={`transition-all duration-300 ${
                                                drop1 ? "-rotate-180" : ""
                                            }`}
                                        />
                                    </div>
                                    <div
                                        className={`w-28 h-max flex flex-col absolute -bottom-[2.7rem] shadow border border-gray-100 left-0 bg-white text-sm dropdown ${
                                            drop1 ? "active" : ""
                                        }`}
                                    >
                                        <NavLink to={"/dashboard/my-plans"}>
                                            <div className="w-full pl-2 text-gray-600 h-10 border-b-gray-300 flex items-center cursor-pointer">
                                                Deposit
                                            </div>
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                            <div className="w-max h-full border-t-[3px] px-4 border-t-[#a287f4] flex items-center font-semibold">
                                <div
                                    className="relative w-max h-full"
                                    onMouseEnter={() => setDrop2(!drop2)}
                                    onMouseLeave={() => setDrop2(!drop2)}
                                >
                                    <div className="w-max h-full flex items-center gap-2">
                                        TRANSFER
                                        <FaCaretDown
                                            className={`transition-all duration-300 ${
                                                drop2 ? "-rotate-180" : ""
                                            }`}
                                        />
                                    </div>
                                    <div
                                        className={`w-28 h-max flex flex-col absolute -bottom-[5.2rem] shadow border border-gray-100 left-0 bg-white text-sm dropdown ${
                                            drop2 ? "active" : ""
                                        }`}
                                    >
                                        <NavLink
                                            to={"/dashboard/new-withdrawal"}
                                        >
                                            <div className="w-full pl-2 text-gray-600 h-10 border-b border-b-gray-300 flex items-center cursor-pointer">
                                                Profit
                                            </div>
                                        </NavLink>
                                        <NavLink to={"/dashboard/new-bonus"}>
                                            <div className="w-full pl-2 text-gray-600 h-10  flex items-center cursor-pointer">
                                                Bonus
                                            </div>
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                            <div className="w-max h-full border-t-[3px] px-4 border-t-[#a287f4] flex items-center font-semibold">
                                <div
                                    className="relative w-max h-full"
                                    onMouseEnter={() => setDrop3(!drop3)}
                                    onMouseLeave={() => setDrop3(!drop3)}
                                >
                                    <div className="w-max h-full flex items-center gap-2">
                                        HISTORY
                                        <FaCaretDown
                                            className={`transition-all duration-300 ${
                                                drop3 ? "-rotate-180" : ""
                                            }`}
                                        />
                                    </div>
                                    <div
                                        className={`w-28 h-max flex flex-col absolute -bottom-[7.7rem] shadow border border-gray-100 left-0 bg-white text-sm dropdown ${
                                            drop3 ? "active" : ""
                                        }`}
                                    >
                                        <NavLink to={"/dashboard/my-invest"}>
                                            <div className="w-full pl-2 text-gray-600 h-10 border-b border-b-gray-300 flex items-center cursor-pointer">
                                                Investment
                                            </div>
                                        </NavLink>
                                        <NavLink to={"/dashboard/my-deposit"}>
                                            <div className="w-full pl-2 text-gray-600 h-10  flex items-center cursor-pointer">
                                                Deposit
                                            </div>
                                        </NavLink>
                                        <NavLink
                                            to={"/dashboard/my-withdrawal"}
                                        >
                                            <div className="w-full pl-2 text-gray-600 h-10  flex items-center cursor-pointer">
                                                Withdrawal
                                            </div>
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="w-max h-full flex  phone:flex-row-reverse items-center gap-4 relative"
                        onMouseLeave={() => setDrop4(false)}
                    >
                        <div
                            className="w-max h-max flex gap-2 items-center cursor-pointer text-white "
                            onClick={() => setDrop4(!drop4)}
                        >
                            <div className="w-max h-max">
                                <FaUserCircle size={28} />
                            </div>
                            <div className="w-max h-max flex flex-col phone:hidden">
                                <p className="text-xs font-semibold text-red-500">
                                    Unverified
                                </p>
                                <p className="w-max flex items-center text-xs font-semibold">
                                    Freya Conner Hamilton Clark{" "}
                                    <span>
                                        <FaCaretDown />
                                    </span>
                                </p>
                            </div>
                        </div>
                        <div className="w-max h-max">
                            <IoIosNotificationsOutline
                                size={28}
                                className="cursor-pointer text-white"
                            />
                        </div>
                        <div className="w-max h-max phone:hidden">
                            <IoLogOutOutline
                                size={28}
                                className="cursor-pointer text-white"
                            />
                        </div>
                        <div
                            className={`w-full phone:w-[18rem]  h-[32rem] rounded bg-white shadow absolute -bottom-[32rem] left-0 phone:-left-[14rem] dropdown ${
                                drop4 ? "active" : ""
                            }`}
                        >
                            <div className="w-full h-max flex gap-2 items-center justify-center pl-4 py-5 border-t-[3px] rounded-t border-t-[#a287f4]">
                                <div className="w-max h-max flex items-center">
                                    <span className="w-10 h-10 rounded-full bg-[#12dba4] flex items-center justify-center text-white">
                                        RJ
                                    </span>
                                </div>
                                <div className="w-max h-max flex flex-col">
                                    <p className="truncate text-sm font-semibold text-[#364a63]">
                                        FreyaConner Hamilton
                                    </p>
                                    <p className="truncate text-xs text-[#8094ae]">
                                        businesscocoltd@gmail.com
                                    </p>
                                </div>
                                <div className="w-max">
                                    <CiSettings
                                        size={20}
                                        className="text-[#364a63]"
                                    />
                                </div>
                            </div>
                            <div className="w-full h-max flex flex-col gap-2 justify-center pl-8 py-5 border-t border-t-gray-300">
                                <p className="text-sm font-semibold text-[#8094ae]">
                                    ACCOUNT BALANCE
                                </p>
                                <p className="text-[#a287f4] text-xl">
                                    10.00 $
                                </p>
                                <p className="text-sm text-[#8094ae]">
                                    Active Plans <span>0 plans</span>
                                </p>
                                <p className="text-sm text-[#a287f4] flex items-center gap-2">
                                    Withdraw Balance
                                    <span>
                                        <IoLogOutOutline />
                                    </span>
                                </p>
                            </div>
                            <div className="w-full h-max flex flex-col gap-4 justify-center pl-8 py-5 border-t border-t-gray-300 text-[#526484]">
                                <NavLink to={"/dashboard/profile"}>
                                    <div className="w-full h-8 flex items-center hover:text-[#a287f4] cursor-pointer transition-all duration-500 gap-2 ">
                                        <FaRegUser size={17} />
                                        <p className="text-sm">View Profile</p>
                                    </div>
                                </NavLink>
                                <NavLink to={"/dashboard/profile"}>
                                    <div className="w-full h-8 flex items-center hover:text-[#a287f4] cursor-pointer transition-all duration-500 gap-2">
                                        <FaRegUser size={17} />
                                        <p className="text-sm">
                                            Account Setting
                                        </p>
                                    </div>
                                </NavLink>
                                <NavLink to={'/dashboard/referus'}>
                                    <div className="w-full h-8 flex items-center hover:text-[#a287f4] cursor-pointer transition-all duration-500 gap-2">
                                        <FaRegUser size={17} />
                                        <p className="text-sm">Refer Users</p>
                                    </div>
                                </NavLink>
                                <div className="w-full h-8 flex items-center hover:text-[#a287f4] cursor-pointer transition-all duration-500 gap-2">
                                    <FaRegUser size={17} />
                                    <p className="text-sm">Support</p>
                                </div>
                            </div>
                            <div className="w-full h-12 flex items-center hover:text-[#a287f4] cursor-pointer transition-all duration-500 gap-2 border-t border-t-gray-300 py-2 pl-8 text-[#526484]">
                                <IoLogOutOutline size={17} />
                                <p className="text-sm">Sign out</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Drawer
                open={openSideBar}
                onClose={() => setOpenSideBar(false)}
                placement="left"
                maskClosable={true}
                width={300}
                title={"MENU"}
            >
                <div className="w-full h-full border-t border-t-gray-300 flex flex-col gap-3">
                    <div className="w-full h-10 pl-4 cursor-pointer flex items-center text-[rgb(30,224,172)] font-semibold text-sm hover:text-[rgb(162,135,244)] mt-4">
                        OVERVIEW
                    </div>
                    <div className="w-full h-10 pl-4 cursor-pointer flex items-center text-[rgb(30,224,172)] font-semibold text-sm hover:text-[rgb(162,135,244)]">
                        OVERVIEW
                    </div>
                    <div className="w-full h-10 pl-4 cursor-pointer flex items-center text-[rgb(30,224,172)] font-semibold text-sm hover:text-[rgb(162,135,244)]">
                        OVERVIEW
                    </div>
                    <div className="w-full h-10 pl-4 cursor-pointer flex items-center text-[rgb(30,224,172)] font-semibold text-sm hover:text-[rgb(162,135,244)]">
                        OVERVIEW
                    </div>
                </div>
            </Drawer>
        </>
    );
};

export default Header;
