import styles from "./section3.module.css";
import ScrollButton from "./ScrollButton";
import Header from "./Header";
import lamp from "../assets/lamp.webp";
import man from "../assets/man.png";

export default function Section3({ onClick }) {
  return (
    <>
      <div id="section3" className={styles.container}>
        <Header label="Énigme 1 : Le secret des reflets cachés" />
        <p
          style={{
            width: "60vw",
            textAlign: "center",
            lineHeight: "1.8em",
            color: "#fff",
            padding: "0 0 2em 0",
            fontSize: "3em",
          }}
        >
          Dans une pièce sombre du chalet, les joueurs trouvent un miroir ancien
          fissuré, suspendu au mur, à côté d’une vieille lampe à huile. Une
          inscription énigmatique est gravée dans le cadre du miroir :
          <br />
          <br />
          <strong>
            {" "}
            "Ce qui se reflète n’est jamais complet. Ce qui est caché te révèle
            la vérité."
          </strong>
        </p>
        <div className={styles.imgContainer}>
          <img src={lamp} alt="" />
          <img src={man} alt="" />
        </div>
        <ScrollButton target="section4" onClick={onClick} />
      </div>
    </>
  );
}
