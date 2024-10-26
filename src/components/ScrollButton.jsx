import { Link } from "react-scroll";
import styles from "./scrollbutton.module.css";
import { PiHouseLineLight } from "react-icons/pi";

export default function ScrollButton({ target, onClick }) {
  return (
    <>
      <Link to={target} smooth={true} duration={1} onClick={onClick}>
        {/* duration: 5500 */}
        <PiHouseLineLight size={70} className={styles.btn} />
      </Link>
    </>
  );
}
