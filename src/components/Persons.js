import React, { useState } from 'react'

import Person from './Person'
import persons from '../data/persons'
function Persons() {
  const [show, setShow] = useState(true)
  return (
    <div>
      <button onClick={() => setShow(!show)}>Show</button>
      <div className="cards">
        {persons.map((person) => {
          return (
            <div>
              {show ? <Person key={person.id} {...person} /> : null}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Persons
