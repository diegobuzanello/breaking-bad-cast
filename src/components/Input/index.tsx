import React, { useState } from 'react';
import './styles.css';

import {ReactComponent as SearchIcon} from '../../assets/search.svg';

const Input = ({ getInput }: any[string]) => {
    const [text, setText] = useState('')

    async function searchCharacter(e: any) {
        e.preventDefault();

        setText(text);
        getInput(text);
    }

    return (
        <div className="input-block">
            <form onSubmit={searchCharacter}>
                <input
                    type='text'
                    className='form-control'
                    placeholder='Search character'
                    value={text}
                    onChange={(e) => { setText(e.target.value) }}
                    autoFocus
                />
                <button type="submit">
                    <SearchIcon />
                </button>
            </form>
            
        </div>
    );
}

export default Input;