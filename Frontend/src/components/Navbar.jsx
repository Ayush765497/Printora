import { Link, NavLink } from "react-router-dom";
import { FaPrint } from "react-icons/fa";

function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-lg">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <div className="rounded-xl bg-blue-600 p-2 text-white shadow-lg">
            <FaPrint size={24} />
          </div>

          <div>
            <h1 className="text-2xl font-bold text-slate-800">
              Printora
            </h1>

            <p className="text-xs text-slate-500">
              Smart Printing Solution
            </p>
          </div>
        </Link>

        {/* Menu */}

        <nav>
          <ul className="hidden items-center gap-8 font-medium text-slate-600 md:flex">

            <li>
              <NavLink to="/" className="hover:text-blue-600">
                Home
              </NavLink>
            </li>

            <li>
              <NavLink to="/services" className="hover:text-blue-600">
                Services
              </NavLink>
            </li>

            <li>
              <NavLink to="/pricing" className="hover:text-blue-600">
                Pricing
              </NavLink>
            </li>

            <li>
              <NavLink to="/upload" className="hover:text-blue-600">
                Upload
              </NavLink>
            </li>

            <li>
              <NavLink to="/contact" className="hover:text-blue-600">
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* Right */}

        <div className="flex items-center gap-4">

          <Link
            to="/auth"
            className="rounded-xl border border-slate-300 px-5 py-2 font-medium transition hover:border-blue-600 hover:text-blue-600"
          >
            Login
          </Link>

          <Link
            to="/upload"
            className="rounded-xl bg-blue-600 px-5 py-2 font-medium text-white shadow-lg transition hover:bg-blue-700"
          >
            Get Started
          </Link>

        </div>

      </div>
    </header>
  );
}

export default Navbar;