import React, {useEffect, useState} from 'react';
import OwnApi from '../apis/OwnApi';
import {HandleApiError} from '../functions/HandleError';

import Breadcrumb from '../components/Breadcrumb';
import OverviewTable from '../components/OverviewTable';
import '../css/overview.css';

const breadcrumbData = [
    {
        name: 'Overview',
        link: ''
    },
]

const Overview = ({token}) => {
    const [term, setTerm] = useState('');
    const [data, setData] = useState({});
    const [renderedData, setRenderedData] = useState(<React.Fragment>Loading...</React.Fragment>);

    const onFormSubmit = (e) => {
        e.preventDefault();
        console.log(term);
    }

    useEffect( () => {
        const request = async () => {
            let requestData = new URLSearchParams();
            requestData.append('token', token);
            const response = await OwnApi.post('/overview', requestData);

            if (response.status === 200 && response.data.status === 'success') {
                setData(response.data);
            } else {
                HandleApiError(response);
            }
        }

        request();
    }, [setData, token]);

    useEffect( () => {        
        if (data.status === 'success') {   
            if (data.songInfo !== undefined) {
                setRenderedData( <OverviewTable data={data.songInfo} />);
            } else {
                console.error('incorectdata gained', data);
            }
        }
    }, [data]);

    return (
        <React.Fragment>
            <div className='hor-center flexparent'>
                <div className='flex-block'>
                    <Breadcrumb data={breadcrumbData} className='breadCrumbItem'/>

                    <form onSubmit={ e => { onFormSubmit(e) }}>
                        <input type='search' value={term} onChange={ (e) => setTerm(e.target.value) } />
                        <input type='submit' value='search'/>
                    </form>
                    
                    {renderedData}
                </div>
            </div>
        </React.Fragment>
    );
}
export default Overview;