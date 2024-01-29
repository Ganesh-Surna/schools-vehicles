import { Outlet } from "react-router-dom";
import classes from "./RootLayout.module.css";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { useSelector } from "react-redux";
import { AnimatePresence, motion } from "framer-motion";

export default function RootLayout() {
  function handleContextMenu(event) {
    event.preventDefault();
  }

  const isDashboardOpen = useSelector((state) => state.ui.isDashboardOpen);
  //key="sidebar" key="right"
  return (
    <motion.div className={`${classes.root}`} onContextMenu={handleContextMenu}>
      <Header />
      <AnimatePresence >
        {isDashboardOpen && (
          <motion.div key="sidebar" initial={{opacity: 0}} animate={{opacity: 1 }} exit={{ opacity: 0}} transition={{duration: 0.001}} >
            <Sidebar />
          </motion.div>
        )}
        <motion.div
            key={"right"}
            layout
            transition={{duration: 0.001}}
          className={`${classes.right} ${!isDashboardOpen ? classes.full : ""}`}
        >
          <Outlet />
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}
