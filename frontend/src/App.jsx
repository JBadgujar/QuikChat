import React, { useEffect } from 'react'
import Navbar from './components/Navbar.jsx'
import { Routes, Route, Navigate } from 'react-router-dom'
import { SignUpPage } from './pages/SignUpPage.jsx'
import { HomePage } from './pages/HomePage.jsx'
import { LoginPage } from './pages/LoginPage.jsx'
import { ProfilePage } from './pages/ProfilePage.jsx'
import { SettingsPage } from './pages/SettingsPage.jsx'
import { useAuthStore } from './store/useAuthStore.js'
import {Loader} from "lucide-react"
import { Toaster } from "react-hot-toast";
import { useThemeStore } from './store/useThemeStore.js'
const App = () => {
  const {authUser, checkAuth, isCheckingAuth, onlineUsers } = useAuthStore();
  
  const {theme} = useThemeStore();
  useEffect(() => {
    checkAuth()
  }, [checkAuth]);
  
  // console.log({onlineUsers});
  if(isCheckingAuth && !authUser){
    return(
      <div className='flex items-center justify-center h-screen'>
        <Loader className="size-10 animate-spin" />
      </div>
    )
  }

  return (
    <div data-theme={theme} className="overflow-y-auto max-h-screen">
      <Navbar />
      <Routes>
        <Route path='/' element={authUser ? <HomePage/> : <Navigate to={'/login'} /> }  />
        <Route path='/signup' element={ !authUser ? <SignUpPage/>: <Navigate to={'/'} />} />
        <Route path='/login' element={!authUser ? <LoginPage/>: <Navigate to={'/'} />} />
        <Route path='/profile' element={<ProfilePage/>} />
        <Route path='/settings' element={authUser ? <SettingsPage/>: <Navigate to={'/login'}/>  } />
      </Routes>
      <Toaster />
    </div>
  )
}

export default App