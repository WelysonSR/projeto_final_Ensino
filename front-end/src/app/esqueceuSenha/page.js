'use client'

import { getUserAxios } from "@/util/axios";
import { sendEmail } from "@/util/sendEmail";
import Link from "next/link";
import { useState } from "react";

export default function EsqueceuSenha() {
  const [user, setName] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await getUserAxios({ user })
      if(!result) return alert('Usuário não encontrado!')
      const response = await sendEmail(result.email)
      if(response) alert('Email enviado com sucesso! Verifique o spam.')
    } catch (error) {
      if(error.response)
        alert(error.response.data.message)
    }
  }

  return (
    <section>
      <img src="/img/logo.png" width={80} alt="logo" />
      <p>Enviaremos um e-mail de recuperação de senha para o e-mail cadastrado.</p>
      <form>
        <input
          type="text"
          name="nome"
          value={user}
          placeholder="nome de usuario"
          onChange={({ target }) => setName(target.value)}
        />
        <span>Digite seu usuário</span>
        <input type="submit" value="Enviar" onClick={handleSubmit} />
      </form>
      <p>Já tem uma conta?<Link href="/login">Fazer login</Link></p>
    </section>
  )
}