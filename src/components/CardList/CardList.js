import cardImg2 from '../../images/Cover (1).png';
import titleImg from '../../images/Oval.png';
import leftBtn from '../../images/Left.svg';
import rightBtn from '../../images/Right.svg';
import Card from '../Card/Card'
import BigCard from '../Card/BigCard';
import oval2 from '../../images/Oval2.png'

function CardList() {
  return (
    <section className="cards overflow-hidden pl-11">
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
      <ul className='flex overflow-hidden gap-x-10'>
        <Card />
      </ul>

      <div className='cards-title flex justify-between items-center mt-8 mb-8 pr-20'>
        <h1 className='text-2xl font-medium'>Recommended</h1>
        <div className='flex justify-between items-center gap-x-2'>
          <img src={leftBtn} />
          <img src={rightBtn} />
        </div>
      </div>
      <ul className='flex overflow-hidden gap-x-10 my-12'>
        <BigCard />
      </ul>

      <div className='cards-title flex justify-between items-center mb-8 pr-20'>
        <div className='flex justify-between items-center gap-x-5'>
          <img src={oval2} />
          <h1 className='text-2xl font-medium'>Music & Dance</h1>
        </div>
        <div className='flex justify-between items-center gap-x-2'>
          <img src={leftBtn} />
          <img src={rightBtn} />
        </div>
      </div>
      <ul className='flex overflow-hidden gap-x-10'>
        <Card />
      </ul>




      <div className='cards-title flex justify-between items-center mt-8 mb-8 pr-20'>
        <h1 className='text-2xl font-medium'>Recommended</h1>
        <div className='flex justify-between items-center gap-x-2'>
          <img src={leftBtn} />
          <img src={rightBtn} />
        </div>
      </div>
      <ul className='flex overflow-hidden gap-x-10 my-12'>
        <BigCard />
      </ul>

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
      <ul className='flex overflow-hidden gap-x-10'>
        <Card />
      </ul>      

    </section>
  )
}

export default CardList;