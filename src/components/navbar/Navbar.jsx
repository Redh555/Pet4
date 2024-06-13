import React from "react";
import module from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className={module.navbar}>
      <div>
        <NavLink
          to="/profile"
          className={(navData) =>
            navData.isActive ? module.active : module.item
          }
        >
          Profile
        </NavLink>
      </div>

      <div>
        <NavLink
          to="/dialogs"
          className={(navData) =>
            navData.isActive ? module.active : module.item
          }
        >
          Messages
        </NavLink>
      </div>
      <div>
        <NavLink
          to="/news"
          className={(navData) =>
            navData.isActive ? module.active : module.item
          }
        >
          News
        </NavLink>
      </div>
      <div>
        <NavLink
          to="/music"
          className={(navData) =>
            navData.isActive ? module.active : module.item
          }
        >
          Music
        </NavLink>
      </div>
      <div>
        <NavLink
          to="/settings"
          className={(navData) =>
            navData.isActive ? module.active : module.item
          }
        >
          Settings
        </NavLink>
      </div>
      {/* //example second class // */}
    </nav>
  );
};

export default Navbar;
