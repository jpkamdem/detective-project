import Header from "./Header";
import ScrollButton from "./ScrollButton";
import styles from "./section7.module.css";

export default function Section7({ onClick }) {
  return (
    <>
      <div id="section7" className={styles.container}>
        <Header label="Énigme 5 : Le mystère des symboles célestes" />
        <p className={styles.text}>
          En fouillant dans le grenier sombre du chalet, les joueurs trouvent
          une plaque en métal gravée de symboles anciens et énigmatiques.
          Au-dessus de la plaque, une phrase mystérieuse est gravée dans le bois
          :
          <p style={{ fontStyle: "italic" }}>
            "C’est la lumière que tu cherches, celle qui brille dans le ciel de
            la nuit. Lis entre les symboles, et tu trouveras la clé."
          </p>
          Symboles :
          <ul
            style={{
              listStyleType: "none",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <li>
              ☽ - ☉ - <span style={{ background: "#ff9f2e" }}>🞼</span>
            </li>
            <li>✦ - ⚝ - ★</li>
            <li>✪ - ✶ - ✹</li>
          </ul>
        </p>
        <ScrollButton onClick={onClick} target="section8" />
      </div>
    </>
  );
}
