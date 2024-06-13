import Reacts from "react";
import module from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";
const getNavLinkClass = (navData) => {
  return navData.isActive ? module.active : module.item;
};
const DialogItem = () => {
  return (
    <div>
      <NavLink to="1" className={getNavLinkClass}>
        1
      </NavLink>
    </div>
  );
};
export const Dialogs = (props) => {
  return (
    <div className={module.dialog_content}>
      <div className={module.dialogItems}>
        <DialogItem />
        <div>
          <NavLink to="2" className={getNavLinkClass}>
            22
          </NavLink>
        </div>
        <div>
          <NavLink to="3" className={getNavLinkClass}>
            33
          </NavLink>
        </div>
      </div>
      <div className={module.dialog_messages}>
        <div className={module.message}>hI</div>
        <div className={module.message}>nihao</div>
        <div className={module.message}>privet</div>
      </div>
    </div>
  );
};

// export default Dialogs;
