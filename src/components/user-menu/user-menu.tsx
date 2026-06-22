import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import styles from "./user-menu.module.css";
import avatar from "../../../assets/carlos-avatar-compressed.png";

export default function UserMenu(): React.JSX.Element {
  return (
    <div className={styles.container}>
      <button className={styles["notification-button"]}>
        <FontAwesomeIcon icon={faBell} className={styles.icon} />
        <span className={styles.badge}></span>
      </button>

      <div className={styles.profile}>
        <Image
          src={avatar}
          alt="Carlos Avatar"
          className={styles.avatar}
        />

        <div className={styles["user-info"]}>
          <span className={styles.name}>Carlos</span>
          <span className={styles.role}>Operator</span>
        </div>

        <FontAwesomeIcon icon={faChevronDown} className={styles.chevron} />
      </div>
    </div>
  );
}
