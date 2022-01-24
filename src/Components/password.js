import React, {useState} from 'react';
import { useDispatch } from 'react-redux'
import { addPassword } from '../actions/index.js';

function random(n) {
    return Math.floor(Math.random() * n)
}

function generatePassword() {
    const string = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '1234567890';
    const symbols = '!@#$%^&*()';

    const fullKeys = (string + numbers + symbols);
    const new_password = []
    let i = 0;
    while (i < 9) {
        new_password.push(fullKeys[random(fullKeys.length)])
        i++;
    }
    const no_commas_password = new_password.join('')
    return no_commas_password
}

function Password() {
    const [password, setPassword] = useState('p@$$w0rd')
    const [name, setName] = useState('')
    
    const dispatch = useDispatch()

    return (
        <div>
            <div>
                <input 
                onChange={(e) => setName(e.target.value)}
                value={name}
                />
                <input 
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                />
            </div>
            <div>
                <button onClick={(e) => {
                    setPassword(generatePassword())
                }} >Generate</button>
            </div>
            <div>
                <button onClick={(e) => {
                    dispatch(addPassword(name, password))
                }}>Save</button>
            </div>
        </div>
    )
}
export default Password;