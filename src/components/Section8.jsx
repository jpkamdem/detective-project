import Header from "./Header";
import ScrollButton from "./ScrollButton";
import styles from "./section8.module.css";

export default function Section8({ onClick }) {
  return (
    <>
      <div id="section8" className={styles.container}>
        <Header label="Énigme 6 : Paroles cachées dans le vent" />
        <p className={styles.text}>
          En se rapprochant de l’ancienne jetée qui borde le lac, vous entendez
          le souffle du vent qui semble porter des sons presque imperceptibles.
          Sur un vieux panneau en bois, vous trouvez une inscription énigmatique
          :
          <p style={{ fontStyle: "italic" }}>
            "Ce que le vent emporte n'est jamais entendu par tous, mais il
            révèle toujours des vérités à ceux qui savent écouter."
          </p>
          Sous cette inscription, une série de lettres est gravée, mais elles
          sont incomplètes et désordonnées : M_ _ R_ R_{" "}
        </p>
        <ScrollButton onClick={onClick} target="section9" />
      </div>
    </>
  );
}
