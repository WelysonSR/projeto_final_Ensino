'use client'

import NavBar from "@/components/navbar";
import { createUserAxios } from "@/util/axios";
import { useState } from "react";

export default function CreateUser() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastNamee] = useState('')
  const [password, setPassword] = useState('')
  const [password1, setPassword1] = useState('')
  const [email, setEmail] = useState('')
  const [user, setUser] = useState('')

  const createUser = async () => {
    try {
      const newUser = { firstName, lastName, email, password, user }
      if (password <= 5) return alert('Senha deve ter 6 caracteres')
      if (password !== password1) return alert('Senhas devem ser iguais')
      const result = await createUserAxios(newUser)
      if (result) alert(result)
    } catch (error) {
      alert(error.response.data.message)
    }
  }

  return (
    <section className="area-create">
      <NavBar />      
      <div className="create">
          <h3 className="titulo" >Cadastrar</h3>
           
      <form className="creatUser-form">
      <input
          type="text"
          value={email}
          name="email"
          className="create-input"
          placeholder="Endereço de e-mail"
          onChange={({ target }) => setEmail(target.value)}
          required
        />
        
        <input
          type="text"
          value={firstName}
          name="firstName"
          className="create-input"
          placeholder="Nome"
          onChange={({ target }) => setFirstName(target.value)}
          required
        />
        <input
          type="text"
          value={lastName}
          name="lastName"
          className="create-input"
          placeholder="Sobrenome"
          onChange={({ target }) => setLastNamee(target.value)}
          required
        />
        
        <input
          type="text"
          value={user}
          name="user"
          className="create-input"
          placeholder="Usuário"
          onChange={({ target }) => setUser(target.value)}
          required
        />

        <input
          type="password"
          value={password}
          name="password"
          className="create-input"
          placeholder="Senha"
          onChange={({ target }) => setPassword(target.value)}
          required
        />
        <input
          type="password"
          value={password1}
          name="password1"
          className="create-input"
          placeholder="Confirma senha"
          onChange={({ target }) => setPassword1(target.value)}
          required
        />
        <input
          type="button"
          value="Cadastrar"
          onClick={createUser}
          className="create-button"
        />
      </form>
      </div>
    </section>
  )
}