import { Outlet } from 'react-router-dom'
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"

function Layout() {
  return (
    <div className='min-h-screen flex flex-col'>
      <Header/>
       <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout