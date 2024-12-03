import Card from "../Card/Card.jsx";
import styles from "./CardContainer.module.css";
import PropTypes from "prop-types";

CardContainer.propTypes = {
  projects: PropTypes.array,
  sectionTitle: PropTypes.string,
};

// Acts as grid container for project cards
export default function CardContainer({ projects, sectionTitle }) {
  return (
    <div className={styles["card-container"]}>
      {/* Section title */}
      <h1 className={styles["section-title"]}>{sectionTitle}</h1>

      {/* Projects cards */}
      {projects.map((project, index) => (
        <Card
          key={index}
          title={project.title}
          image={project.imageLink}
          body={project.body}
          pageLink={project.pageURL}
          codeLink={project.codeURL}
        />
      ))}
    </div>
  );
}
