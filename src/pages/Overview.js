import React, {useEffect, useState} from 'react';
import OwnApi from '../apis/OwnApi';
import Breadcrumb from '../components/Breadcrumb';
import OverviewTable from '../components/OverviewTable';
import '../css/overview.css';

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
            }
        }

        request();
    }, [setData, token]);

    useEffect( () => {        
        if (data.status === 'success') {    
            setRenderedData(
                <React.Fragment>
                    <form onSubmit={ e => { onFormSubmit(e) }}>
                        <input type='search' value={term} onChange={ (e) => setTerm(e.target.value) } />
                        <input type='submit' value='search'/>
                    </form>
                    <OverviewTable data={data.songinfo} />
                </React.Fragment>
            );
        }
    }, [data]);
    
    const breadcrumbData = [
        {
            name: 'Overview',
            link: ''
        },
        {
            name: 'Item',
            link: 'Overview/item'
        }
    ]

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
export default Overview;