import Header from "./Header";
import ScrollButton from "./ScrollButton";
import styles from "./section12.module.css";

export default function Section8({ onClick }) {
  return (
    <>
      <div id="section12" className={styles.container}>
        <Header label="Énigme 10 : Horgole aux aiguilles cachées" />
        <p className={styles.text}>
          Dans une salle du chalet, les joueurs découvrent une vieille horloge
          suspendue au mur. Ses aiguilles sont absentes, et le cadran semble
          gravement endommagé, avec plusieurs marques à peine visibles. Sur le
          côté de l’horloge, une phrase énigmatique est gravée :
          <p>
            "Là où le jour finit et où la nuit commence, les aiguilles se
            rejoignent."
          </p>
          Sous l’horloge, une série de chiffres est inscrite, mais ils sont
          mélangés :
          <br />
          <strong>9 - 3 - 12 - 6</strong>
          <br />
          Avec les 10 mots trouvés, compléter la phrase suivante "Sous la _____,
          à , l' _____ _____, doucement. _____. _____ et _____ se rencontrent
          dans la _____ sous une _____."
        </p>
        <ScrollButton onClick={onClick} target="section13" />
      </div>
    </>
  );
}
