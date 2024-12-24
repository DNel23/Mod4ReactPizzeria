import React, { useState } from 'react'

const Register = () => {
    const [email, setEmail] = useState("")
    const [pw, setPw] = useState("")
    const [pwok, setPwok] = useState("")
    const [error, setError] =  useState(false)

    const validarDatos = (e) => {
        e.preventDefault()
        if(email === '' || pw === '') {
            setError(true)
            return
        } else if (pwok != pw || pw.length < 6) {
            setError(true)
            return
        }
         setError(false)
    }

  return (
    <form onSubmit={validarDatos}> 
        <h1></h1>
        <article>
            {error ? <p>Todos los campos son Obligatorios / Contraseña no coindice</p> : null}
            <label className='lblRegistro'>Email </label>
            <input 
                type="text"
                name="email"
                className='txtRegistro' 
                onChange={(e) => setEmail(e.target.value)} 
                value={email} 
                required />
        </article>
        <article>
            <label className='lblRegistro'>Password </label>
            <input 
                type="password"
                name="password" 
                className='txtRegistro' 
                onChange={(e) => setPw(e.target.value)} 
                value={pw} 
                required />
        </article>
        <article>
            <label className='lblRegistro'>Repetir Password </label>
            <input 
                type="password"
                name="passwordR" 
                className='txtRegistro' 
                onChange={(e) => setPwok(e.target.value)} 
                value={pwok} 
                required />
        </article>
        <button type="submit">Enviar</button>
    </form>
    
  )
}


export default Register
