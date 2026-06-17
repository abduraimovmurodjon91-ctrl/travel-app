import { onAuthStateChanged } from "firebase/auth"
import { useEffect, useState } from "react"
import { auth } from "../firebase"
import { Navigate } from "react-router-dom"

export const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<any>(null)
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        const unsub = onAuthStateChanged(auth, (u) => {
            setUser(u)
            setLoading(false)
        })
        return () => unsub()
    }, [])

    if (loading) return <h1>loading...</h1>

    if (user) {
        return <Navigate to="/" replace />
    }
    return children
}

export default ProtectedRoute