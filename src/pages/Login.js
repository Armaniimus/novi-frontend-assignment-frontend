import React, {useState} from 'react';
import OwnApi from '../apis/OwnApi';
import Breadcrumb from '../components/Breadcrumb';

const Login = ({setGlobals}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const onSubmit = async (e) => {
        e.preventDefault();
        let requestData = new URLSearchParams();
        requestData.append('username', username);
        requestData.append('password', password);
        const response = await OwnApi.post('/login', requestData);

        if (response.status === 200 && response.data.status === 'success') {
            setGlobals.setToken(response.data.token);

            if (response.data.role === 'user') {
                setGlobals.setAccountLvl(1);
            } else if (response.data.role === 'admin') {
                setGlobals.setAccountLvl(2);
            }
        }
    }

    const breadcrumbData = [
        {
            name: 'Login',
            link: ''
        }
    ];

    return (
        <React.Fragment>
            <div className='hor-center flexparent'>
                <div className='flex-block'>
                    <div className='hor-center flexparent'>
                        <div className='flex-block'>
                            <Breadcrumb data={breadcrumbData} className='breadCrumbItem'/>
                        </div>
                    </div>

                    <form onSubmit={onSubmit}>
                        <label htmlFor='login-username'>Username</label><br />
                        <input type='text' autoComplete='username' id='login-username' value={username} onChange={ e => {setUsername(e.target.value)} } />
                        
                        <br /><br />
                        <label htmlFor='login-password'>Password</label><br />
                        <input type='password' autoComplete='current-password' id='login-password' value={password} onChange={ e => {setPassword(e.target.value)} }/>

                        <br /><br />
                        <input type='submit'/>
                        
                        <br /><br />
                        <br /><br />
                    </form>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Login;