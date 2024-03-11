import { Link, NavLink, useNavigate } from 'react-router-dom';
import { links } from '../data';

const Navbar = () => {
  return (
    <nav className="bg-emerald-100">
      <div className="align-element py-4 sm:py-8 flex flex-col sm:flex-row sm:gap-x-16 sm:justify-between sm:items-center ">
        <h2 className="text-3xl font-bold">
          Web <span className="text-emerald-600">Dev</span>
        </h2>
        <div className="flex gap-x-3">
          {links.map((link) => (
            <a
              href={link.href}
              key={link.id}
              className="capitalize text-lg tracking-wide hover:text-emerald-600 duration-300"
            >
              {link.text}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
