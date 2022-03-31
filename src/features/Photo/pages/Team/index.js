import {  Outlet,Link } from "react-router-dom";
//import NavLink from '../../../../App';
;


function Team() {
    return (
      <div>
        <header>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-end">
            <h1 className="text-3xl font-bold leading-tight text-gray-900">
              Team
            </h1>
            <nav className="flex ml-8">
              <Link
                to=""
                className="ml-4 px-2 py-1 font-medium text-xs leading-5 rounded-md"
              >
               team
              </Link>
              <Link
                to="Group"
                className="ml-4 px-2 py-1 font-medium text-xs leading-5 rounded-md"
              >
                Group
              </Link>
              <Link
                to="Discuss"
                className="ml-4 px-2 py-1 font-medium text-xs leading-5 rounded-md"
              >
                Discuss
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

  export default Team