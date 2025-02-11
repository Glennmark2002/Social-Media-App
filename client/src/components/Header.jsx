import { useDispatch, useSelector } from "react-redux";
import { signOut } from "../redux/user/userSlice";
import { Link } from "react-router-dom";
import { useState } from "react";
import Splash from "./Splash";
import Theme from "./Theme";
import axios from "axios";
import SidebarButton from "./SidebarButton";
import Sidebar from "./Sidebar";
import PostModal from "./PostModal";

function Header() {

	const { currentUser } = useSelector(state => state.user);
	const [isSidebarOpen, setSidebarOpen] = useState(false);
	const [loading, setLoading] = useState(false);
	const dispatch = useDispatch();

	const handleSignout = async (e) => {

		try {
			setLoading(true);
			await axios.get('https://social-media-app-gje5.vercel.app/api/auth/signout');
			dispatch(signOut());
			setLoading(false);
			
		} catch (error) {
			console.log(error);
		}
	}

	const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);
	const toggleModal = () => document.getElementById('modal').showModal();
	
  return (
		<>
			{ loading && <Splash />}
			<Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
			<PostModal />

			<div className='navbar bg-base-100 fixed border-b-2 border-base-200'>
				<div className='navbar-start'>
					{currentUser && <SidebarButton toggleSidebar={toggleSidebar} /> }
					<Link to='' className='btn btn-ghost text-2xl font-bold'> PostBook </Link>		
				</div>
				<div className='navbar-center hidden lg:flex'>
					<button onClick={toggleModal} className='btn btn-ghost'> Post Something </button>
					<button className='btn btn-ghost'> Friends </button>
				</div>
				<div className='navbar-end'>
					<Theme />
					<div className='dropdown dropdown-end'>
						{ currentUser ? ( <img src={currentUser.picture} tabIndex={0} className='btn btn-circle avatar' /> ) : 
													( <Link to='/sign-in' className='btn btn-neutral text-sm' > Sign-in </Link>)
						}
						{ currentUser && 
							( <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
								<li><a>Profile</a></li>
								<li><a onClick={handleSignout}>Logout</a></li>
							</ul>)
						}
					</div>
				</div>
    	</div>
		</>	
  );
}

export default Header;
