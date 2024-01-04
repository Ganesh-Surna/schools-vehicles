import { useDispatch } from "react-redux";
import TogglerIcon from "../icons/toggler-icon";
import classes from "./Header.module.css";
import { uiActions } from "../store/ui-slice";
import { motion } from "framer-motion";
import Logo from "../assets/schoolwheels.png";
import ChatIcon from "../icons/chat-icon";
import NotificationIcon from "../icons/notification-icon";
import ChevronDownIcon from "../icons/chevron-down-icon";

export default function Header() {
  const dispatch = useDispatch();

  function handleToggleDashboard() {
    dispatch(uiActions.toggleDashboard());
  }

  return (
    <>
      <motion.header className={`${classes.header} ${classes.full}`}>
        <div className={classes["logo-toggler"]}>
            <p className={classes.toggler} onClick={handleToggleDashboard}>
              <TogglerIcon />
            </p>
          <div className={classes["logo-container"]}>
            <img src={Logo} alt="logo" />
            <h2>SchoolWheels</h2>
          </div>
        </div>

          <nav>
            <ul className={classes.list}>
              <li>
                <span className={classes["click-icon"]}>
                  <ChatIcon />
                </span>
              </li>
              <li>
                <span className={classes["click-icon"]}>
                  <NotificationIcon />
                </span>
              </li>
              <li>
                <div className={classes["user-image-text"]}>
                  <img
                    className={classes.image}
                    src={
                      "https://media.istockphoto.com/id/1090878494/photo/close-up-portrait-of-young-smiling-handsome-man-in-blue-polo-shirt-isolated-on-gray-background.webp?b=1&s=170667a&w=0&k=20&c=c3TaqVe9-0EcHl7mjO-9YChSvGBDhvzUai6obs1Ibz4="
                    }
                    alt="profile"
                  />
                  <p className={classes.para}>
                    Hi, <span className={classes.name}>User</span>
                  </p>
                </div>
              </li>
              <li>
                <span className={classes.chevron}>
                  <ChevronDownIcon />
                </span>
              </li>
            </ul>
          </nav>
      </motion.header>
    </>
  );
}