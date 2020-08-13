import React from 'react';
import CharacterItem from '../CharacterItem';
import './styles.css';

const {DisappearedLoading } = require('react-loadingg');

const CharacterList = ( {items, isLoading}: any ) => {
    return isLoading ? (
        <DisappearedLoading color='#093009' />
    ) : (
        <section id="list">
            {items.map((item: any) => (
                <CharacterItem key={item.char_id} item={item}></CharacterItem>
            ))}
        </section>
    )
}

export default CharacterList;