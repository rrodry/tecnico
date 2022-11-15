import { useEffect, useState } from "react"
import './landing.css'
import { useDispatch, useSelector } from "react-redux";

function Landing() {
  function validatorInputs(input){
    !input.name && alert("error")
    !input.pass && alert("error")
    !input.lastname && alert("error")

  }

  const [inputSend, setInputSend] = useState({
    name:"",
    pass:"",
    lastname:""
  })
  function validate(e){
    e.preventDefault()
    setInputSend(validatorInputs({
        ...inputSend,
        [e.target.name]: e.target.value
    }))
  }

  return (
    <div className="mainDv">
      <form onSubmit={ e => validate(e)}>
      <div className='formdv'>
        <h2>Formulario</h2>
        <div className="inputFill">
          <input placeholder='Nombre'  value={inputSend.name} onChange={ e => setInputSend({        ...inputSend,
        [e.target.name]: e.target.value})} name='name'/>
        </div>
        <div className="inputFill">
          <input placeholder='Apellido' value={inputSend.lastname} onChange={ e => setInputSend({        ...inputSend,
        [e.target.name]: e.target.value})} name='lastname'/>
        </div>
        <div className="inputFill">
          <input placeholder='Contraseña' value={inputSend.pass} onChange={ e => setInputSend({        ...inputSend,
        [e.target.name]: e.target.value})} name='pass'/>
        </div>
        <div className="inputSelect">
          <select className='selectRegion'>
            <option>
              Select Region
            </option>
          </select>
          <select>
            <option>
              Pais
            </option>
          </select>
        </div>
        <div className='buttonsDv'>
          <button className="buttonsSave" type='submit'>Guardar</button>
          <button className='buttonsCancel'>Cancelar</button>
        </div>
      </div>

      </form>
    </div>
  )
}

export default Landing;
