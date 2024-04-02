import React, { useState } from 'react'

const ConditionalRender = () => {
  const [x] = useState(true)
  const [nome, setNome] = useState()
  return (
    <>
      <div>
        <h1>Isso será exibido</h1>
        {x && <p>Se x for verdadeiro</p>}
        {!x && <p>Isso aqui é falso</p>}
      </div>
      <div>
        {nome === 'João' ? (
          <div>
            <p>O nome é João</p>
          </div>
        ) : (
          <div>
            <p>O nome não é João</p>
          </div>
        )}
      </div>
    </>
  )
}

export default ConditionalRender