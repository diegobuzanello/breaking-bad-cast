import React from 'react'
import './styles.css';

const CharacterItem = ( {item}: any ) => {
  return (
    <div className="profile">
        <img className="profile-picture" src={item.img} alt=""/>
        <div className="content">
          <p className="character-name" >{item.name} | {item.nickname}</p>
          <p className="character-birthday" >Birthday: {item.birthday}</p>
          <p className="character-seasons">Seasons: {item.appearance.length}</p>
        </div>
    </div>
  )
}

export default CharacterItem;