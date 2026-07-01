import classes from "./main-sidebar.module.css";
import logoImg from "@/assets/logo.webp";
import Image from "next/image";
import NavLink from "@/components/nav-link/nav-link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse, faCreditCard, faChartColumn,
  faMoneyBillTransfer, faTags, faFolder,
} from "@fortawesome/free-solid-svg-icons";

export default function MainSidebar(): React.JSX.Element {
  return (
    <>
      <aside className={classes.sidebar}>
        <div className={classes["logo-container"]}>
          <a href="https://nueve09.mx/" target="_blank" rel="noopener noreferrer" className={classes["external-link"]}>
            <Image src={logoImg} alt="Logo" loading="lazy" className={classes["logo-img"]} />
          </a>
        </div>

        <nav className={classes.nav}>
          <NavLink href="/" exact>
            <div className={classes["icon-container"]}>
              <FontAwesomeIcon icon={faHouse} className={classes.icon} />
            </div>
          </NavLink>
          <NavLink href="/transacciones">
            <div className={classes["icon-container"]}>
              <FontAwesomeIcon icon={faMoneyBillTransfer} className={classes.icon} />
            </div>
          </NavLink>
          <NavLink href="/tarjetas">
            <div className={classes["icon-container"]}>
              <FontAwesomeIcon icon={faCreditCard} className={classes.icon} />
            </div>
          </NavLink>
          <NavLink href="/etiquetas">
            <div className={classes["icon-container"]}>
              <FontAwesomeIcon icon={faTags} className={classes.icon} />
            </div>
          </NavLink>
          <NavLink href="/graficos">
            <div className={classes["icon-container"]}>
              <FontAwesomeIcon icon={faChartColumn} className={classes.icon} />
            </div>
          </NavLink>
          <NavLink href="/carpetas">
            <div className={classes["icon-container"]}>
              <FontAwesomeIcon icon={faFolder} className={classes.icon} />
            </div>
          </NavLink>
        </nav>
      </aside >
    </>
  );
}
