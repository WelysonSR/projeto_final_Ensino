'use client'

import NavBar from "@/components/navbar";
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
      const response = await sendEmail(result.email, result.user)
      if(response) alert('Email enviado com sucesso! Verifique o spam.')
    } catch (error) {
      if(error.response)
        alert(error.response.data.message)
    }
  }

  return (
    <section className="area-recuperar-senha">
      <NavBar/>
      <div className="recuperar">
        <div className="recuperar-img">
        <img src="/img/logo.png" alt="logo" />
        </div>
      
      <p id="p2">Enviaremos um e-mail de recuperação de senha para o e-mail cadastrado.</p>
      <form className="recuperar-senha">
        <input
          type="text"
          name="nome"
          className="recuperar-input"
          value={user}
          placeholder="nome de usuario"
          onChange={({ target }) => setName(target.value)}
        />
        <span className="recuperar-span">Digite seu usuário</span>
        <input type="submit" className="recuperar-botao" value="Enviar" onClick={handleSubmit} />
      </form>
      <p id="p3">Já tem uma conta?<Link href="/login">Fazer login</Link></p>
      </div>
    </section>
  )
}