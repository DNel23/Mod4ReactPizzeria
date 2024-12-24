import React , { useState } from 'react'

const Login = () => {
    const [email, setEmail] = useState("")
    const [pw, setPw] = useState("")

    const validarDatosLogin = (e) => {
        e.preventDefault()
        if(email === '' || pw === '') {
            alert("Faltan datos a completar")
            return
        } else if (pw.length < 6) {
            alert("Password con menor a 6 digitos")
            return
        }else{
            alert("Datos correctamente Ingresados")
        }
         
    }


  return (
    <form onSubmit={validarDatosLogin}> 
        <h1> Login </h1>
        <article>
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
        <button type="submit">Enviar</button>
    </form>
  )
}

export default Login
