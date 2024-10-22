import styles from "./section2.module.css";
import ScrollButton from "./ScrollButton";

export default function Section2() {
  return (
    <>
      <div id="section2" className={styles.container}>
        <h2>Section 2 : Enquêtez sur la citrouille</h2>
        <ScrollButton label="Section numéro THREE" target="section3" />
      </div>
    </>
  );
}
