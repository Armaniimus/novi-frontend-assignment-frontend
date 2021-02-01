import React, {useEffect, useState} from 'react';
import Globals from '../../functions/Globals';

import Link from '../Link/Link';
import RawStyles from './Header.module.css';

const noLoginRender = () => {
    return <React.Fragment />;
}

const userRender = () => {
    return (
        <nav className={RawStyles['nav-list']}>
            <Link href='/' className='nav-link'>Overview</Link>
            <Link href='/logout' className='nav-link logout-link'>Logout</Link>
        </nav>
    );
}

const adminRender = () => {
    return (
        <nav className={RawStyles['nav-list']}>
            <Link href='/overview' className='nav-link'>Overview</Link>
            <Link href='/accountbeheer' className='nav-link'> Account Beheer</Link>
            <Link href='/liedbeheer' className='nav-link'>Lied Beheer</Link>
            <Link href='/logout' className='nav-link logout-link'>Logout</Link>
        </nav>
    );
}

const getRenderedHeader = (accountLvl) => {
    if      (accountLvl === 0)  { return noLoginRender();   } 
    else if (accountLvl === 1)  { return userRender();      } 
    else if (accountLvl === 2)  { return adminRender();     } 
    else                        { return <React.Fragment/>  }
}


const Header = () => {
    const accountLvl = Globals.getAccountLvl();

    const [renderedElement, setRenderedElement] = useState( <React.Fragment/> );

    useEffect( () => {
        setRenderedElement( 
            getRenderedHeader(accountLvl) 
        );
    }, [accountLvl]);

    return (
        <header>
            <h1 className={RawStyles['nav-logo']}>
                <Link href='/' className='nav-link'>ZingApp</Link>
            </h1>
            {renderedElement}
        </header>
    )
}

export default Header;
