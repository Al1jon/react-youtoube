import React from 'react';
import CardList from '../../components/CardList/CardList';
import Seidbar from '../../components/Saidbar/Saidbar';

const Home = ({favourits, setFavourits}) => {
    return (
        <div>
            <main className="flex">
                <Seidbar favourits={favourits} setFavourits={setFavourits}/>
                <CardList />
            </main>
        </div>
    );
}

export default Home;





