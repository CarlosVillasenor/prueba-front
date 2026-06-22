import Link from "next/link";
import styles from "./main-sidebar.module.css";
import logoImg from "../../../assets/logo.webp";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse, faCreditCard, faChartColumn,
  faMoneyBillTransfer, faTags, faFolder,
} from "@fortawesome/free-solid-svg-icons";
import NavLink from "../nav-link/nav-link";

export default function MainSidebar(): React.JSX.Element {
  return (
    <>
      <aside className={styles.sidebar}>
        <div className={styles.logo}>
          <Image src={logoImg} alt="Logo" width={32} height={32} />
        </div>

        <nav className={styles.nav}>
          <NavLink href="/" exact>
            <FontAwesomeIcon icon={faHouse} />
          </NavLink>
          <NavLink href="/transacciones">
            <FontAwesomeIcon icon={faMoneyBillTransfer} />
          </NavLink>
          <NavLink href="/tarjetas">
            <FontAwesomeIcon icon={faCreditCard} />
          </NavLink>
          <NavLink href="/etiquetas">
            <FontAwesomeIcon icon={faTags} />
          </NavLink>
          <NavLink href="/graficos">
            <FontAwesomeIcon icon={faChartColumn} />
          </NavLink>
          <NavLink href="/carpetas">
            <FontAwesomeIcon icon={faFolder} />
          </NavLink>
        </nav>
      </aside>
    </>
  );
}
