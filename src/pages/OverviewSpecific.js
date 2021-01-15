import React, {useEffect, useState} from 'react';
import OwnApi from '../apis/OwnApi';

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

const OverviewSpecific = ({urlVars, token}) => {
    const [data, setData] = useState({});
    const [renderedData, setRenderedData] = useState(<React.Fragment>Loading...</React.Fragment>);

    useEffect( () => {
        const request = async () => {
            let requestData = new URLSearchParams();
            requestData.append('token', token);
            const response = await OwnApi.post(`/overview/${urlVars.id}`, requestData);

            if (response.status === 200 && response.data.status === 'success') {
                setData(response.data);
            }
        }
        if (urlVars.id !== undefined) {
            request();
        }
    }, [setData, token, urlVars]);

    useEffect( () => {
        if (data.status === 'success') {
            setRenderedData(
                <React.Fragment>
                    <div>{data.songinfo.id}</div>
                    <div>{data.songinfo.number}</div>
                    <div>{data.songinfo.title}</div>
                    <div>{data.songinfo.songText}</div>
                </React.Fragment>
            );
        }
    }, [data, setRenderedData]);

    return (
        <React.Fragment>
            <div className='hor-center flexparent'>
                <div className='flex-block'>
                    <div className='hor-center flexparent'>
                        <div className='flex-block'>
                            <Breadcrumb data={breadcrumbData} className='breadCrumbItem'/>
                        </div>
                    </div>

                    {renderedData}
                </div>
            </div>
        </React.Fragment>
    );
}

export default OverviewSpecific;