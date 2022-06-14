import React from 'react';
import Link from '../Link/Link';
import Globals from '../../functions/Globals';


import RawStyles from './Breadcrumb.module.css';

const pageConst = Globals.pageConst;

const Breadcrumb = ({data, className}) => {    
    const rawCrumbs = [];
    const lastItem = data.length-1;
    for ( let i=0; i<data.length; i++) {
        if (i < lastItem) {
            rawCrumbs[rawCrumbs.length] = <Link href={`${pageConst}/${data[i].link}`} className={className} >{data[i].name}</Link>;
            rawCrumbs[rawCrumbs.length] = <span> &gt; </span>; 
        }

        if (i === lastItem) {
            rawCrumbs[rawCrumbs.length] = <span>{data[i].name}</span>
        } 
    }

    let i = 0;
    const crumbs = rawCrumbs.map( (rawCrumb) => {
        return <React.Fragment key={i++}>{rawCrumb}</React.Fragment>;
    });

    return (
        <div className={RawStyles['breadcrumb-box'] + ' hor-center flexparent'}>
            <div className='flex-block'>
                {crumbs}
            </div>
        </div>
    );
}

export default Breadcrumb;