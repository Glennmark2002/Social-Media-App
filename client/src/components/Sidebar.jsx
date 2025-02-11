function Sidebar({ isSidebarOpen, toggleSidebar }) {

  const toggle = () => {
    toggleSidebar()
    document.getElementById('modal').showModal();
  }

  return (
    <>

      {isSidebarOpen && ( <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={toggleSidebar} /> )}
      <div className={`fixed inset-y-0 left-0 bg-base-100 z-50 w-1/2  transform ${ isSidebarOpen ? "translate-x-0" : "-translate-x-full" } transition-transform duration-300 ease-in-out lg:hidden`}>
        <div className="p-2">
          <button className="btn btn-ghost fixed top-1 right-1" onClick={toggleSidebar} aria-label="Close sidebar" >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
          <ul className="menu menu-vertical mt-8 gap-2">
            <li className='btn btn-ghost' onClick={toggle}> Post Something </li>
            <li className='btn btn-ghost'> Friends </li>
            <li className='btn btn-ghost' >Option 3</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Sidebar;