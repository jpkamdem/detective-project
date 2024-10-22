import styles from "./section1.module.css";
import ScrollButton from "./ScrollButton";

export default function Section1() {
  return (
    <>
      <div id="section1" className={styles.container}>
        <h2>Section 1 : Enquêtez sur la citrouille</h2>
        <ScrollButton label="Section numéro TWO" target="section2" />
      </div>
    </>
  );
}
