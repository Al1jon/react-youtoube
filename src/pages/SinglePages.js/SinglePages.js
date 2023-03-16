import React from 'react';
import '../../App.scss';
import autoplay from '../../images/Group 2.png';
import Card from '../../components/Card/Card';
import { useParams } from 'react-router-dom';
import oval2 from '../../images/Oval2.png'


const SinglePages = () => {
    const { id } = useParams();

    return (
        <>
            <main className='flex px-16 py-8 items-start gap-10'>
                <div className="flex flex-col h-full w-3/4">
                    <iframe src={`https://www.youtube.com/embed/${id}`} className='rounded-xl' style={{minHeight:500}}>
                    </iframe>
                    <div className='py-5'>
                        <h1 className='text-4xl font-medium '>ada ed ae da da wdae de dae dae</h1>
                        <span className='text-slate-500 mt-6'>123k views</span>
                        <hr className='mb-6 mt-4' />
                        <div className='flex items-start gap-3'>
                        <img src={oval2} />
                        <div>
                            <h2 className='text-2xl font-medium'>Food & Drink</h2>
                            <span className='text-slate-500 '>Published on 14 Jun 2019</span>
                            <p>A successful marketing plan relies heavily on the pulling-power of advertising copy. Writing result-oriented ad copy is difficult, as it must appeal to, entice, and convince consumers to take action. There is no magic formula to write perfect ad copy; it is based on a number of factors, including ad placement, demographic, even the consumer’s mood when they see your ad.
                            </p>
                        </div>
                        </div>
                    </div>
                </div>

                <ul className="w-80 gap-10">
                    <div className="flex justify-between items-end mb-6">
                        <h2 className="font-medium text-4xl">Next</h2>
                        <span className='text-xl flex gap-2 items-center'>Autoplay <img src={autoplay} /></span>
                    </div>
                    <Card />
                </ul>
                {/* <h1>VIDEO ID : {id}</h1> */}
            </main>

        </>
    );
}
export default SinglePages;
