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
    <section>
      <NavBar />
      <h1>Create User</h1>
      <form className="cj-form">
        <input
          type="text"
          value={user}
          name="user"
          className="cj-input"
          placeholder="Usuario"
          onChange={({ target }) => setUser(target.value)}
          required
        />
        <input
          type="text"
          value={firstName}
          name="firstName"
          className="cj-input"
          placeholder="Nome"
          onChange={({ target }) => setFirstName(target.value)}
          required
        />
        <input
          type="text"
          value={lastName}
          name="lastName"
          className="cj-input"
          placeholder="Sobre nome"
          onChange={({ target }) => setLastNamee(target.value)}
          required
        />
        <input
          type="text"
          value={email}
          name="email"
          className="cj-input"
          placeholder="Emial"
          onChange={({ target }) => setEmail(target.value)}
          required
        />
        <input
          type="password"
          value={password}
          name="password"
          className="cj-input"
          placeholder="Senha"
          onChange={({ target }) => setPassword(target.value)}
          required
        />
        <input
          type="password"
          value={password1}
          name="password1"
          className="cj-input"
          placeholder="Confirma senha"
          onChange={({ target }) => setPassword1(target.value)}
          required
        />
        <input
          type="button"
          value="Cadastrar"
          onClick={createUser}
          className="cj-input-btn"
        />
      </form>
    </section>
  )
}