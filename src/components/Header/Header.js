import logo from '../../images/Black.png';
import menu from '../../images/Combined Shape.svg';
import combined from '../../images/Combined-Shape.svg';
import clip from '../../images/phone-18.svg';
import dd from '../../images/Combined Shape (1).svg';
import user from '../../images/Userpic.png';
import lupa from '../../images/Shape.svg';
import { Link } from 'react-router-dom';

function Header(favourits) {
  return (
    <header className="header flex justify-between items-center">
      <div className="flex">
        <div className="header__left">
          <img style={{ width: 20 }} src={menu} alt="menu" />
          <Link to={`/`}>
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className="relative">
          <input type="text" placeholder="Search" style={{ width: 730 }} className="ml-16 rounded-3xl border-solid border-0 bg-slate-100 py-2 px-4 " />
          <img className="absolute top-3 right-5" src={lupa} />
        </div>
      </div>
      <div className="header__icons flex gap-x-12 items-center relative">
        <img src={clip} />
        <img src={dd} />
        <img src={combined} /><span className="absolute top-0 right-20 bg-red-500 px-1 rounded-full text-white ">{favourits.favourits.length}</span>
        
        <Link to={`/login`}>
          <img src={user} />
        </Link>
      </div>
    </header>
  )
}

export default Header;