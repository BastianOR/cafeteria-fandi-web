import { Outlet } from 'react-router-dom'
import Footer from './components/footer/footer'
import DesktopNav from './components/navbar/desktopnav'

export default function Index() {
  return (
    <>
    <div className="w-full flex px-1 py-4 xs:px-4 xs:py-4 lg:py-7 flex-col items-center">
      <div className="min-w-[300px] w-[90vw] max-w-[875px] min-h-screen bg-white flex flex-col items-center">
        <DesktopNav />
        <Outlet />
      </div>
    </div>
    <Footer />
    </>
  )
}