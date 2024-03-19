import React from 'react'

 const Form = () => {
  const handleMyEvent = (e) =>{
    console.log(e)
    console.log("Ativou o evento!")
  }
  const renderButton = (x) => {
    if(x){
      return <h1>Rederizou bonitinho</h1>
    }else{
      return <h1>Rederizou bonitinho</h1>
    }
  }
  return (
    <div>
      <div>
        <button onClick={handleMyEvent}>Clique aqui</button>
      </div>
      <div>
        <button onClick={()=>{console.log('Yes!Apertou em mim.')}}>Clique em mim também!</button>
        <div>
           <button onClick={() =>{
            if (true){
              console.log("Isso não deveria acontecer!")
            }
          }}>Será que você clicaria aqui?
           </button>
        </div>
        <div>
          {renderButton(true)}
          {renderButton(false)}
        </div>
      </div>
    </div>
  )
}

export default Form