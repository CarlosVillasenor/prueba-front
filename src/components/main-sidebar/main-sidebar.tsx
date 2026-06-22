import styles from "./main-sidebar.module.css";
import logoImg from "../../../assets/logo.webp";
import Image from "next/image";
import NavLink from "../nav-link/nav-link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse, faCreditCard, faChartColumn,
  faMoneyBillTransfer, faTags, faFolder,
} from "@fortawesome/free-solid-svg-icons";

export default function MainSidebar(): React.JSX.Element {
  return (
    <>
      <aside className={styles.sidebar}>
        <div className={styles.logo}>
          <Image src={logoImg} alt="Logo" width={32} height={32} />
        </div>

        <nav className={styles.nav}>
          <NavLink href="/" exact>
          <div className={styles["icon-container"]}>
            <FontAwesomeIcon icon={faHouse} className={styles.icon} />
          </div>
          </NavLink>
          <NavLink href="/transacciones">
            <div className={styles["icon-container"]}>
              <FontAwesomeIcon icon={faMoneyBillTransfer} className={styles.icon} />
            </div>
          </NavLink>
          <NavLink href="/tarjetas">
            <div className={styles["icon-container"]}>
              <FontAwesomeIcon icon={faCreditCard} className={styles.icon} />
            </div>
          </NavLink>
          <NavLink href="/etiquetas">
            <div className={styles["icon-container"]}>
              <FontAwesomeIcon icon={faTags} className={styles.icon} />
            </div>
          </NavLink>
          <NavLink href="/graficos">
            <div className={styles["icon-container"]}>
              <FontAwesomeIcon icon={faChartColumn} className={styles.icon} />
            </div>
          </NavLink>
          <NavLink href="/carpetas">
            <div className={styles["icon-container"]}>
              <FontAwesomeIcon icon={faFolder} className={styles.icon} />
            </div>
          </NavLink>
        </nav>
      </aside>
    </>
  );
}
