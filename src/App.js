import React, { useState, useEffect } from 'react'
import './App.css';
import { MainContent, Header } from './components/Main/MainStyle';
import StudentCard from './components/StudentCard/StudentCard';

function App() {

  const [students, setStudents] = useState(null)

  useEffect(() => {
    fetch("https://speck-events-api.herokuapp.com/api/user")
      .then(res => res.json())
      .then(
        (result) => {
          setStudents(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setStudents(null);
        }
      )
  }, [])


  return (
    <>
      <Header>Speck Academy 2021</Header>
      <MainContent>
        {students?.length > 0 &&
          students.map(value => {
            return (<StudentCard key={value.id} {...value} />);
          })}
      </MainContent>
    </>
  );
}

export default App;
