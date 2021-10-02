import React from 'react';
import MainContent from './MainContent';
import Social from './Social';

const Header = () => {
    return (
        <div className="row">
            <div className="col-md-2 border">
                <Social></Social>
            </div>
            <div className="col-md-10 border mt-5 pt-5">
                <MainContent></MainContent>
            </div>
        </div>
    );
};

export default Header;