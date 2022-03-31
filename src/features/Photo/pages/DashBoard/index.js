import {  Outlet,Link } from "react-router-dom";
//import NavLink from '../../../../App';
;


function DashBoard() {
    return (
      <div>
        <header>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-end">
            <h1 className="text-3xl font-bold leading-tight text-gray-900">
              Dashboard
            </h1>
            <nav className="flex ml-8">
              <Link
                to=""
                className="ml-4 px-2 py-1 font-medium text-xs leading-5 rounded-md"
              >
                Overview
              </Link>
              <Link
                to="add"
                className="ml-4 px-2 py-1 font-medium text-xs leading-5 rounded-md"
              >
                Photo Add
              </Link>
              <Link
                to="sales"
                className="ml-4 px-2 py-1 font-medium text-xs leading-5 rounded-md"
              >
                Sales
              </Link>
            </nav>
          </div>
        </header>
        <main>
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div className="px-4 py-8 sm:px-0">
              <Outlet />
            </div>
          </div>
        </main>
      </div>
    );
  }

  export default DashBoard