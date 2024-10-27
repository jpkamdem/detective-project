import Header from "./Header";
import ScrollButton from "./ScrollButton";
import styles from "./section6.module.css";

export default function Section6({ onClick }) {
  return (
    <>
      <div id="section6" className={styles.container}>
        <Header label="Énigme 4 : Le Labyrinthe des Pas" />
        <p className={styles.text}>
          Dans une pièce poussiéreuse du chalet, les amis remarquent des
          empreintes de pas tracées dans la poussière au sol. Ces empreintes
          forment une sorte de chemin, mais elles semblent incomplètes ou
          irrégulières. À côté des pas, une inscription est gravée dans le bois
          :
          <br />
          <p style={{ fontStyle: "italic" }}>
            "Trois pas en avant, deux en arrière. Ce qui reste est toujours
            constant."
          </p>
        </p>
        <ScrollButton onClick={onClick} target="section7" />
      </div>
    </>
  );
}
