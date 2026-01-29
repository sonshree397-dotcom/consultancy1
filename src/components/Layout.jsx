import Navbar from './Navbar'
import Topbar from './Topbar'

function Layout({ children, onOpenModal }) {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Topbar />
      <Navbar onOpenModal={onOpenModal} />
      {children}
    </div>
  )
}

export default Layout
