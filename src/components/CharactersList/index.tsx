import React from 'react';
import CharacterItem from '../CharacterItem';
import './styles.css';

import {PropsItem} from '../CharacterItem';
import {DisappearedLoading} from 'react-loadingg';

interface Props {
    isLoading: boolean;
    items: PropsItem[];
}

const CharacterList: React.FC<Props> = ({ isLoading, items }) => {
    return isLoading ? (
        <DisappearedLoading color='#093009' />
    ) : (
            <section id="list">
                {items.map(item => {
                    return <CharacterItem key={item.char_id} item={item}></CharacterItem>
                })}
            </section>
        )
}

export default CharacterList;