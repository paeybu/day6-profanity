import React, { useState } from 'react'
import axios from 'axios'

const Profanity = () => {
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')

  const BASE_URL =
    'https://cors-anywhere.herokuapp.com/https://www.purgomalum.com/service/json'
  const QUERY = '?text='

  const onKeyUp = e => {
    if (e.keyCode === 13) checkText()
  }

  const onChange = e => {
    setInput(e.target.value)
  }

  const checkText = async () => {
    const res = await axios.get(`${BASE_URL}${QUERY}${input}`)
    console.log(res)
    setOutput(res.data.result)
  }

  return (
    <div className="row">
      <div className="col s12">
        <h1>Profanity</h1>
        <div className="input-field">
          <input
            type="text"
            name="input"
            placeholder="Type something here..."
            onKeyUp={onKeyUp}
            value={input}
            onChange={onChange}
          />
          <label htmlFor="input">Input</label>
        </div>
        <input
          type="submit"
          value="Submit"
          className="btn"
          onClick={checkText}
        />
        <h3>Output:</h3>
        <input type="text" value={output} readOnly />
      </div>
    </div>
  )
}

export default Profanity
