import Header from "./Header";
import ScrollButton from "./ScrollButton";
import styles from "./section11.module.css";

export default function Section8({ onClick }) {
  return (
    <>
      <div id="section11" className={styles.container}>
        <Header label="Énigme 9 : Le puzzle des ombres" />
        <p className={styles.text}>
          Dans le salon, les amis trouvent un tableau gravé avec des lettres
          mélangées. Une inscription au bas du tableau indique :
          <p style={{ fontStyle: "italic" }}>
            "Lorsque le soleil se couche, ce qui reste émerge des ombres.
            Déchiffre les lettres pour trouver ce qui règne dans l'obscurité."
          </p>
          Voici les lettres mélangées gravées sur le tableau :{" "}
          <strong>U G T T N S L O I</strong>
        </p>
        <ScrollButton onClick={onClick} target="section12" />
      </div>
    </>
  );
}
