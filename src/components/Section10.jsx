import Header from "./Header";
import ScrollButton from "./ScrollButton";
import styles from "./section10.module.css";

export default function Section8({ onClick }) {
  return (
    <>
      <div id="section10" className={styles.container}>
        <Header label="Énigme 8 : Les symboles du temps perdu" />
        <p className={styles.text}>
          Dans la pièce principale, les joueurs découvrent un vieux livre relié
          de cuir, avec des pages jaunies par le temps. À l'intérieur, des
          symboles et des émojis sont gravés à la place des mots, laissant un
          message crypté à déchiffrer. Sur la couverture du livre, une phrase
          gravée dans le cuir indique :
          <p style={{ fontStyle: "italic" }}>
            "Ce que le passé ne révèle plus, les symboles le rappellent."
          </p>
          À l'intérieur du livre, une série de symboles apparaît dans cet ordre
          :
          <br />
          ⏳📖🧠⛓❓
        </p>
        <ScrollButton onClick={onClick} target="section11" />
      </div>
    </>
  );
}
