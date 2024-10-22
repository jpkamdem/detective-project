import styles from "./home.module.css";
import ScrollButton from "../components/ScrollButton";
import Section1 from "../components/Section1";
import Section2 from "../components/Section2";
import Section3 from "../components/Section3";

export default function Home() {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.bgImage}>
          <p className={styles.heading}>Les murmures du lac</p>
        </div>
        <ScrollButton target="section1" label="Commencer l'enquête" />
      </div>
      <Section1 />
      <Section2 />
      <Section3 />
    </div>
  );
}
