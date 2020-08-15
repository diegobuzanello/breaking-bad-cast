import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Header from './components/Header';
import Input from './components/Input';
import CharacterList from './components/CharactersList';

const App = () => {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true);
  const [character, setCharacter] = useState('');

  const url = 'https://www.breakingbadapi.com/api/characters?name=';

  useEffect(() => {
    const fetchItems = async () => {
      setIsLoading(true)

        await axios(`${url + character}`)
        .then((response) => {

          setItems(response.data);
        });

      setIsLoading(false)
    }

    fetchItems()
  }, [character])

  return (
    <>
      <Header />
      <Input getInput={(text) => setCharacter(text)}/>
      <CharacterList isLoading={isLoading} items={items} />
    </>
  );
}

export default App;
