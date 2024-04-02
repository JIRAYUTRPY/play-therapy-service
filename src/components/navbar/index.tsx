import "./style.css";
import Image from "next/image";
const Navbar = () => {
  return (
    <nav className="menu menu-1 mx-10 flex items-center  justify-between">
      <Image
        src={"/images/logo.gif"}
        alt="Logo"
        width={80}
        height={32}
        className=" rounded-full"
      />
      <ul className="hidden md:block">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">รู้จักกับครูโบนัส</a>
        </li>
        <li>
          <a href="#">บริการของเรา</a>
        </li>
        <li>
          <a href="#">บทความน่าอ่าน</a>
        </li>
        <li>
          <a href="#">ติดต่อเรา</a>
        </li>
      </ul>
      <div className="hidden md:block">(+66) 81-820-7303</div>
      <div className="navbar z-999999 block md:hidden">
        <div className="nav-container container">
          <input className="checkbox" type="checkbox" name="" id="" />
          <div className="hamburger-lines">
            <span className="line line1"></span>
            <span className="line line2"></span>
            <span className="line line3"></span>
          </div>
          <div className="menu-items bg-white">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">รู้จักกับครูโบนัส</a>
            </li>
            <li>
              <a href="#">บริการของเรา</a>
            </li>
            <li>
              <a href="#">บทความน่าอ่าน</a>
            </li>
            <li>
              <a href="#">ติดต่อเรา</a>
            </li>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
