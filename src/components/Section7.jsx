import Header from "./Header";
import ScrollButton from "./ScrollButton";
import styles from "./section7.module.css";

export default function Section7({ onClick }) {
  return (
    <>
      <div id="section7" className={styles.container}>
        <Header label="Énigme 5 : Les gardiens du ciel" />
        <p className={styles.text}>
          Dans la pièce principale du chalet, les joueurs trouvent un ancien
          globe céleste, représentant le ciel nocturne avec des constellations
          gravées sur sa surface. Mais certaines étoiles semblent avoir été
          effacées, tandis que d’autres brillent plus que d'habitude. À côté du
          globe, une plaque en métal porte l’inscription suivante :
          <p style={{ fontStyle: "italic" }}>
            "Ceux qui brillent encore sont les gardiens du ciel. Compte les
            disparus, et leur nom te sera révélé.
          </p>
        </p>
        <ScrollButton onClick={onClick} target="section8" />
      </div>
    </>
  );
}
