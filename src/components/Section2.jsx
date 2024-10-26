import styles from "./section2.module.css";
import ScrollButton from "./ScrollButton";
import Header from "./Header";

export default function Section2({ onClick }) {
  return (
    <>
      <div id="section2" className={styles.container}>
        <Header label="Introduction" />
        <p className={styles.text}>
          Après plusieurs jours d’événements étranges autour du chalet, les amis
          se rendent compte que les phénomènes inquiétants semblent avoir un
          lien avec le lac et leur passé. En explorant les recoins du chalet,
          ils découvrent un vieux carnet de notes oublié, probablement laissé
          par un ancien occupant. Ce carnet révèle que le seul moyen de stopper
          ces forces mystérieuses et d'échapper à leur emprise est de retrouver
          et réciter une ancienne citation, scellée par les eaux du lac depuis
          des générations. Cependant, la citation est fragmentée et perdue à
          travers des énigmes complexes laissées pour protéger ce secret. Chaque
          énigme résolue révèle un mot de la citation, permettant de
          reconstituer la formule qui pourrait enfin libérer les âmes piégées
          dans les murmures du lac...
        </p>
        <ScrollButton target="section3" onClick={onClick} />
      </div>
    </>
  );
}
