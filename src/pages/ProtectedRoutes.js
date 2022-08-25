import { Outlet } from 'react-router'
import { useSelector } from 'react-redux'
import Register from './Register'

const Proctected = () => {
    const isLogin = useSelector(state => state.auth.isLoggedIn)
    return isLogin ? <Outlet /> : <Register />
}
export default Proctected