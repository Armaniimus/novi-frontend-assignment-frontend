import React from 'react';
import Breadcrumb from '../components/Breadcrumb';

const breadcrumbData = [
    {
        name: 'Account Beheer',
        link: ''
    }
];

const AccountBeheer = () => {
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

export default AccountBeheer;