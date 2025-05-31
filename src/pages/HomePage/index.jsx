import { useState, useEffect } from 'react';
import './style.css';
import { Joke } from '../components/Joke/joke';

export const HomePage = () => {
  const [jokes, setJokes] = useState(null);

  useEffect(() => {
    const fetchedJokes = async () => {
      const response = await fetch('http://localhost:4000/api/jokes');
      const responseData = await response.json();
      setJokes(responseData.data);
    };
    fetchedJokes();
  }, []);

  return (
    <>
      {jokes !== null ? (
        jokes.map((joke) => (
          <Joke
            key={joke.id}
            userAvatar={joke.avatar}
            userName={joke.name}
            text={joke.text}
            likes={joke.likes}
            dislikes={joke.dislikes}
          />
        ))
      ) : (
        <>Načítám data</>
      )}
    </>
  );
};
