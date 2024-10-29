import Header from "./Header";
import ScrollButton from "./ScrollButton";
import styles from "./section9.module.css";

export default function Section8({ onClick }) {
  return (
    <>
      <div id="section9" className={styles.container}>
        <Header label="Énigme 7 : La clef du néant" />
        <p className={styles.text}>
          Les amis trouvent un ancien coffre verrouillé dans un coin sombre du
          sous-sol du chalet. Il n’y a pas de serrure visible, mais sur le
          dessus du coffre, une phrase énigmatique est gravée :
          <p style={{ fontStyle: "italic" }}>
            "Ce qui ouvre ce qui n'existe plus n’a ni forme, ni clé."
          </p>
          À côté du coffre, les amis trouvent un parchemin qui semble avoir été
          déchiré. Une partie de la phrase est encore lisible :
          <p style={{ fontStyle: "italic" }}>
            "Lorsque tout est effacé et que plus rien ne subsiste, seul
            l’________ reste dans les méandres de l’esprit."
          </p>
        </p>
        <ScrollButton onClick={onClick} target="section10" />
      </div>
    </>
  );
}
