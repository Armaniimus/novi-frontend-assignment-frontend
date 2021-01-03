import React, {useState} from 'react';
import OwnApi from '../apis/OwnApi';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const onSubmit = async (e) => {
        e.preventDefault();
        let data = new URLSearchParams();
        data.append('username', username);
        data.append('password', password);
        const response = await OwnApi.post('/login', data,
            {
                headers: { 'content-type': 'application/x-www-form-urlencoded' },
            }
        )

        console.log(response);        
    }

    return (
        <main className='container'>
            <h1>Login</h1>

            <form onSubmit={onSubmit}>
                <label htmlFor='login-username'>Username</label><br />
                <input type='txt' autoComplete='username' id='login-username' value={username} onChange={ e => {setUsername(e.target.value)} } />
                
                <br /><br />
                <label htmlFor='login-password'>Password</label><br />
                <input type='password' autoComplete='current-password' id='login-password' value={password} onChange={ e => {setPassword(e.target.value)} }/>

                <br /><br />
                <input type='submit'/>
                
                <br /><br />
                <br /><br />
            </form>
        </main>
    );
}

export default Login;