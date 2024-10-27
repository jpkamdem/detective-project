import styles from "./section5.module.css";
import Header from "./Header";
import ScrollButton from "./ScrollButton";

export default function Section5({ onClick }) {
  return (
    <div id="section5" className={styles.container}>
      <Header label="Énigme 3 : Le code des chiffres" />
      <p
        style={{
          width: "80vw",
          textAlign: "center",
          lineHeight: "1.8em",
          color: "#fff",
          fontSize: "3em",
        }}
      >
        Dans le couloir, les amis découvrent une petite boîte métallique avec un
        cadenas. Sur le côté de la boîte, il est inscrit :
        <br />
        <p style={{ fontStyle: "italic" }}>
          "Les chiffres ne sont que des lettres déguisées."
        </p>
        <br />
        Un code de 7 chiffres est gravé mais il manque des chiffres :
        <br />
        19 - 9 - 12 – 5 - ? - ? - ?
        <br />
      </p>
      <ScrollButton onClick={onClick} target="section6" />
    </div>
  );
}
