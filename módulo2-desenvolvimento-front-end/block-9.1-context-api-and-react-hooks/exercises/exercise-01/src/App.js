import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './App.css';

function App() {
  const [name, setName] = useState('')
  const [age, setage] = useState(0)
  const [city, setCity] = useState('')
  const [module, setModule] = useState('');

  return (
    <div className='App'>
      <div className='App-header'>
        <form action="">
        <div className='form-info'>
          <label htmlFor="input-name">
          <input 
          type="text" 
          name="name"
          value={name} 
          placeholder='Seu Nome' 
          id="input-name"
          onChange={ ({target})=> setName(target.value) }
          />
          </label>

          <label htmlFor="input-age">
          <input 
          type="number" 
          name="age" 
          value={age}
          placeholder='Sua idade' 
          id="input-age"
          onChange={ ({target})=> setage(target.value) }
          />
          
          </label>

          <label htmlFor="input-city">
          <input 
          type="text" 
          name="city" 
          value={city}
          placeholder='Sua Cidade' 
          id="input-city"
          onChange={ ({target})=> setCity(target.value) }
          />
          </label>
        </div>

          <div className='radios-btn'>
            <label htmlFor="option-01">Fundamentos
              <input 
              type="radio" 
              name="option-01" 
              id="option-01"
              value="Fundamentos"
              checked={module === "Fundamentos"}
              onChange={({ target }) => setModule(target.value)} 
              />
            </label>
            <label htmlFor="option-02">Front-end
              <input 
              type="radio" 
              name="option-02" 
              id="option-02" 
              value="Front-end"
              checked={module === "Front-end"}
              onChange={({ target }) => setModule(target.value)} 
              />
            </label>
            <label htmlFor="option-03">Back-end
              <input 
              type="radio" 
              name="option-03" 
              id="option-03"
              value="Back-end"
              checked={module === "Back-end"}
              onChange={({ target }) => setModule(target.value)}
               />
            </label>
            <label htmlFor="option-04">Ciência da Computação
              <input 
              type="radio" 
              name="option-04" 
              id="option-04" 
              value="Ciência da Computação"
              checked={module === "Ciência da Computação"}
              onChange={({ target }) => setModule(target.value)} 
              />
            </label>
          </div>
          <button 
          type="submit"
          onClick={(event) => {
          event.preventDefault();
          console.log('Click!');
        }}
          >
          Enviar
          </button>
        </form>
      </div>
    </div>
  )
}

App.propTypes = {

}

export default App
