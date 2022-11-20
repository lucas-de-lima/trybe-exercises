import React from 'react'
import PropTypes from 'prop-types'
import './App.css';

function App(props) {
  const {} = props

  return (
    <div className='App'>
      <div className='App-header'>
        <form action="">
        <div className='form-info'>
          <label htmlFor="input-name">
          <input type="text" name="name" placeholder='Seu Nome' id="input-name"/>
          </label>

          <label htmlFor="">
          <input type="number" name="age" placeholder='Sua idade' id="input-age"/>
          </label>

          <label htmlFor="">
          <input type="text" name="city" placeholder='Sua Cidade' id="input-city"/>
          </label>
        </div>

          <div className='radios-btn'>
            <label htmlFor="option-01">
              <input type="radio" name="" id="option-01" />Fundamentos
            </label>
            <label htmlFor="option-02">
              <input type="radio" name="" id="option-02" />Front-end
            </label>
            <label htmlFor="option-03">
              <input type="radio" name="" id="option-03" />Back-end
            </label>
            <label htmlFor="option-04">
              <input type="radio" name="" id="option-04" />Ciência da Computação
            </label>
          </div>
          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  )
}

App.propTypes = {

}

export default App
