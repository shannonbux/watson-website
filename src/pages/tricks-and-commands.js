import React from "react";

export default ({ data }) => {
  const tricks = data.allContentfulTricksCommands.edges;
  console.log(tricks);
  console.log(data);

  return (
    <div>
      <h1>Tricks and Commands</h1>
      {tricks.map(trick => (
        <div>
          <br />
          <h2>{trick.node.commandPhrase}</h2>
          <div
            dangerouslySetInnerHTML={{
              __html: trick.node.commandDescription.childMarkdownRemark.html
            }}
          />
          {trick.node.exampleOfTheCommandInAction && (
            <img
              src={trick.node.exampleOfTheCommandInAction[0].file.url}
              width={350}
            />
          )}
          {trick.node.exampleOfTheCommandInAction && (
            <p>{trick.node.exampleOfTheCommandInAction[0].description}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export const query = graphql`
  query CommandsQuery {
    allContentfulTricksCommands {
      edges {
        node {
          commandPhrase
          commandDescription {
            childMarkdownRemark {
              html
            }
          }
          exampleOfTheCommandInAction {
            file {
              url
              fileName
              contentType
            }
            description
          }
        }
      }
    }
  }
`;
