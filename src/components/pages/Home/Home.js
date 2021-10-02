import React from 'react';
import About from '../../HomeComponents/About/About';
import Header from '../../HomeComponents/Header/Header';
import MySkills from '../../HomeComponents/MySkills/MySkills';
import Navbar from '../../SheardComponenets/Nav/Navbar';

const Home = () => {
    return (
        <main className="container-fluid">
            <Navbar></Navbar>
            <Header></Header>
            <About></About>
            <MySkills></MySkills>
        </main>
    );
};

export default Home;