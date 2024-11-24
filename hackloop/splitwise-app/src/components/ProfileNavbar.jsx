import { useState } from 'react';
import menu from '../assets/list.png';
import close from '../assets/close.png';
import profileLogo from '../assets/user.png';


const ProfileNavbar = () => {
    const [toggle, setToggle] = useState(false);
    const profileName = "name"; // You can dynamically change this value

    return (
        <nav className="w-full flex py-6 justify-between items-center navbar">
            <img src="" alt="LOGO" className="w-[124px] h-[32px]" />
            <ul className="list-none sm:flex hidden justify-end items-center flex-1">
            <img src={profileLogo} alt="Profile" className="w-[24px] h-[24px] rounded-full mr-2" />
                {/* Profile Name or User Info */}
                <li className="font-poppins font-normal cursor-pointer text-[16px] text-white">
                    {profileName}
                </li>
            </ul>

            <div className="sm:hidden flex flex-1 justify-end items-center">
                <img
                    src={toggle ? close : menu}
                    alt="menu"
                    className="w-[28px] h-[28px] object-contain"
                    onClick={() => setToggle(prev => !prev)}
                />
                <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
                    <ul className="list-none flex flex-col justify-end items-center flex-1">
                    <img src={profileLogo} alt="Profile" className="w-[24px] h-[24px] rounded-full mr-2" />
                        {/* Profile Name in Mobile View */}
                        <li className="font-poppins font-normal cursor-pointer text-[16px] text-white mt-4">
                            {profileName}
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default ProfileNavbar;
