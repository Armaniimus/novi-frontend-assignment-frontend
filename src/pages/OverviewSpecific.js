import React, {useEffect} from 'react';
import Breadcrumb from '../components/Breadcrumb';

const breadcrumbData = [
    {
        name: 'Overview',
        link: '/overview'
    }, 
    {
        name: 'item',
        link: ''
    }
];

const OverviewSpecific = ({urlVars}) => {
    useEffect( () => {
        console.log(urlVars);
    }, [urlVars]);

    return (
        <React.Fragment>
            <div className='hor-center flexparent'>
                <div className='flex-block'>
                    <div className='hor-center flexparent'>
                        <div className='flex-block'>
                            <Breadcrumb data={breadcrumbData} className='breadCrumbItem'/>
                        </div>
                    </div>

                    {/* content */}
                </div>
            </div>
        </React.Fragment>
    );
}

export default OverviewSpecific;