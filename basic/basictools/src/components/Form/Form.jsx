import React, { useState } from 'react'
var teste = 8
 const Form = () => {
  const handleMyEvent = (e) =>{
    console.log(e)
    console.log("Ativou o evento!")
  }

  const [x, setX] = useState(true)
  const renderButton = (x) => {
    if(x){
      return <h1>Rederizou bonitinho</h1>
    }else{
      return <h1>Rederizou bonitinho</h1>
    }
  }
  return (

    <>
        <div>
      <div>
        <button onClick={handleMyEvent}>Clique aqui</button>
      </div>
      <div>
        <button onClick={()=>{console.log('Yes!Apertou em mim.')}}>Clique em mim também!</button>
      </div>
        <div>
           <button onClick={() =>{
            if (true){
              console.log("Isso não deveria acontecer!")
            }
          }}>Será que você clicaria aqui?</button>
        </div>
        <div>
          <h1>{x ? 'Redenrizou' : 'Deu ruim'}</h1>
          <button onClick={() => setX(!x)}>Valida pepino</button> 
        </div>
        </div>

        <div>
          <strong>Valor:</strong>{teste}
          <button onClick={() =>{ teste = 12; console.log(teste)}}>Aperte e mude o valor</button>
          <strong>Valor:</strong>{teste}
        </div>
    </>
  )
}

export default Form