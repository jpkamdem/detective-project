import Header from "./Header";
import ScrollButton from "./ScrollButton";
import styles from "./section13.module.css";

export default function Section8({ onClick }) {
  return (
    <>
      <div id="section13" className={styles.container}>
        <Header label="Dénouement" />
        <p className={styles.text}>
          Lorem ipsum dolor sit amet. Après avoir résolu une série d’énigmes
          disséminées dans le vieux chalet, le groupe d’amis sent une force
          mystérieuse qui les attire vers le lac. Alors qu’ils approchent, le
          calme de la nuit devient oppressant. L’air devient lourd, et des voix
          à peine audibles émergent de l’obscurité. Les murmures se transforment
          en cris chuchotés, se mêlant au vent qui souffle de plus en plus fort,
          tandis que l'eau du lac s'agite étrangement. Leurs pensées
          s’éclaircissent enfin :
          <strong>tous ces mots ne sont pas destinés à être utilisés.</strong>
          <br />
          "Quand ______ tombe, le ______ devient ______. Dans le silence de la
          ______, la ______ demeure."
        </p>
        <ScrollButton onClick={onClick} target="section14" />
      </div>
    </>
  );
}
