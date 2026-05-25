import React, { useState } from 'react'
import { MdLocationPin } from "react-icons/md";
import { TbShoppingCartCheck } from "react-icons/tb";
import { FaArrowCircleDown } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";
import burger from '../src/assets/burger.png'
import { TbChecklist } from "react-icons/tb";
import { TbClockHour9Filled } from "react-icons/tb";
import { MdOutlineDirectionsBike } from "react-icons/md";
import b1 from "../src/assets/b1.jpg";
import { MdOutlineStar } from "react-icons/md";
import { MdOutlineStarBorder } from "react-icons/md";
import { CgSearchLoading } from "react-icons/cg";
import { MdOutlineStarHalf } from "react-icons/md";
import french from "../src/assets/french.jpg";
import ice from "../src/assets/ice.jpg";
import coffee from "../src/assets/coffee.avif";
import { FaCirclePlus } from "react-icons/fa6";
import c1 from '../src/assets/c1.avif'
import fries from '../src/assets/fries.jpg';
import cd from '../src/assets/cd.jpg';
import { FaLocationDot } from "react-icons/fa6";
import { BsClockFill } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";
import { RiContactsBook3Fill } from "react-icons/ri";
import { IoIosArrowBack } from "react-icons/io";
import img1 from '../src/assets/img1.png';
import img2 from '../src/assets/img2.png';
import img3 from '../src/assets/img3.png';
import img4 from '../src/assets/img4.png';
import img5 from '../src/assets/img5.png';
import img6 from '../src/assets/img6.png';
import { FaFacebookF, FaInstagram, FaTiktok, FaSnapchatGhost } from "react-icons/fa";
function Home() {
    const drinks=[{
        name:"Royal cheese with extra Fries",
        des:"1Mc Chicken, 1 Big Mac, 1 Royal Cheeseburger, 3 medium",
        grade:"GBP 23.10",
        img:c1,
    },{
        name:"Royal cheese with extra Fries",
        des:"1Mc Chicken, 1 Big Mac, 1 Royal Cheeseburger, 3 medium",
        grade:"GBP 23.10",
        img:c1,
    },{
        name:"Royal cheese with extra Fries",
        des:"1Mc Chicken, 1 Big Mac, 1 Royal Cheeseburger, 3 medium",
        grade:"GBP 23.10",
        img:c1,
    },{
        name:"Royal cheese with extra Fries",
        des:"1Mc Chicken, 1 Big Mac, 1 Royal Cheeseburger, 3 medium",
        grade:"GBP 23.10",
        img:c1,
    },{
        name:"Royal cheese with extra Fries",
        des:"1Mc Chicken, 1 Big Mac, 1 Royal Cheeseburger, 3 medium",
        grade:"GBP 23.10",
        img:c1,
    },{
        name:"Royal cheese with extra Fries",
        des:"1Mc Chicken, 1 Big Mac, 1 Royal Cheeseburger, 3 medium",
        grade:"GBP 23.10",
        img:c1,
    }]
        const Fries=[{
        name:"Royal cheese with extra Fries",
        des:"1Mc Chicken, 1 Big Mac, 1 Royal Cheeseburger, 3 medium",
        grade:"GBP 23.10",
        img:fries,
    },{
        name:"Royal cheese with extra Fries",
        des:"1Mc Chicken, 1 Big Mac, 1 Royal Cheeseburger, 3 medium",
        grade:"GBP 23.10",
        img:fries,
    },{
        name:"Royal cheese with extra Fries",
        des:"1Mc Chicken, 1 Big Mac, 1 Royal Cheeseburger, 3 medium",
        grade:"GBP 23.10",
        img:fries,
    },{
        name:"Royal cheese with extra Fries",
        des:"1Mc Chicken, 1 Big Mac, 1 Royal Cheeseburger, 3 medium",
        grade:"GBP 23.10",
        img:fries,
    },{
        name:"Royal cheese with extra Fries",
        des:"1Mc Chicken, 1 Big Mac, 1 Royal Cheeseburger, 3 medium",
        grade:"GBP 23.10",
        img:fries,
    },{
        name:"Royal cheese with extra Fries",
        des:"1Mc Chicken, 1 Big Mac, 1 Royal Cheeseburger, 3 medium",
        grade:"GBP 23.10",
        img:fries,
    }]
            const cold=[{
        name:"Royal cheese with extra Fries",
        des:"1Mc Chicken, 1 Big Mac, 1 Royal Cheeseburger, 3 medium",
        grade:"GBP 23.10",
        img:cd,
    },{
        name:"Royal cheese with extra Fries",
        des:"1Mc Chicken, 1 Big Mac, 1 Royal Cheeseburger, 3 medium",
        grade:"GBP 23.10",
        img:cd,
    },{
        name:"Royal cheese with extra Fries",
        des:"1Mc Chicken, 1 Big Mac, 1 Royal Cheeseburger, 3 medium",
        grade:"GBP 23.10",
        img:cd,
    },{
        name:"Royal cheese with extra Fries",
        des:"1Mc Chicken, 1 Big Mac, 1 Royal Cheeseburger, 3 medium",
        grade:"GBP 23.10",
        img:cd,
    },{
        name:"Royal cheese with extra Fries",
        des:"1Mc Chicken, 1 Big Mac, 1 Royal Cheeseburger, 3 medium",
        grade:"GBP 23.10",
        img:cd,
    },{
        name:"Royal cheese with extra Fries",
        des:"1Mc Chicken, 1 Big Mac, 1 Royal Cheeseburger, 3 medium",
        grade:"GBP 23.10",
        img:cd,
    }]
     const imgs=[{
        name:"McDonald's London",
        img:img1,
    },{
        name:"Papa Johns",
        img:img2,
    },{
        name:"KFC West London",
        img:img3,
    },{
        name:"Texas Chicken",
        img:img4,
    },{
        name:"Burger King",
        img:img5,
    },{
        name:"Shaurma 1",
        img:img6,
    }]
    const [active,setActive] = useState(3);
    const [activeb,setActiveb] = useState(5);
    return (
        <div className="m-0 p-0 box-border">
            <p className="pl-10 pt-2 text-[10px]">Restaurant Detail Page Desktop</p>
            <div className="flex justify-between bg-gray-100 ml-20 mr-20 mt-2  border-1 border-gray-300 rounded-b-[10px]">
            <div className='flex gap-1 p-4'>
                <p className='pl-15 text-sm'>Get 5% off your first order,</p>
                <p className='text-sm text-orange-500 underline '>PROMO: ORDER5</p>
            </div>
            <div className='flex gap-3 justify-center p-4'>
                <MdLocationPin className='text-[20px] ' />
                <p className='text-sm font-semibold'>Regent Street, A4, A4201, London</p>
                <p className='text-sm text-orange-500 underline cursor-pointer'>Change Location</p>
                <div className='flex text-white m-[-17px] ml-[10px] bg-green-700 rounded-b-[10px]'>
                    <TbShoppingCartCheck className='bg-green-700 border-r border-green-500 text-[52px] p-3 rounded-bl-[10px] cursor-pointer' />
                    <p className='text-sm bg-green-700 border-r border-green-500 p-3 pt-4'>23 Items</p>
                    <p className='text-sm bg-green-700 border-r border-green-500 p-3 pt-4'>GBP 79.89</p>
                    
                    <FaArrowCircleDown className='bg-green-700 text-[52px] p-3 rounded-br-[10px] cursor-pointer' />
                </div>
                
            </div>
        </div>
        <div className='flex justify-between p-10 pl-20 pr-40'>
                <div className='flex gap-2'>
              <h1 className='font-bold text-6xl'>Order</h1>
                <h1 className='bg-orange-500 -rotate-90 font-bold text-[20px] mt-5 pb-[0px]'>.UK</h1>
                </div>
            <div className='flex gap-2 justify-around mt-[25px]'>
                                <nav className='flex gap-14 justify-around'>
                                    <a className={`font-semibold p-1 pl-8 pr-8 rounded-[50px] cursor-pointer transition duration-200 ease-in-out ${active==1 ? "bg-orange-500  hover:bg-orange-500 text-white":"hover:bg-gray-200 "}`} onClick={()=>setActive(1)}>Home</a>
                                    <a className={`font-semibold p-1 pl-8 pr-8 rounded-[50px] cursor-pointer transition duration-200 ease-in-out ${active==2 ?"bg-orange-500 hover:bg-orange-500 text-white":"hover:bg-gray-200 "}`} onClick={()=>setActive(2)}>Special Offers</a>
                                    <a className={` font-semibold p-1 pl-8 pr-8 rounded-[50px] cursor-pointer transition duration-200 ease-in-out ${active==3 ?"bg-orange-500 hover:bg-orange-500 text-white":"hover:bg-gray-200 "}`} onClick={()=>setActive(3)}> Restaurants</a>
                                    <a className={`font-semibold cursor-pointer p-1 pl-8 pr-8 rounded-[50px] transition duration-200 ease-in-out ${active==4 ?"bg-orange-500 hover:bg-orange-500 text-white":"hover:bg-gray-200 "}`} onClick={()=>setActive(4)}>Track Order</a>
                    <button className='flex justify-center text-white bg-black p-1 pl-8 pr-8 rounded-[50px] cursor-pointer '>
                        <IoMdContact className='text-orange-500 pr-2 text-[26px]'/>

                        <p>Login/Signup</p>
                    </button>
                </nav>
                
            </div>
        </div>
        <div className='bg-black w-440 h-150 ml-20 rounded-[10px] relative'>
            <img src={burger} className='w-440 h-150 rounded-[10px] opacity-20 '>
            </img>
            <p className='absolute ml-20 top-50 text-white text-3xl'>I'm Lovin'it</p>
            <h1 className='absolute ml-20 top-65 text-white text-6xl font-bold'>McDonald's East London</h1>
            <div className='flex ml-20'>
               <div className='flex absolute top-90 p-5 text-white text-2xl border-2 rounded-[50px] justify-start align-middle'>
                   <TbChecklist className='pt-1 text-3xl' />
                   <h4 className='pl-2'>Minimum Order:12 GBP</h4>
               </div>
               <div className=' flex absolute ml-90 p-5 top-90 text-white text-2xl border-2 rounded-[50px]'>
                   <MdOutlineDirectionsBike className='pt-1 text-3xl' />
                   <h4 className='pl-2'>Delivery in 20-25 Minutes</h4>
               </div>
            </div>
            
            <div className='absolute flex gap-3 p-4 justify-center bg-orange-400 w-100 h-17 rounded-r-2xl bottom-[-35px]'>
                <TbClockHour9Filled className='text-3xl mt-1 text-white text-center' />
                <p className='text-2xl text-white'>Opening until 3:00 AM</p>
            </div>
            </div>
            <div className='absolute left-270 top-70'>
                <img src={b1} className='relative h-115 w-165 rounded-2xl'></img>
                <div className='absolute flex flex-col gap-1 bg-white rounded-2xl p-3 bottom-[-10px] left-[-50px] shadow-[0px_1px_10px] shadow-grey-500'>
                    <span className='text-7xl '>3.4</span>
                    <div className='flex text-xl'>
                        <MdOutlineStar className='text-yellow-400' />
                        <MdOutlineStar className='text-yellow-400'/>
                        <MdOutlineStar className='text-yellow-400' />
                        <MdOutlineStarHalf  className='text-yellow-400'/>
                        <MdOutlineStarBorder className='text-gray-300'/>
                    </div>
                    <span className='text-gray-500'>1.360 Reviews</span>
                </div>
            </div>
        <div className='flex justify-between m-20'>
            <span className='text-4xl font-bold pt-4 pl-10'>
                All Offers from McDonald's East London
            </span>
            <div className='flex gap-4 p-4 pr-30 border-1 rounded-4xl mr-10'>
                <CgSearchLoading className='text-4xl text-gray-500'/>
                <input placeholder="Search from Menu..." className='text-2xl text-gray-500 focus:outline-none'></input>
            </div>
        </div>
        <div className=' flex justify-around items-center bg-orange-400 w-460 h-20 ml-10 text-white text-xl font-semibold'>
            <a className={`pl-5 pr-5 p-1 rounded-4xl cursor-pointer transition duration-200 ease-in-out ${activeb==5?"bg-black hover:bg-black":"hover:bg-orange-500"}`} onClick={()=>setActiveb(5)}>Offers</a>
            <a className={`pl-5 pr-5 p-1 rounded-4xl cursor-pointer transition duration-200 ease-in-out ${activeb==6?"bg-black hover:bg-black":" hover:bg-orange-500"}`} onClick={()=>setActiveb(6)}>Burgers</a>
            <a className={`pl-5 pr-5 p-1 rounded-4xl cursor-pointer transition duration-200 ease-in-out ${activeb==7?"bg-black hover:bg-black":" hover:bg-orange-500"}`} onClick={()=>setActiveb(7)}>Freis</a>
            <a className={`pl-5 pr-5 p-1 rounded-4xl cursor-pointer transition duration-200 ease-in-out ${activeb==8?"bg-black hover:bg-black":" hover:bg-orange-500"}`} onClick={()=>setActiveb(8)}>Snacks</a>
            <a className={`pl-5 pr-5 p-1 rounded-4xl cursor-pointer transition duration-200 ease-in-out ${activeb==9?"bg-black hover:bg-black":" hover:bg-orange-500"}`} onClick={()=>setActiveb(9)}>Salads</a>
            <a className={`pl-5 pr-5 p-1 rounded-4xl cursor-pointer transition duration-200 ease-in-out ${activeb==10?"bg-black hover:bg-black":" hover:bg-orange-500"}`}onClick={()=>setActiveb(10)}>Cold Drinks</a>
            <a className={`pl-5 pr-5 p-1 rounded-4xl cursor-pointer transition duration-200 ease-in-out ${activeb==11?"bg-black hover:bg-black":" hover:bg-orange-500"}`}onClick={()=>setActiveb(11)}>Happy Meal</a>
            <a className={`pl-5 pr-5 p-1 rounded-4xl cursor-pointer transition duration-200 ease-in-out ${activeb==12?"bg-black hover:bg-black":" hover:bg-orange-500"}`}onClick={()=>setActiveb(12)}>Desserts</a>
            <a className={`pl-5 pr-5 p-1 rounded-4xl cursor-pointer transition duration-200 ease-in-out ${activeb==13?"bg-black hover:bg-black":" hover:bg-orange-500"}`}onClick={()=>setActiveb(13)}>Hot Drinks</a>
            <a className={`pl-5 pr-5 p-1 rounded-4xl cursor-pointer transition duration-200 ease-in-out ${activeb==14?"bg-black hover:bg-black":" hover:bg-orange-500"}`}onClick={()=>setActiveb(14)}>Sauces</a>
            <a className={`pl-5 pr-5 p-1 rounded-4xl cursor-pointer transition duration-200 ease-in-out ${activeb==15?"bg-black hover:bg-black":" hover:bg-orange-500"}`}onClick={()=>setActiveb(15)}>Orbit</a>
        </div>
        <div className='flex gap-4 mr-20 ml-20 mb-15 m-30'>
            <div className='relative hover:scale-102 duration-200'>
                <img className='w-150 h-100 rounded-2xl' src={coffee}></img>
                <div className='absolute bg-black w-25 h-20 top-0 right-[40px] rounded-b-2xl text-2xl text-white text-center pt-5'>-20%</div>
                <div className='absolute flex flex-col top-70 left-10'>
                    <span className='text-yellow-600 text-2xl font-semibold'>McDonald's East London</span>
                    <span className='text-[40px] font-bold text-white'>First Order Discount</span>
                    
                </div>
                <div className='absolute bg-white opacity-80 w-20 h-20 right-0 text-4xl text-center p-4 rounded-tl-2xl bottom-[0px]'>
                        <FaCirclePlus />
                    </div>
            </div>
            <div className='relative hover:scale-102 duration-200'>
                <img className='w-150 h-100 rounded-2xl' src={french}></img>
                <div className='absolute bg-black w-25 h-20 top-0 right-[40px] rounded-b-2xl text-2xl text-white text-center pt-5'>-20%</div>
                <div className='absolute flex flex-col top-70 left-10'>
                    <span className='text-yellow-600 text-2xl font-semibold'>McDonald's East London</span>
                    <span className='text-[40px] font-bold text-white'>Vegan Discount</span>
                    
                </div>
                <div className='absolute bg-white opacity-80 w-20 h-20 right-0 text-4xl text-center p-4 rounded-tl-2xl bottom-[0px]'>
                        <FaCirclePlus />
                    </div>
            </div>
            <div className='relative hover:scale-102 duration-200'>
                <img className='w-150 h-100 rounded-2xl' src={ice} ></img>
                <div className='absolute bg-black w-25 h-20 top-0 right-[40px] rounded-b-2xl text-2xl text-white text-center pt-5'>-100%</div>
                <div className='absolute flex flex-col top-70 left-10'>
                    <span className='text-yellow-600 text-2xl font-semibold'>McDonald's East London</span>
                    <span className='text-[40px] font-bold text-white'>Free ice Cream Offer</span>
                    
                </div>
                <div className='absolute bg-white opacity-80 w-20 h-20 right-0 text-4xl text-center p-4 rounded-tl-2xl bottom-[0px]'>
                        <FaCirclePlus />
                    </div>
            </div>
        </div>
        <div className='mb-15 ml-20'>
            <span className='font-bold text-4xl'>Burgers</span>
        </div>
        <div className='flex ml-20 gap-5 flex-wrap justify-between mr-20 mb-15 hover:scale-[1.2px]'>
            {
                
                drinks.map((items,index)=>(
                    <div key={index} className='relative flex  h-45 w-140 rounded-2xl shadow-[1px_5px_15px] shadow-gray-300 hover:scale-102 duration-200'>
                    <div className='flex flex-col basis-[60%] p-6 pt-8 gap-4'>
                        <span className='font-bold'>{items.name}</span>
                        <span className='text-[13px]'>{items.des}</span>
                        <span className='font-bold'>{items.grade}</span>
                    </div>
                    <div>
                    <img src={items.img} className='absolute w-60 h-45 p-4 right-0 rounded-[25px]'></img>
                    <div className='absolute bg-white opacity-80 w-20 h-20 right-0 text-4xl text-center p-4 rounded-tl-2xl rounded-br-3xl bottom-[0px]'>
                        <FaCirclePlus />
                    </div>
                    </div>
                    </div>
                ))
                
            }
            
            </div>
            <div className='mb-15 ml-20'>
            <span className='font-bold text-4xl'>Fries</span>
        </div>
             <div className='flex ml-20 gap-5 flex-wrap justify-between mr-20 mb-15'>
            {
                
                Fries.map((items,index)=>(
                    <div key={index} className='relative flex  h-45 w-140 rounded-2xl shadow-[1px_5px_15px] shadow-gray-300 hover:scale-102 duration-200'>
                    <div className='flex flex-col basis-[60%] p-6 pt-8 gap-4'>
                        <span className='font-bold'>{items.name}</span>
                        <span className='text-[13px]'>{items.des}</span>
                        <span className='font-bold'>{items.grade}</span>
                    </div>
                    <div>
                    <img src={items.img} className='absolute w-60 h-45 p-4 right-0 rounded-[25px]'></img>
                    <div className='absolute bg-white opacity-80 w-20 h-20 right-0 text-4xl text-center p-4 rounded-tl-2xl rounded-br-3xl bottom-[0px]'>
                        <FaCirclePlus />
                    </div>
                    </div>
                    </div>
                ))
                
            }
            </div>
            <div className='mb-15 ml-20'>
            <span className='font-bold text-4xl text-orange-500'>Cold Drinks</span>
        </div>
             <div className='flex ml-20 gap-5 flex-wrap justify-between mr-20 mb-15'>
            {
                
                cold.map((items,index)=>(
                    <div key={index} className='relative flex  h-45 w-140 rounded-2xl shadow-[1px_5px_15px] shadow-gray-300 hover:scale-102 duration-200'>
                    <div className='flex flex-col basis-[60%] p-6 pt-8 gap-4'>
                        <span className='font-bold'>{items.name}</span>
                        <span className='text-[13px]'>{items.des}</span>
                        <span className='font-bold'>{items.grade}</span>
                    </div>
                    <div>
                    <img src={items.img} className='absolute w-60 h-45 p-4 right-0 rounded-[25px]'></img>
                    <div className='absolute bg-white opacity-80 w-20 h-20 right-0 text-4xl text-center p-4 rounded-tl-2xl rounded-br-3xl bottom-[0px]'>
                        <FaCirclePlus />
                    </div>
                    </div>
                    </div>
                ))
                
            }
            </div>
            <div className='flex w-435 gap-1 bg-gray-25 h-150 shadow-[1px_5px_15px] shadow-gray-300 ml-20 mr-20 mb-20 rounded-2xl'>
                <div className='basis-[35%] p-10 pt-22 pb-20'>
                    <div className='flex gap-4'>
                        <FaLocationDot className='text-4xl'/>
                        <h4 className='text-4xl font-bold mt-[-4px] text-orange-500'>Delivery information</h4>
                    </div>
                    <div className='flex flex-col gap-3 pt-10'>
                        <span className='flex text-2xl font-bold'>Monday:<p className='font-medium pl-2'> 12:00 AM–3:00 AM, 8:00 AM–3:00 AM</p></span>
                        <span className='flex text-2xl font-bold'>Tuesday:<p className='font-medium pl-2'> 8:00 AM–3:00 AM</p></span>
                        <span className='flex text-2xl font-bold'>Wednesday:<p className='font-medium pl-2'> 8:00 AM–3:00 AM</p></span>
                        <span className='flex text-2xl font-bold'>Thursday:<p className='font-medium pl-2'> 8:00 AM–3:00 AM       </p></span>
                        <span className='flex text-2xl font-bold'>Friday:<p className='font-medium pl-2'> 8:00 AM–3:00 AM</p></span>
                        <span className='flex text-2xl font-bold'>Saturday:<p className='font-medium pl-2'> 8:00 AM–3:00 AM</p></span>
                        <span className='flex text-2xl font-bold'>Sunday:<p className='font-medium pl-2'> 8:00 AM-12:00 AM</p></span>
                        <span className='flex text-2xl font-bold'>Estimated time until delivery:<p className='font-medium pl-2'>20 min</p></span>
                    </div>
                </div>
               <div className='basis-[35%] p-10 pt-20 pb-20'>
                    <div className='flex gap-4'>
                        <RiContactsBook3Fill className='text-4xl'/>
                        <h4 className='text-4xl font-bold mt-[-4px]'>Contact information</h4>
                        
                    </div>
                    <div className='flex flex-col gap-3 pt-10'>
                            <p className='text-2xl leading-13'>If you have allergies or other dietary<br></br>restrictions, please contact the restaurant. The <br></br>restaurant will provide food-specific<br></br> information upon request.</p>
                            <div>
                            <h4 className='text-xl font-bold'>
                                Phone Number
                            </h4>
                            <p className='text-xl leading-10'>+934443-43</p>
                            </div>
                            <div>
                            <h4 className='text-xl font-bold'>
                                Website
                            </h4>
                            <a href="http://mcdonalds.uk/"className='text-xl leading-10'>http://mcdonalds.uk/</a>
                            </div>
                            
                        </div>
                    
                </div>
                <div className='basis-[30%] bg-blue-950 rounded-r-2xl p-10 pt-22 pb-20'>
                     <div className='flex gap-4'>
                        <BsClockFill className='text-4xl text-white'/>
                        <h4 className='text-4xl font-bold mt-[-4px] text-white'>Contact information</h4>
                    </div>
                     <div className='flex flex-col gap-3 pt-10'>
                        <span className='flex text-2xl font-bold text-white'>Monday:<p className='font-medium pl-2'> 12:00 AM–3:00 AM</p></span>
                        <span className='flex text-2xl font-bold text-white'>Tuesday:<p className='font-medium pl-2'> 8:00 AM–3:00 AM</p></span>
                        <span className='flex text-2xl font-bold text-white'>Wednesday:<p className='font-medium pl-2'> 8:00 AM–3:00 AM</p></span>
                        <span className='flex text-2xl font-bold text-white'>Thursday:<p className='font-medium pl-2'> 8:00 AM–3:00 AM       </p></span>
                        <span className='flex text-2xl font-bold text-white'>Friday:<p className='font-medium pl-2'> 8:00 AM–3:00 AM</p></span>
                        <span className='flex text-2xl font-bold text-white'>Saturday:<p className='font-medium pl-2'> 8:00 AM–3:00 AM</p></span>
                        <span className='flex text-2xl font-bold text-white'>Sunday:<p className='font-medium pl-2'> 8:00 AM-3:00 AM</p></span>
                    </div>
                </div>
            </div>
            <div className='relative w-455 gap-1 bg-gray-200 h-160 ml-10 mr-10 mb-20'>
                <div className='flex justify-between pt-20 pr-20 pl-20 pb-10'>
                    <h1 className='text-5xl font-bold'>Customers Reviews</h1>
                    <div className='flex gap-4'>
                        <IoIosArrowBack className='bg-orange-500 rounded-4xl text-6xl cursor-pointer' />
                        <IoIosArrowForward className='bg-orange-500 rounded-4xl text-6xl cursor-pointer'/>
                    </div>
                    
                </div>
                <div className='flex gap-6 pr-20 pl-20'>
                        <div className='w-150 h-80 bg-white p-8'>
        <div className="flex items-center gap-3">
          <img
            src="https://randomuser.me/api/portraits/women/44.jpg"
            alt="user"
            className="w-10 h-10 rounded-full"
          />
          <div>
            <h4 className="font-semibold text-lg">St Glx</h4>
            <p className="text-orange-500 text-md">South London</p>
          </div>
          <div className='flex flex-col'>
        <div className="flex text-orange-500 text-lg pl-50">
          {[...Array(5)].map((_, i) => (
            <MdOutlineStar key={i} />
          ))}
          </div>
          <p className="text-sm pl-40 text-gray-500 mb-3">
        24th September, 2023
      </p>
        </div>
        </div>
      <p className="text-2xl leading-relaxed pt-5">
        The positive aspect was undoubtedly the efficiency of the service.
        The queue moved quickly, the staff was friendly, and the food was up
        to the usual McDonald's standard – hot and satisfying.
      </p>
                        </div>
                        <div className='w-150 h-80 bg-white p-8'>
        <div className="flex items-center gap-3">
          <img
            src="https://randomuser.me/api/portraits/women/44.jpg"
            alt="user"
            className="w-10 h-10 rounded-full"
          />
          <div>
            <h4 className="font-semibold text-lg">St Glx</h4>
            <p className="text-orange-500 text-md">South London</p>
          </div>
          <div className='flex flex-col'>
        <div className="flex text-orange-500 text-lg pl-50">
          {[...Array(5)].map((_, i) => (
            <MdOutlineStar key={i} />
          ))}
          </div>
          <p className="text-sm pl-40 text-gray-500 mb-3">
        24th September, 2023
      </p>
        </div>
        </div>
      <p className="text-2xl leading-relaxed pt-5">
        The positive aspect was undoubtedly the efficiency of the service.
        The queue moved quickly, the staff was friendly, and the food was up
        to the usual McDonald's standard – hot and satisfying.
      </p>
                        </div>
                        <div className='w-150 h-80 bg-white p-8'>
        <div className="flex items-center gap-3">
          <img
            src="https://randomuser.me/api/portraits/women/44.jpg"
            alt="user"
            className="w-10 h-10 rounded-full"
          />
          <div>
            <h4 className="font-semibold text-lg">St Glx</h4>
            <p className="text-orange-500 text-md">South London</p>
          </div>
          <div className='flex flex-col'>
        <div className="flex text-orange-500 text-lg pl-50">
          {[...Array(5)].map((_, i) => (
            <MdOutlineStar key={i} />
          ))}
          </div>
          <p className="text-sm pl-40 text-gray-500 mb-3">
        24th September, 2023
      </p>
        </div>
        </div>
      <p className="text-2xl leading-relaxed pt-5">
        The positive aspect was undoubtedly the efficiency of the service.
        The queue moved quickly, the staff was friendly, and the food was up
        to the usual McDonald's standard – hot and satisfying.
      </p>
                        </div>
                    </div>
                    <div className='absolute w-35 h-40 bg-white shadow-[0px_1px_10px] shadow-gray-200 rounded-2xl bottom-[-100px] left-210 p-5'>
                        <span className='text-7xl '>3.4</span>
                    <div className='flex text-xl '>
                        <MdOutlineStar className='text-yellow-400' />
                        <MdOutlineStar className='text-yellow-400'/>
                        <MdOutlineStar className='text-yellow-400' />
                        <MdOutlineStarHalf  className='text-yellow-400'/>
                        <MdOutlineStarBorder className='text-gray-300'/>
                    </div>
                    <span className='text-gray-500'>1.360 Reviews</span>
                    </div>
            </div>
            <div className='mb-15 ml-20 mt-30'>
            <span className='font-bold text-4xl'>Similar Restaurants</span>
            <div className='relative flex gap-10 ml-10 mt-10 mr-20'>
               { imgs.map((items,index)=>(
                 <div key={index}>
                <img src={items.img} className={`w-60 h-50 rounded-t-xl ${items.img==img4?"border-1 border-gray-200":""}`}/>
                <span className='absolute w-60 h-14 text-center pt-3 bg-orange-500 text-white text-xl rounded-b-xl'>{items.name}</span>
            </div>
               ))
              }
            </div>
            </div>
            <div className='relative w-455 bg-gray-200 h-120 mt-30 mb-10 ml-10 mr-10'>
            <div className=" p-20 pl-40 grid grid-cols-1 md:grid-cols-4 gap-10 ">
        
        {/* Left */}
        <div>
          <h1 className="text-6xl font-bold tracking-tight mb-6">
            Order<span className="text-base align-top">.UK</span>
          </h1>

          <div className="flex gap-3 mb-6">
            <img
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
              className="h-12"
              alt=""
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              className="h-12"
              alt=""
            />
          </div>

          <p className="text-lg text-gray-600 leading-relaxed">
            Company # 490039-445, Registered with <br />
            House of companies.
          </p>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="font-semibold mb-5 text-lg">
            Get Exclusive Deals in your Inbox
          </h3>

          <div className="flex mb-2">
            <input
              type="email"
              placeholder="youremail@gmail.com"
              className="bg-white px-5 py-2 text-md rounded-l-full w-full outline-none"
            />
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 text-sm rounded-r-full transition">
              Subscribe
            </button>
          </div>

          <p className="text-s text-gray-500 mb-4">
            we wont spam, read our email policy
          </p>

          <div className="flex gap-5 text-lg">
            <FaFacebookF className="hover:text-orange-500 cursor-pointer" />
            <FaInstagram className="hover:text-orange-500 cursor-pointer" />
            <FaTiktok className="hover:text-orange-500 cursor-pointer" />
            <FaSnapchatGhost className="hover:text-orange-500 cursor-pointer" />
          </div>
        </div>

        {/* Legal Pages */}
        <div className='pl-20'>
          <h3 className="font-semibold mb-5 text-md">Legal Pages</h3>
          <ul className="space-y-3 text-md text-gray-700">
            <li className="hover:text-orange-500 cursor-pointer">Terms and conditions</li>
            <li className="hover:text-orange-500 cursor-pointer">Privacy</li>
            <li className="hover:text-orange-500 cursor-pointer">Cookies</li>
            <li className="hover:text-orange-500 cursor-pointer">Modern Slavery Statement</li>
          </ul>
        </div>

        {/* Important Links */}
        <div>
          <h3 className="font-semibold mb-5 text-md">Important Links</h3>
          <ul className="space-y-3 text-md text-gray-700">
            <li className="hover:text-orange-500 cursor-pointer">Get help</li>
            <li className="hover:text-orange-500 cursor-pointer">Add your restaurant</li>
            <li className="hover:text-orange-500 cursor-pointer">Sign up to deliver</li>
            <li className="hover:text-orange-500 cursor-pointer">Create a business account</li>
          </ul>
        </div>
      </div>
                <div className='absolute flex justify-between w-455 bg-black h-20 bottom-0'>
                    <span className='text-white pt-7 pl-20'>Order.uk Copyrights 2024, All Rights Reserved.</span>
                    <div className='flex gap-10 justify-around text-white pt-7 pr-20'>
                        <span>Privacy Policy</span>
                        <span>Terms</span>
                        <span>Pricing</span>
                        <span>Do not Sell or Share my Personal Information</span>
                    </div>
                </div>
            </div>
        </div>
  
    )
}

export default Home
