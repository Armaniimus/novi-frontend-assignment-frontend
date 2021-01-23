import React from 'react';
import OwnApi from '../apis/OwnApi';
import {HandleApiError} from '../functions/HandleError';

import Breadcrumb from '../components/Breadcrumb';
import TableHeader from '../components/TableHeader';

const breadcrumbData = [
    {
        name: 'Lied Beheer',
        link: ''
    }
];

const LiedBeheer = () => {
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

export default LiedBeheer;