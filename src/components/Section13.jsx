import Header from "./Header";
import ScrollButton from "./ScrollButton";
import styles from "./section13.module.css";

export default function Section8({ onClick }) {
  return (
    <>
      <div id="section13" className={styles.container}>
        <Header label="Dénouement" />
        <p className={styles.text}>Lorem ipsum dolor sit amet.</p>
        <ScrollButton onClick={onClick} target="section14" />
      </div>
    </>
  );
}
