import finalImg from "../assets/final.png";
import styles from "./section14.module.css";

export default function Section8({ onClick }) {
  return (
    <>
      <div id="section14" className={styles.container}>
        {/* <Header label="Énigme 10 : Horloge aux aiguilles cachées" /> */}
        <p className={styles.text}>
          Le groupe d’amis, enfin rassemblé au bord du lac, prononce la
          citation.
          <p style={{ fontStyle: "italic" }}>
            "Quand minuit tombe, le murmure devient ombre. Dans le silence de la
            nuit, la mémoire demeure."
          </p>
          Le silence retombe brusquement. Le vent s’apaise, les voix cessent, et
          l’eau du lac redevient lisse, comme si les murmures avaient été
          apaisés. Un sentiment de soulagement envahit le groupe. C’est fini,
          pensent-ils. Ils se regardent, esquissant des sourires incertains,
          puis reprennent leur chemin vers le chalet. Alors qu’ils s’éloignent,
          un frisson les traverse, et dans le silence, un dernier murmure semble
          glisser sur l’eau : <strong>Était-ce vraiment terminé ?</strong>
        </p>
        <img style={{ height: "480px" }} src={finalImg} alt="" />
      </div>
    </>
  );
}
