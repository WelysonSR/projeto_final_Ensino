'use client'

import { loginAxios } from "@/util/axios"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { createHash } from 'crypto'
import { setCookie } from 'cookies-next'
import Link from "next/link";
import NavBar from "@/components/navbar"


export default function Login() {
  const [user, setName] = useState("") 
  const [password, setPassword] = useState("")
  const { push } = useRouter()

  const login = async (e) => {
    e.preventDefault()
    try {
      if (user.length < 3) {
        alert("Nome deve ter no mínimo 3 caracteres")
        return
      }
      if (password.length < 6) {
        alert("Digite uma senha com no minimo 6 caracteres")
        return
      }
      const result = await loginAxios({ user, password })
      
      if (result.user === user && result.password === createHash('md5').update(password).digest('hex')) {
        localStorage.setItem('user', JSON.stringify(result))
        setCookie('user', JSON.stringify(result))
        push("/home")
      }
    } catch (error) {
      alert(error.response.data.message)
    }
  }

  return (
    <section className="area-login">
      <NavBar/>
    <div className="login"> 
    <div>
      <img src="/img/logo.png" />
    </div>
    <form className="login-form">  
      <input
        type="text"
        name="nome"
        value={user}
        className="login-input"
        placeholder="nome de usuario"
        onChange={({ target }) => setName(target.value)}
      />
      <span className="login-span">
        Nome deve ter no mínimo 5 caracteres
      </span>
      <input
        type="password"
        name="senha"
        value={password}
        className="login-input"
        placeholder="sua senha"
        onChange={({ target }) => setPassword(target.value)}
      />
      <span className="login-span">
        Digite uma senha com no minimo 6 caracteres
      </span>
      <input
        type="submit"
        value="Entrar"
        className="login-input-submit"
        onClick={login}
      />
    </form>
    <Link id="a1" href="esqueceuSenha">Esqueceu sua senha?</Link>
    <p id="p1" >Ainda não tem uma conta?<Link href="/createUser">Criar conta</Link></p>
    </div>
    </section>
  )
}