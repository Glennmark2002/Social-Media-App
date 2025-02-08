import { Link } from "react-router-dom";
import Theme from "./Theme";


function Header() {
  return (
    <div className='navbar bg-base-100 fixed border-b-2 border-base-200'>
			<div className='navbar-start'>
				<Link to='' className='btn btn-ghost text-2xl font-bold'> PostBook </Link>		
			</div>
			<div className='navbar-center hidden lg:flex'>
				<button className='btn btn-ghost'> Post Something </button>
				<button className='btn btn-ghost'> Friends </button>
			</div>
			<div className='navbar-end'>
				<Theme />
				<div className='dropdown dropdown-end'>

				</div>

			</div>
    </div>
  );
}

export default Header;
