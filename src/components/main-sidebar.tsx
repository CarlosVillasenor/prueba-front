import NavLink from "next/link";
import styles from "./main-sidebar.module.css";
import logoImg from "../../assets/logo.webp";
import Image from "next/image";
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
          <NavLink href="/">
            <button className={styles["nav-item"] + " " + styles.active}>
              <FontAwesomeIcon icon={faHouse} />
            </button>
          </NavLink>
          <NavLink href="/transacciones">
            <button className={styles["nav-item"]}>
              <FontAwesomeIcon icon={faMoneyBillTransfer} />
            </button>
          </NavLink>
          <NavLink href="/tarjetas">
            <button className={styles["nav-item"]}>
              <FontAwesomeIcon icon={faCreditCard} />
            </button>
          </NavLink>
          <NavLink href="/etiquetas">
            <button className={styles["nav-item"]}>
              <FontAwesomeIcon icon={faTags} />
            </button>
          </NavLink>
          <NavLink href="/graficos">
            <button className={styles["nav-item"]}>
              <FontAwesomeIcon icon={faChartColumn} />
            </button>
          </NavLink>
          <NavLink href="/carpetas">
            <button className={styles["nav-item"]}>
              <FontAwesomeIcon icon={faFolder} />
            </button>
          </NavLink>
        </nav>
      </aside>
    </>
  );
}
