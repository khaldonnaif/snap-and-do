import { Link } from "react-router-dom";
import Button from "../common/Button.jsx";

function Header() {
  return (
    <div className="bg-dark-blue w-full h-[72px] border border-slate flex items-center justify-between">
      <Link to="/" className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent font-bold mx-16 text-4xl">HaHaHub</Link>
      <div className="mx-16">
        <Link to="/About">
          <Button bgColor="bg-dark-blue" borderColor="border-purple-400" textColor="text-purple-400"> 
            <p className="font-bold">About</p>
          </Button>         
        </Link>
      </div>
    </div>
  );
}

export default Header;