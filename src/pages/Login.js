import React, {useState} from 'react';

import OwnApi from '../apis/OwnApi';
import {HandleLoginError} from '../functions/HandleError';
import Globals from '../functions/Globals';

import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import Button from '../components/Button/Button'
import Messagebox from '../components/MessageBox/MessageBox'

const pageConst = Globals.pageConst;
const breadcrumbData = [
    {
        name: 'Login',
        link: pageConst
    }
];

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const onSubmit = async (e) => {
        setMessage('');
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
            window.history.pushState({}, '', `${pageConst}/overview`);
            window.dispatchEvent(navEvent);
        } else {
            if (response.data !== undefined && response.data.auth === 'failed') {
                setMessage('Gebruikersnaam of wachtwoord incorrect');
            }
            console.log(response.data);

            HandleLoginError(response);
        }
    }

    return (
        <React.Fragment>
            <div className='hor-center flexparent'>
                <div className='flex-block'>
                    <Breadcrumb data={breadcrumbData} className='breadCrumbItem'/>

                    <Messagebox>{message}</Messagebox>
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