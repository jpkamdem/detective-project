import styles from "./section1.module.css";
import ScrollButton from "./ScrollButton";
import Header from "./Header";

export default function Section1({ onClick }) {
  return (
    <>
      <div id="section1" className={styles.container}>
        <Header label="Synopsis" />
        <p className={styles.text}>
          Après plusieurs années sans se revoir, un groupe d'amis d'enfance
          décide de se réunir pour un week-end dans un chalet isolé au bord d'un
          lac, un endroit chargé de souvenirs de leur jeunesse. Le lac,
          autrefois un lieu de bonheur et d'insouciance, semble désormais
          imprégné d'une atmosphère oppressante et mystérieuse. Alors que les
          retrouvailles commencent joyeusement, des événements étranges et
          inexplicables viennent troubler leur tranquilité. Lecalme paisible du
          lac est rompu par des murmures étouffés qui semblent provenir des
          profondeurs. Des objets disparaissent, des voix chuchotent dans le
          vent, et des rêves troublant hantent les nuits de chacun. Petit à
          petit, les tensions montent et des secrets enfouis depuis longtemps
          resurgissent. Ce qui semblait n'être qu'un week-end nostalgique se
          transforme en un véritable cauchemar, alors que les amis commencent à
          se demander si quelque chose, ou quelqu'un, n'est pas en train de les
          observer depuis les eaux sombres. Au fur et à mesure que la réalité se
          brouille, les murmures du lac révèlent une vérité bien plus
          terrifiante que quiconque aurait pu l'imaginer...
        </p>
        <ScrollButton target="section2" onClick={onClick} />
      </div>
    </>
  );
}
