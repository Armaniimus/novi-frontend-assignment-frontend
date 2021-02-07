import React, {useState} from 'react';

import OwnApi from '../apis/OwnApi';
import {HandleLoginError} from '../functions/HandleError';
import Globals from '../functions/Globals';

import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import Button from '../components/Button/Button'

const breadcrumbData = [
    {
        name: 'Login',
        link: ''
    }
];

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const onSubmit = async (e) => {
        e.preventDefault();
        let requestData = new URLSearchParams();
        requestData.append('username', username);
        requestData.append('password', password);
        const response = await OwnApi.post('/login', requestData);

        if (response.status === 200 && response.data.status === 'success') {
            Globals.setToken(response.data.token);
            
            if (response.data.role === 'user') {
                Globals.setAccountLvl(1);
            } else if (response.data.role === 'admin') {
                Globals.setAccountLvl(2);
            }

            Globals.reload();
            const navEvent = new PopStateEvent('popstate');
            window.history.pushState({}, '', '/overview');
            window.dispatchEvent(navEvent);
        } else {
            HandleLoginError(response);
        }
    }

    return (
        <React.Fragment>
            <div className='hor-center flexparent'>
                <div className='flex-block'>
                    <Breadcrumb data={breadcrumbData} className='breadCrumbItem'/>

                    <form onSubmit={onSubmit}>
                        <label htmlFor='login-username'>Gebruikersnaam</label><br />
                        <input type='text' autoComplete='username' id='login-username' value={username} onChange={ e => {setUsername(e.target.value)} } />
                        
                        <br /><br />
                        <label htmlFor='login-password'>Wachtwoord</label><br />
                        <input type='password' autoComplete='current-password' id='login-password' value={password} onChange={ e => {setPassword(e.target.value)} }/>

                        <br /><br />
                        <Button className='info' type='submit'>Login</Button>
                        
                        <br /><br />
                        <br /><br />
                    </form>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Login;