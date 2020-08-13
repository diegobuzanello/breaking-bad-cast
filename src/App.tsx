import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Header from './components/Header';
import Input from './components/Input';
import CharacterList from './components/CharactersList';


const App = () => {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true);
  const [character, setCharacter] = useState('')

  const url = 'https://www.breakingbadapi.com/api/';

  useEffect(() => {
    const fetchItems = async () => {
      setIsLoading(true)

        await axios(`${url}characters?name=${character}`)
        .then(function (response: any) {

          setItems(response.data);
        });

      setIsLoading(false)
    }

    
    fetchItems()
  }, [character])

  return (
    <>
      <Header />
      <Input getInput={(q: string) => setCharacter(q)}/>
      <CharacterList isLoading={isLoading} items={items} />
    </>
  );
}

export default App;
