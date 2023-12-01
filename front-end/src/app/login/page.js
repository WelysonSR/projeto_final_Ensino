'use client'

import { loginAxios } from "@/util/axios"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { createHash } from 'crypto'
import { setCookie } from 'cookies-next'


export default function Login() {
  const [user, setName] = useState("")
  const [password, setPassword] = useState("")
  const { push } = useRouter()

  const login = async (e) => {
    e.preventDefault()
    if (user.length < 5) {
      alert("Nome deve ter no mínimo 5 caracteres")
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
    } else {
      alert("Usuário ou senha incorreto")
    }
  }

  return (
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
  )
}