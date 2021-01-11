import React from 'react';
import Link from './Link';

const Breadcrumb = ({data, className}) => {
    // const links
    
    const comps = [];
    for ( let i=0; i<data.length; i++) {
        if (i === 0) {
            comps[comps.length] = <span>{data[i].name}</span>
        } 
        
        if (i > 0) {
            comps[comps.length] = <span> &gt; </span>; 
            comps[comps.length] = <Link href={data[i].link} className={className} >{data[i].name}</Link>;
        }
    }

    let i = 0;
    const crumbs = comps.map( (comp) => {
        return <React.Fragment key={i++}>{comp}</React.Fragment>;
    });

    return (
        <React.Fragment>
            {crumbs}
        </React.Fragment>
    );
}

export default Breadcrumb;