'use client'

import { getUserAxios, updateUserAxios } from "@/util/axios"
import { useEffect, useState } from "react"

export default function Recuperar({ params }) {
    const [user, setUser] = useState()
    const [password, setPassword] = useState('')
    const [password1, setPassword1] = useState('')

    useEffect(() => {
        const fetchData = async () => {
            const user = params.user
            const result = await getUserAxios({ user })
            setUser(result)
        }

        fetchData()
    }, [])

    const atualizar = async () => {
        try {
            if (password !== password1) return alert('Senhas devem ser iguais')
            const result = await updateUserAxios(user.id, { ...user, password })      
            if (result) return alert(result)
        } catch (error) {
            alert(error.response.data.message)
        }
    }

    return (
        <form>
            <input
                type="password"
                name="password"
                value={password}
                onChange={({ target }) => setPassword(target.value)}
                placeholder="Insira uma nova senha"
            />
            <input
                type="password"
                name="password1"
                value={password1}
                onChange={({ target }) => setPassword1(target.value)}
                placeholder="Insira uma nova senha"
            />
            <input
                type="button"
                name="Enviar"
                value="Atualizar"
                onClick={atualizar}
            />
        </form>
    )
}