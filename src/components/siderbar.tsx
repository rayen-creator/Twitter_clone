import { BsTwitter } from 'react-icons/bs';
import { menu } from '../constants';
import { FiMoreHorizontal } from "react-icons/fi";
import logo from '../assets/logo.jpg';

const Siderbar = ({children}:any) => {
    return (
        <div className="flex divide-x">
            <div className="flex flex-col w-1/4 h-full justify-start items-start px-10 bg-white overflow-y-auto ">
                <div className='hover:bg-slate-200 cursor-pointer rounded-full p-2 my-1'>
                    <BsTwitter className="text-3xl text-primary " />

                </div>
                {
                    menu.map((menu) => (<div className='flex flex-row items-center hover:bg-slate-200 cursor-pointer rounded-full px-4 py-2 my-1 '>
                        <div className=''>
                            {menu.icon}
                        </div>
                        <div className='hidden text-xl font-normal hover:font-bold md:block'>{menu.menuName}</div>
                    </div>
                    ))
                }
                <div className='my-2 p-3 rounded-full bg-primary w-full text-white font-bold text-lg text-center hover:bg-hover_color'>Tweet</div>
                <div className="my-5"></div>
              

                <div className='w-full hover:bg-slate-200 cursor-pointer rounded-full p-3 my-1 flex flex-row justify-around items-center'>
                    <img src={logo} alt="profile pic" className="rounded-full w-12" />
                    <div className='flex flex-col flex-1 px-2 '>
                        <div className='text-md font-bold hidden md:block'>rayen oueslati</div>
                        <div className='text-sm font-medium text-gray-600 hidden md:block'>@rayenoueslati8</div>
                    </div>

                    <div className='mx-4 hidden md:block'>
                        <FiMoreHorizontal />
                    </div>
                  

                </div>
            </div>
            <div className="w-screen h-screen bg-white">
                
                {children}
            </div>
        </div>


    );
}

export default Siderbar;