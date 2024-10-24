import styles from "./header.module.css";

export default function Header({ label }) {
  return (
    <>
      <h2 className={styles.headline}>{label}</h2>
    </>
  );
}
