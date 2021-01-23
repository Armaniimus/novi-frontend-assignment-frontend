import React, {useEffect, useState} from 'react';
import Link from './components/Link';
import './css/header.css';

const noLoginRender = () => {
    return (
        <header>
            <nav className='header-menu row'>
                <div className='nav-item col-auto'>
                    <Link href='/' className='nav-link'>Login</Link>
                </div>
            </nav>
        </header>
    );
}

const userRender = () => {
    return (
        <header>
            <nav className='header-menu row'>
                <div className='nav-item col-auto'>
                    <Link href='/' className='nav-link'>Overview</Link>
                </div>
            </nav>

            {/* <button>logout</button> */}
        </header>
    );
}

const adminRender = () => {
    return (
        <header>
            <nav className='header-menu row'>
                <div className='nav-item col-auto'>
                    <Link href='/overview' className='nav-link'>Overview</Link>
                    <Link href='/accountbeheer' className='nav-link'>Account Beheer</Link>
                    <Link href='/liedbeheer' className='nav-link'>Lied Beheer</Link>
                </div>
            </nav>

            {/* <button>logout</button> */}
        </header>
    );
}

const getRenderedHeader = (accountLvl) => {
    if      (accountLvl === 0)  { return noLoginRender();   } 
    else if (accountLvl === 1)  { return userRender();      } 
    else if (accountLvl === 2)  { return adminRender();     } 
    else                        { return <React.Fragment/>  }
}


const Header = ({accountLvl}) => {
    const [renderedElement, setRenderedElement] = useState( <React.Fragment/> );

    useEffect( () => {
        setRenderedElement( 
            getRenderedHeader(accountLvl) 
        );
    }, [accountLvl]);

    return renderedElement;
}

export default Header;
