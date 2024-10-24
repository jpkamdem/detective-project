import ScrollButton from "./ScrollButton";
import Header from "./Header";
import styles from "./section4.module.css";

export default function Section4({ onClick }) {
  return (
    <>
      <div id="section4" className={styles.container}>
        <Header label="Énigme 2 : Le vers caché des Cieux" />
        <p className={styles.text}>
          Dans une vieille pièce poussiéreuse, les joueurs découvrent un
          parchemin ancien contenant un poème à moitié effacé. Une partie du
          texte est illisible, mais un espace vide intrigue les joueurs. Voici
          le poème :
          <br />
          <br />
          "Quand les étoiles se taisent et que les ombres dansent, seule la ____
          veille sur les secrets du ciel."
        </p>
        <ScrollButton label="Suite..." target="section5" onClick={onClick} />
      </div>
    </>
  );
}
