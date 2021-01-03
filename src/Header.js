import React from 'react';
import Link from './components/Link';

const Header = () => {
    return (
        <header>
            <nav className='header-menu row'>
                <div className='nav-item col-auto'>
                    <Link href='/' className='nav-link'>Home</Link>
                </div>
                <div className='nav-item'>
                    <Link href='/overview' className='nav-link'>Overview</Link>
                </div>
            </nav>
        </header>
    );
}

export default Header;
