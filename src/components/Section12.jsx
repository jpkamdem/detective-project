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
          <p style={{ fontStyle: "italic" }}>
            "Là où le jour finit et où la nuit commence, les aiguilles se
            rejoignent."
          </p>
          Sous l’horloge, une série de chiffres est inscrite, mais ils sont
          mélangés :{" "}
          <strong style={{ fontSize: ".778em" }}>9 - 3 - 12 - 6</strong>
        </p>
        <ScrollButton onClick={onClick} target="section13" />
      </div>
    </>
  );
}
