import * as React from "react"
import { Link } from "gatsby"
import { Container, Paragraph, Section } from "../components/layout";

const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}

const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
}

// markup
const NotFoundPage = () => {
  return (
    <Section>
      <title>Not found</title>
      <Container>
        <h1 style={headingStyles}>Seite nicht gefunden ...</h1>
        <Paragraph>
          Sorry{" "}
          <span role="img" aria-label="Pensive emoji">
          😔
        </span>{" "}
          we couldn’t find what you were looking for.
          <br />
          {process.env.NODE_ENV === "development" ? (
            <>
              <br />
              Try creating a page in <code style={codeStyles}>src/pages/</code>.
              <br />
            </>
          ) : null}
          <br />
          <Link to="/">Zurück zur Startseite</Link>.
        </Paragraph>
      </Container>
    </Section>
  )
}

export default NotFoundPage
