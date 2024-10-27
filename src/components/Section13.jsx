import { useState } from "react";
import ScrollButton from "./ScrollButton";
import styles from "./section13.module.css";
import { useEffect } from "react";

export default function Section8({
  onClick,
  sentence,
  setSentence,
  valid,
  setValid,
}) {
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const message = checkInput();
    setPopupMessage(message);
    if (message !== "Bien joué...") {
      setShowPopup(true);
    }
  }

  function checkInput() {
    const rightAnswer =
      sentence.first.trim() === "minuit" &&
      sentence.second.trim() === "murmure" &&
      sentence.third.trim() === "ombre" &&
      sentence.fourth.trim() === "nuit" &&
      sentence.fifth.trim() === "mémoire";
    if (!rightAnswer) {
      setValid(false);
      return "Le lac s'agite, les murmures s'intensifient : ce ne sont pas les bons mots... Essayez encore";
    }
    setValid(true);
    return "Bien joué...";
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setSentence({ ...sentence, [name]: value });
  }

  useEffect(() => {
    let timer;
    if (showPopup) {
      timer = setTimeout(() => {
        setShowPopup(false);
      }, 3000);
    }
    return () => clearTimeout(timer);
  }, [showPopup]);

  return (
    <>
      <div id="section13" className={styles.container}>
        {/* <Header label="Dénouement" /> */}
        <p className={styles.text}>
          Après avoir résolu une série d’énigmes disséminées dans le vieux
          chalet, le groupe d’amis sent une force mystérieuse qui les attire
          vers le lac. Alors qu’ils approchent, le calme de la nuit devient
          oppressant. L’air devient lourd, et des voix à peine audibles émergent
          de l’obscurité. Les murmures se transforment en cris chuchotés, se
          mêlant au vent qui souffle de plus en plus fort, tandis que l'eau du
          lac s'agite étrangement. Leurs pensées s’éclaircissent enfin :
          <strong>tous ces mots ne sont pas destinés à être utilisés.</strong>
          <br />
          <form onSubmit={handleSubmit}>
            "Quand{" "}
            <input
              type="text"
              name="first"
              onChange={handleChange}
              value={sentence.first}
              className={styles.input}
            />
            tombe, le
            <input
              type="text"
              name="second"
              onChange={handleChange}
              value={sentence.second}
              className={styles.input}
            />{" "}
            devient{" "}
            <input
              type="text"
              name="third"
              onChange={handleChange}
              value={sentence.third}
              className={styles.input}
            />
            . Dans le silence de la{" "}
            <input
              type="text"
              name="fourth"
              onChange={handleChange}
              value={sentence.fourth}
              className={styles.input}
            />
            , la{" "}
            <input
              type="text"
              name="fifth"
              onChange={handleChange}
              value={sentence.fifth}
              className={styles.input}
            />
            demeure."
            <button type="submit">Valider</button>
          </form>
        </p>
        <p className={`${styles.popup} ${!showPopup ? styles.hide : ""}`}>
          {popupMessage}
        </p>
        {valid ? <ScrollButton onClick={onClick} target="section14" /> : ""}
      </div>
    </>
  );
}
