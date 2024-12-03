import { ReactProjects, JavaScriptProjects } from "./links/project-links.js";
import CardContainer from "./components/CardContainer/CardContainer.jsx";
import ColourSwatch from "./components/ColourSwatch/ColourSwatch.jsx";

export default function App() {
  // Used to set the background and foreground colour to the passed values
  function changeTheme(background, colour) {
    document.body.style.setProperty("--background-colour", background);
    document.body.style.setProperty("--text-colour", colour);
  }

  return (
    <>
      {/* Header */}
      <div className="header">
        <div className="title-box">
          <h3>Welcome!</h3>
          <p>
            This site showcases some of the projects and tutorials I’ve
            completed while learning React and JavaScript. These projects have
            given me the opportunity to deepen my understanding of web
            development and explore technologies such as Express.js, Tailwind
            CSS, Postman, MongoDB, and object-relational mapping (ORM) with
            Mongoose.js.
          </p>
        </div>
      </div>

      {/* Theme select controls */}
      <div className="theme-select">
        <h3 style={{ marginRight: "10px" }}>Switch theme:</h3>

        <ColourSwatch
          leftColour="white"
          rightColour="#333"
          handleColourChange={() => changeTheme("white", "#333")}
        />
        <ColourSwatch
          leftColour="#333"
          rightColour="white"
          handleColourChange={() => changeTheme("#333", "white")}
        />
        <ColourSwatch
          leftColour="#8eecc3"
          rightColour="#333"
          handleColourChange={() => changeTheme("#8eecc3", "#333")}
        />
        <ColourSwatch
          leftColour="#4493d7"
          rightColour="white"
          handleColourChange={() => changeTheme("#4493d7", "white")}
        />
      </div>

      <hr />

      {/* Container for project cards */}
      <div className="grid-wrapper">
        <CardContainer projects={ReactProjects} sectionTitle="React" />

        <CardContainer
          projects={JavaScriptProjects}
          sectionTitle="JavaScript"
        />
      </div>
    </>
  );
}
