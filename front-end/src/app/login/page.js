'use client'
import { loginAxios } from "@/util/axios"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { createHash } from 'crypto'
import { setCookie } from 'cookies-next'


export default function Login() {
    const [user, setName] = useState("")
    const [password, setPassword] = useState("")
    const {push} = useRouter()

    const login = async (e)=>{
        e.preventDefault()
        if (user.length<5) {
            alert("Nome deve ter no mínimo 5 caracteres") 
            return 
        }
        if (password.length<6){
            alert("Digite uma senha com no minimo 6 caracteres")
            return
        }
        const result = await loginAxios({user, password})

        if (result.user === user && result.password === createHash('md5').update(password).digest('hex')){
            setCookie('user', JSON.stringify(result))
            push("/home")
        }else {
            alert("Usuário ou senha incorreto")
        }
    }

    return (
        <form id="form">
            <input onChange={({target})=>setName(target.value)} value={user} type="text" name="nome" placeholder="nome de usuario"/>
            <span class="span-required">Nome deve ter no mínimo 5 caracteres</span>
            <input onChange={({target})=>setPassword(target.value)} value={password} type="password" name="senha" placeholder="sua senha"/>
            <span class="span-required">Digite uma senha com no minimo 6 caracteres</span>
            <input onClick={login} type="submit" value="entrar"/>
        </form>
    )
}