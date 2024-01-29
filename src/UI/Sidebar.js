import { NavLink } from "react-router-dom";
import classes from "./Sidebar.module.css";
import { motion } from "framer-motion";
import { uiActions } from "../store/ui-slice";
import { FaHistory } from "react-icons/fa";
import { BiBarChart } from "react-icons/bi";
import { PiContactlessPaymentFill } from "react-icons/pi";
import { FaCar } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { FiSettings } from "react-icons/fi";
import { AiOutlineFileText } from "react-icons/ai";
import { FaSchool } from "react-icons/fa";
import { HiUsers } from "react-icons/hi";
import { FaPersonBiking } from "react-icons/fa6";
import { MdGroups, MdStarRate } from "react-icons/md";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { IoLocation, IoPricetag } from "react-icons/io5"

export default function Sidebar() {
  const dispatch = useDispatch();

  return (
    <motion.div key={"sidebar1"} className={classes.sidebar}>
      <section
        className={classes["fields"]}
        style={{
          marginTop: "1rem",
          padding: "0",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexDirection: "column",
        }}
      >
        <motion.div
          className={classes["field"]}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.05}}
        >
          <NavLink
            onClick={() => dispatch(uiActions.toggleDashboard())}
            to="/"
            className={({ isActive }) => (isActive ? classes.active : "")}
            end
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              flexDirection: "row",
              margin: "0rem 0",
              padding: "0.05rem 0",
              width: "100%",
              borderRadius: "1rem",
            }}
          >
            <BiBarChart style={{ padding: "0 1rem 0", fontSize: 55 }} />
            <span
              style={{
                fontSize: "20px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "0 0 0 0",
              }}
            >
              Dashboard
            </span>
          </NavLink>
        </motion.div>

        <motion.div
          className={classes["field"]}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.05}}
        >
          <NavLink
            onClick={() => dispatch(uiActions.toggleDashboard())}
            to="/trips"
            className={({ isActive }) => (isActive ? classes.active : "")}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              flexDirection: "row",
              margin: "0rem 0",
              padding: "0.05rem 0",
              width: "100%",
              borderRadius: "1rem",
            }}
          >
            <FaHistory style={{ padding: "0 1rem 0", fontSize: 55 }} />
            <span
              style={{
                fontSize: "20px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "0 0 0 0rem",
              }}
            >
              Trips
            </span>
          </NavLink>
          </motion.div>

          <motion.div
          className={classes["field"]}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.05}}
        >
          <NavLink
            onClick={() => dispatch(uiActions.toggleDashboard())}
            to="/vehicles"
            className={({ isActive }) => (isActive ? classes.active : "")}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              flexDirection: "row",
              margin: "0rem 0",
              padding: "0.05rem 0",
              width: "100%",
              borderRadius: "1rem",
            }}
          >
            <FaCar style={{ padding: "0 1rem", fontSize: 55 }} />
            <span
              style={{
                fontSize: "20px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "0 0 0 0rem",
              }}
            >
              Vehicles
            </span>
          </NavLink>
          </motion.div>

          <motion.div
          className={classes["field"]}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.05}}
        >
          <NavLink
            onClick={() => dispatch(uiActions.toggleDashboard())}
            to="/drivers"
            className={({ isActive }) => (isActive ? classes.active : "")}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              flexDirection: "row",
              margin: "0rem 0",
              padding: "0.05rem 0",
              width: "100%",
              borderRadius: "1rem",
            }}
          >
            <BsFillPersonLinesFill
              style={{ padding: "0 1rem", fontSize: 55 }}
            />
            <span
              style={{
                fontSize: "20px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "0 0 0 0rem",
              }}
            >
              Drivers
            </span>
          </NavLink>
        </motion.div>

        <motion.div
          className={classes["field"]}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.05}}
        >
        <NavLink
          onClick={() => dispatch(uiActions.toggleDashboard())}
          to="/schools"
          className={({ isActive }) => (isActive ? classes.active : "")}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            flexDirection: "row",
            margin: "0rem 0",
            padding: "0.05rem 0",
            width: "100%",
            borderRadius: "1rem",
          }}
        >
          <FaSchool style={{ padding: "0 1rem", fontSize: 55 }} />
          <span
            style={{
              fontSize: "20px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "0 0 0 0rem",
            }}
          >
            Schools
          </span>
        </NavLink>
        </motion.div>

        <motion.div
          className={classes["field"]}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.05}}
        >
        <NavLink
          onClick={() => dispatch(uiActions.toggleDashboard())}
          to="/location"
          className={({ isActive }) => (isActive ? classes.active : "")}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            flexDirection: "row",
            margin: "0rem 0",
            padding: "0.05rem 0",
            width: "100%",
            borderRadius: "1rem",
          }}
        >
          <IoLocation style={{ padding: "0 1rem", fontSize: 55 }} />
          <span
            style={{
              fontSize: "20px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "0 0 0 0rem",
            }}
          >
            Location
          </span>
        </NavLink>
        </motion.div>

        <motion.div
          className={classes["field"]}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.05}}
        >
        <NavLink
          onClick={() => dispatch(uiActions.toggleDashboard())}
          to="/users"
          className={({ isActive }) => (isActive ? classes.active : "")}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            flexDirection: "row",
            margin: "0rem 0",
            padding: "0.05rem 0",
            width: "100%",
            borderRadius: "1rem",
          }}
        >
          <MdGroups style={{ padding: "0 1rem", fontSize: 55 }} />
          <span
            style={{
              fontSize: "20px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "0 0 0 0rem",
            }}
          >
            Users
          </span>
        </NavLink>
        </motion.div>

        <motion.div
          className={classes["field"]}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.05}}
        >
        <NavLink
          onClick={() => dispatch(uiActions.toggleDashboard())}
          to="/parents"
          className={({ isActive }) => (isActive ? classes.active : "")}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            flexDirection: "row",
            margin: "0rem 0",
            padding: "0.05rem 0",
            width: "100%",
            borderRadius: "1rem",
          }}
        >
          <HiUsers style={{ padding: "0 1rem", fontSize: 55 }} />
          <span
            style={{
              fontSize: "20px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "0 0 0 0rem",
            }}
          >
            Parents
          </span>
        </NavLink>
        </motion.div>

        <motion.div
          className={classes["field"]}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.05}}
        >
        <NavLink
          onClick={() => dispatch(uiActions.toggleDashboard())}
          to="/riders"
          className={({ isActive }) => (isActive ? classes.active : "")}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            flexDirection: "row",
            margin: "0rem 0",
            padding: "0.05rem 0",
            width: "100%",
            borderRadius: "1rem",
          }}
        >
          <FaPersonBiking style={{ padding: "0 1rem", fontSize: 55 }} />
          <span
            style={{
              fontSize: "20px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "0 0 0 0rem",
            }}
          >
            Riders
          </span>
        </NavLink>
        </motion.div>

        <motion.div
          className={classes["field"]}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.05}}
        >
          <NavLink
            onClick={() => dispatch(uiActions.toggleDashboard())}
            to="/fair"
            className={({ isActive }) => (isActive ? classes.active : "")}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              flexDirection: "row",
              margin: "0rem 0",
              padding: "0.05rem 0",
              width: "100%",
              borderRadius: "1rem",
            }}
          >
            <IoPricetag style={{ padding: "0 1rem", fontSize: 55 }} />
            <span
              style={{
                fontSize: "20px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "0 0 0 0rem",
              }}
            >
              Fair
            </span>
          </NavLink>
        </motion.div>

        <motion.div
          className={classes["field"]}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.05}}
        >
          <NavLink
            onClick={() => dispatch(uiActions.toggleDashboard())}
            to="/payments"
            className={({ isActive }) => (isActive ? classes.active : "")}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              flexDirection: "row",
              margin: "0rem 0",
              padding: "0.05rem 0",
              width: "100%",
              borderRadius: "1rem",
            }}
          >
            <PiContactlessPaymentFill style={{ padding: "0 1rem", fontSize: 55 }} />
            <span
              style={{
                fontSize: "20px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "0 0 0 0rem",
              }}
            >
              Payments
            </span>
          </NavLink>
        </motion.div>

        <motion.div
          className={classes["field"]}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.05}}
        >
          <NavLink
            onClick={() => dispatch(uiActions.toggleDashboard())}
            to="/review-and-ratings"
            className={({ isActive }) => (isActive ? classes.active : "")}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              flexDirection: "row",
              margin: "0rem 0",
              padding: "0.05rem 0",
              width: "100%",
              borderRadius: "1rem",
            }}
          >
            <MdStarRate style={{ padding: "0 1rem", fontSize: 65 }} />
            <span
              style={{
                fontSize: "20px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "0 0 0 0rem",
              }}
            >
              Review & Ratings
            </span>
          </NavLink>
        </motion.div>

        <motion.div
          className={classes["field"]}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.05}}
        >
          <NavLink
            onClick={() => dispatch(uiActions.toggleDashboard())}
            to="/reports"
            className={({ isActive }) => (isActive ? classes.active : "")}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              flexDirection: "row",
              margin: "0rem 0",
              padding: "0.05rem 0",
              width: "100%",
              borderRadius: "1rem",
            }}
          >
            <AiOutlineFileText style={{ padding: "0 1rem", fontSize: 55 }} />
            <span
              style={{
                fontSize: "20px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "0 0 0 0rem",
              }}
            >
              Reports
            </span>
          </NavLink>
        </motion.div>

        <motion.div
          className={classes["field"]}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.05}}
        >
          <NavLink
            onClick={() => {
              dispatch(uiActions.toggleDashboard());
            }}
            to="/settings"
            className={({ isActive }) => (isActive ? classes.active : "")}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              flexDirection: "row",
              margin: "0rem 0",
              padding: "0.05rem 0",
              width: "100%",
              borderRadius: "1rem",
            }}
          >
            <FiSettings style={{ padding: "0 1rem 0", fontSize: 55 }} />
            <span
              style={{
                fontSize: "20px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "0 0 0 0rem",
              }}
            >
              Settings
            </span>
          </NavLink>
        </motion.div>
      </section>
    </motion.div>
  );
}
