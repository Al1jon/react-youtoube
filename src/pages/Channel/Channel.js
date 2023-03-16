import React from 'react';
import Seidbar from '../../components/Saidbar/Saidbar';
import img from '../../images/channelimg.png';
import userImg from "../../images/opaxon.png";
import qongiroq from '../../images/Combined-Shape.svg';
import lupa from '../../images/Shape.svg';
import qwer from '../../images/Coverqwer.png';
import otaxon from '../../images/otaxon.png';
import Card from '../../components/Card/Card'
import '../../App.scss';
import leftBtn from '../../images/Left.svg';
import rightBtn from '../../images/Right.svg';
import { useNavigate } from 'react-router-dom';
const Channel = () => {
    const navigate = useNavigate()
    if (!localStorage.getItem('token')) {
        // window.location.href = '/login';
        navigate('/login')
        console.log(!localStorage.getItem('token'))
    } else {
        return (
            <div>
                <main className="flex">
                    <Seidbar />
                    <div className="w-5/6">
                        <img src={img} />
                        <div className="flex justify-between mt-8 mb-5 ">
                            <div className='flex items-center gap-4'>
                                <img className="w-20 h-20" src={userImg} />
                                <div>
                                    <h2 className="font-medium text-xl">Margaret Phelps</h2>
                                    <span className="text-slate-500">245K subscribed</span>
                                </div>
                            </div>

                            <div className="flex items-center gap-5">
                                <img className="cursor-pointer" src={qongiroq} />
                                <button className="text-white bg-red-600 px-5 py-2 rounded-3xl">Subscribe 2.3m</button>
                            </div>
                        </div>
                        <div className="flex justify-between ">
                            <ul className='flex gap-x-14 items-center '>
                                <li className="text-red-600 underline">Home</li>
                                <li>Videos</li>
                                <li>Playlists</li>
                                <li>Channels</li>
                                <li>Discussion</li>
                                <li>About</li>
                                <li><img src={lupa} /></li>
                            </ul>
                            <span className="text-slate-500">Recommended channel</span>
                        </div>
                        <div className='flex gap-8 my-16 justify-between '>
                            <div className="flex gap-8 ">
                                <img src={qwer} className="w-90" />
                                <div className="w-96 flex flex-col justify-between">
                                    <h1 className="font-medium text-xl">Choosing The Best Audio Player Software For Your Computer</h1>
                                    <p>Your cheap internet-based banner advertising will become one of the sought for ads there are. Today, the world of Internet advertising is rapidly evolving beyond banner ads and intrusive pop-ups. Bayles A common medium for advertising on the Internet is the use of banner ads.
                                    </p>
                                    <span className='text-slate-500'>11k views  ·  6 months ago</span>
                                </div>
                            </div>
                            <ul className="flex flex-col justify-between">
                                <li className='flex items-center gap-5 font-medium'><img src={otaxon} />Flora Benson</li>
                                <li className='flex items-center gap-5 font-medium'><img src={otaxon} />Violet Cobb</li>
                                <li className='flex items-center gap-5 font-medium'><img src={otaxon} />Phillip Mullins</li>
                            </ul>
                        </div>
                        <div className='cards-title flex justify-between items-center mt-8 mb-8 pr-20'>
                            <h1 className='text-2xl font-medium'>Recommended</h1>
                            <div className='flex justify-between items-center gap-x-2'>
                                <img src={leftBtn} />
                                <img src={rightBtn} />
                            </div>
                        </div>
                        <ul className="flex gap-2  w-auto overflow-hidden">
                            <Card />
                        </ul>
                    </div>
                </main>


            </div>
        );
    }
}

export default Channel;
