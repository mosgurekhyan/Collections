import { Outlet, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'

import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import ROUTES from '../routes/routes'

function Wrapper() {
  const { pathname } = useLocation()
  const [isOnline, setIsOnline] = useState(navigator.onLine)

  useEffect(() => {
    window.addEventListener('online', handleOnline)
    window.addEventListener('offline', handleOffline)

    return () => {
      window.removeEventListener('online', handleOnline)
      window.removeEventListener('offline', handleOffline)
    }
  }, [])

  const handleOnline = () => {
    setIsOnline(true)
  }

  const handleOffline = () => {
    setIsOnline(false)
  }

  return (
    <div className={`${isOnline ? '' : 'mainWrapper'}`}>
      {isOnline ? (
        <>
          <Navbar/>
          <Outlet/>
          {
            !pathname.startsWith(ROUTES.ADMIN) && <Footer/>
          }
        </>
      ) : (
        <p className='internetLost'>Your internet connection is lost.</p>
      )}
    </div>
  )
}

export default Wrapper