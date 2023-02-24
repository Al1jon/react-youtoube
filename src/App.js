import logo from './images/Black.png';
import menu from './images/Combined Shape.svg';
import combined from './images/Combined-Shape.svg';
import clip from './images/phone-18.svg';
import dd from './images/Combined Shape (1).svg';
import user from './images/Userpic.png';
import lupa from './images/Shape.svg';
import home from './images/Combined-Shape (1).svg';
import trend from './images/Path-957-Copy.svg';
import cate from './images/Combined-Shape (2).svg';
import library from './images/Combined-Shape (3).svg';
import history from './images/Combined-Shape (4).svg';
import watch from './images/Shape (1).svg';
import star from './images/Star-7.svg';
import like from './images/Combined-Shape (5).svg';
import music from './images/Combined-Shape (6).svg';
import games from './images/Combined-Shape (7).svg';
import more from './images/Path.svg';
import oval from './images/Oval.png';
import cardImg from './images/Cover.png';
import cardImg2 from './images/Cover (1).png';
import titleImg from './images/Oval.png';
import leftBtn from './images/Left.svg';
import rightBtn from './images/Right.svg';


import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="header flex justify-between items-center">
        <div className="flex">
          <div className="header__left">
            <img style={{ width: 20 }} src={menu} alt="menu" />
            <img src={logo} alt="logo" />
          </div>
          <div className="relative">
            <input type="text" placeholder="Search" style={{ width: 730 }} className="ml-14 rounded-3xl border-solid border-0 bg-slate-100 py-2 px-4 " />
            <img className="absolute top-3 right-5" src={lupa} />
          </div>
        </div>
        <div className="header__icons flex gap-x-12 items-center">
          <img src={clip} />
          <img src={dd} />
          <img src={combined} />
          <img src={user} />
        </div>
      </header>

      <main className="flex"> 
        <section className="saidbar px-9 w-80">
          <ul className='flex flex-col gap-y-6'>
            <li className='flex items-center gap-x-3'><img src={home} /><span className="font-medium text-red-500">Home</span></li>
            <li className='flex items-center gap-x-3'><img src={trend} /><span className="font-medium text-slate-400">Trending</span></li>
            <li className='flex items-center gap-x-3'><img src={cate} /><span className="font-medium text-slate-400">Subscriptions</span></li>
            <li className='flex items-center gap-x-3'><img src={library} /><span className="font-medium text-slate-400">Library</span></li>
            <li className='flex items-center gap-x-3'><img src={history} /><span className="font-medium text-slate-400">History</span></li>
            <li className='flex items-center gap-x-3'><img src={watch} /><span className="font-medium text-slate-400">Watch later</span></li>
            <li className='flex items-center gap-x-3'><img src={star} /><span className="font-medium text-slate-400">Favourites</span></li>
            <li className='flex items-center gap-x-3'><img src={like} /><span className="font-medium text-slate-400">Liked videos</span></li>
            <li className='flex items-center gap-x-3'><img src={music} /><span className="font-medium text-slate-400">Music</span></li>
            <li className='flex items-center gap-x-3'><img src={games} /><span className="font-medium text-slate-400">Games</span></li>
            <li className='flex items-center gap-x-3'><img src={more} /><span className="font-medium text-slate-400">Show more</span></li>
          </ul>
          <div className='subcription mt-14'>
            <h1 className="font-bold mb-8 text-lg">Subscriptions</h1>
            <ul className='flex flex-col gap-y-6'>
              <li className='flex items-center gap-x-3'><img src={oval} /><span className="font-medium text-slate-400">Gussie Singleton</span></li>
              <li className='flex items-center gap-x-3'><img src={oval} /><span className="font-medium text-slate-400">Nora Francis</span></li>
              <li className='flex items-center gap-x-3'><img src={oval} /><span className="font-medium text-slate-400">Subscriptions</span></li>
              <li className='flex items-center gap-x-3'><img src={oval} /><span className="font-medium text-slate-400">Belle Briggs</span></li>
              <li className='flex items-center gap-x-3'><img src={oval} /><span className="font-medium text-slate-400">Eunice Cortez</span></li>
              <li className='flex items-center gap-x-3'><img src={oval} /><span className="font-medium text-slate-400">Emma Hanson</span></li>
            </ul>
          </div>
        </section>

        <section className="cards overflow-hidden">
          <div className='cards-title flex justify-between items-center mb-8 pr-20'>
            <div className='flex justify-between items-center gap-x-5'>
              <img src={titleImg} />
              <h1 className='text-2xl font-medium'>Dollie Blair</h1>
            </div>
            <div className='flex justify-between items-center gap-x-2'>
              <img src={leftBtn} />
              <img src={rightBtn} />
            </div>
          </div>
          <ul className='flex gap-x-10'>
            <li className='relative'>
              <img src={cardImg} />
              <span className="vaqt absolute top-28 text-slate-100 bg-slate-900 opacity-70 px-1 rounded-xl right-4">4:15</span>
              <h3 className="font-medium">A Brief History Of Creation</h3>
              <div className="flex justify-between">
                <span className='text-xs text-slate-400'>80k views  ·  3 days ago</span>
                <span className='text-xs text-right text-slate-400'>Dollie Blair</span>
              </div>
            </li>
            <li className='relative'>
              <img src={cardImg} />
              <span className="vaqt absolute top-28 text-slate-100 bg-slate-900 opacity-70 px-1 rounded-xl right-4">4:15</span>
              <h3 className="font-medium">A Brief History Of Creation</h3>
              <div className="flex justify-between">
                <span className='text-xs text-slate-400'>80k views  ·  3 days ago</span>
                <span className='text-xs text-right text-slate-400'>Dollie Blair</span>
              </div>
            </li>
            <li className='relative'>
              <img src={cardImg} />
              <span className="vaqt absolute top-28 text-slate-100 bg-slate-900 opacity-70 px-1 rounded-xl right-4">4:15</span>
              <h3 className="font-medium">A Brief History Of Creation</h3>
              <div className="flex justify-between">
                <span className='text-xs text-slate-400'>80k views  ·  3 days ago</span>
                <span className='text-xs text-right text-slate-400'>Dollie Blair</span>
              </div>
            </li>
            <li className='relative'>
              <img src={cardImg} />
              <span className="vaqt absolute top-28 text-slate-100 bg-slate-900 opacity-70 px-1 rounded-xl right-4">4:15</span>
              <h3 className="font-medium">A Brief History Of Creation</h3>
              <div className="flex justify-between">
                <span className='text-xs text-slate-400'>80k views  ·  3 days ago</span>
                <span className='text-xs text-right text-slate-400'>Dollie Blair</span>
              </div>
            </li>
          </ul>

          <div className='cards-title flex justify-between items-center mt-8 mb-8 pr-20'>
            <h1 className='text-2xl font-medium'>Recommended</h1>
            <div className='flex justify-between items-center gap-x-2'>
              <img src={leftBtn} />
              <img src={rightBtn} />
            </div>
          </div>
          <ul className='flex gap-x-10 my-12'>
            <li className="relative">
              <img src={cardImg2} />
              <span className="vaqt absolute top-28 text-slate-100 bg-slate-900 opacity-70 px-1 rounded-xl right-4">4:15</span>
              <h3 className="font-medium">Dude You Re Getting A Telescope</h3>
              <div className="flex justify-between">
                <span className='text-xs text-slate-400'>34k views  ·  5 months ago</span>
                <span className='text-xs text-right text-slate-400'>Gussie French</span>
              </div>
            </li>
            <li className="relative">
              <img src={cardImg2} />
              <span className="vaqt absolute top-28 text-slate-100 bg-slate-900 opacity-70 px-1 rounded-xl right-4">4:15</span>
              <h3 className="font-medium">Dude You Re Getting A Telescope</h3>
              <div className="flex justify-between">
                <span className='text-xs text-slate-400'>34k views  ·  5 months ago</span>
                <span className='text-xs text-right text-slate-400'>Gussie French</span>
              </div>
            </li>
            <li className="relative">
              <img src={cardImg2} />
              <span className="vaqt absolute top-28 text-slate-100 bg-slate-900 opacity-70 px-1 rounded-xl right-4">4:15</span>
              <h3 className="font-medium">Dude You Re Getting A Telescope</h3>
              <div className="flex justify-between">
                <span className='text-xs text-slate-400'>34k views  ·  5 months ago</span>
                <span className='text-xs text-right text-slate-400'>Gussie French</span>
              </div>
            </li>


          </ul>

          <div className='cards-title flex justify-between items-center mb-8 pr-20'>
            <div className='flex justify-between items-center gap-x-5'>
              <img src={titleImg} />
              <h1 className='text-2xl font-medium'>Food & Drink</h1>
            </div>
            <div className='flex justify-between items-center gap-x-2'>
              <img src={leftBtn} />
              <img src={rightBtn} />
            </div>
          </div>
          <ul className='flex gap-x-10'>
            <li className='relative'>
              <img src={cardImg} />
              <span className="vaqt absolute top-28 text-slate-100 bg-slate-900 opacity-70 px-1 rounded-xl right-4">4:15</span>
              <h3 className="font-medium">A Brief History Of Creation</h3>
              <div className="flex justify-between">
                <span className='text-xs text-slate-400'>80k views  ·  3 days ago</span>
                <span className='text-xs text-right text-slate-400'>Dollie Blair</span>
              </div>
            </li>
            <li className='relative'>
              <img src={cardImg} />
              <span className="vaqt absolute top-28 text-slate-100 bg-slate-900 opacity-70 px-1 rounded-xl right-4">4:15</span>
              <h3 className="font-medium">A Brief History Of Creation</h3>
              <div className="flex justify-between">
                <span className='text-xs text-slate-400'>80k views  ·  3 days ago</span>
                <span className='text-xs text-right text-slate-400'>Dollie Blair</span>
              </div>
            </li>
            <li className='relative'>
              <img src={cardImg} />
              <span className="vaqt absolute top-28 text-slate-100 bg-slate-900 opacity-70 px-1 rounded-xl right-4">4:15</span>
              <h3 className="font-medium">A Brief History Of Creation</h3>
              <div className="flex justify-between">
                <span className='text-xs text-slate-400'>80k views  ·  3 days ago</span>
                <span className='text-xs text-right text-slate-400'>Dollie Blair</span>
              </div>
            </li>
            <li className='relative'>
              <img src={cardImg} />
              <span className="vaqt absolute top-28 text-slate-100 bg-slate-900 opacity-70 px-1 rounded-xl right-4">4:15</span>
              <h3 className="font-medium">A Brief History Of Creation</h3>
              <div className="flex justify-between">
                <span className='text-xs text-slate-400'>80k views  ·  3 days ago</span>
                <span className='text-xs text-right text-slate-400'>Dollie Blair</span>
              </div>
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;









