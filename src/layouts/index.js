import React from "react";
import g from "glamorous";
import { css } from "glamor";
import Link from "gatsby-link";

import { rhythm } from "../utils/typography";

const linkStyle = css({ marginRight: "30px" });

export default ({ children, data }) => (
  <g.Div
    margin={`0 auto`}
    maxWidth={800}
    padding={rhythm(2)}
    paddingTop={rhythm(1.5)}
  >
    <Link to={`/`}>
      <g.H3 marginBottom={rhythm(2)} display={`inline-block`}>
        {data.site.siteMetadata.title}
      </g.H3>
    </Link>
    <br />
    <div>
      <Link className={linkStyle} to={`/emergency-info/`}>
        Vet and Emergency Info
      </Link>
      <Link className={linkStyle} to={`/daily-schedule/`}>
        Daily schedule
      </Link>
      <Link className={linkStyle} to={`/tricks-and-commands/`}>
        Tricks and Commands
      </Link>
      <Link className={linkStyle} to={`/photo-gallery/`}>
        Photo Gallery
      </Link>
    </div>
    <br />
    <br />
    <div>{children()}</div>
  </g.Div>
);

export const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
