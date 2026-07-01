import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import classes from "./user-menu.module.css";
import avatar from "@/assets/carlos-avatar-compressed.png";

export default function UserMenu(): React.JSX.Element {
  return (
    <div className={classes.container}>
      <button className={classes["notification-button"]}>
        <FontAwesomeIcon icon={faBell} className={classes.icon} />
        <span className={classes.badge}></span>
      </button>

      <div className={classes.profile}>
        <Image
          src={avatar}
          alt="Carlos Avatar"
          className={classes.avatar}
          loading="eager"
        />

        <div className={classes["user-info"]}>
          <span className={classes.name}>Carlos</span>
          <span className={classes.role}>Operator</span>
        </div>

        <FontAwesomeIcon icon={faChevronDown} className={classes.chevron} />
      </div>
    </div>
  );
}
