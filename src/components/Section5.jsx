import styles from "./section5.module.css";
import Header from "./Header";
import ScrollButton from "./ScrollButton";

export default function Section5({ onClick }) {
  return (
    <div id="section5" className={styles.container}>
      <Header label="Énigme 3 : Le code des chiffres" />
      <p
        style={{
          width: "60vw",
          textAlign: "justify",
          lineHeight: "1.8em",
          color: "#fff",
          fontSize: "2em",
        }}
      >
        Dans le grenier, les joueurs découvrent une petite boîte métallique avec
        un cadenas. Sur le côté de la boîte, il est inscrit :
        <br />
        "Les chiffres ne sont que des lettres déguisées."
        <br />
        <br />
        Un code de 7 chiffres est gravé mais il manque des chiffres : 19 - 9 -
        12 – 5 - ? - ? - ?
        <br />
      </p>
      <ScrollButton onClick={onClick} target="section6" label="Suite..." />
    </div>
  );
}
