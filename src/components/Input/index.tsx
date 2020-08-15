import React, { useState, FormEvent } from 'react';
import './styles.css';

import {ReactComponent as SearchIcon} from '../../assets/search.svg';

interface Input {
    getInput(text: string): void;
}

const Input: React.FC<Input> = ({ getInput }) => {
    const [text, setText] = useState('');

    async function searchCharacter(e: FormEvent) {
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