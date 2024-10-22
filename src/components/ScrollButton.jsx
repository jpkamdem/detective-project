import { Link } from "react-scroll";
import styles from "./scrollbutton.module.css";

export default function ScrollButton({ target, label, onClick }) {
  return (
    <>
      <Link to={target} smooth={true} duration={5500} onClick={onClick}>
        <button className={styles.btn}>{label}</button>
      </Link>
    </>
  );
}
