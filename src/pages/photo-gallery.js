import React from "react";

export default ({ data }) => {
  console.log(data);
  const photos = data.allContentfulPhotoGallery.edges[0].node.photos;
  console.log(photos);

  return (
    <div>
      <h1>Photo Gallery</h1>
      {photos.map(photo => (
        <div>
          <br />
          <br />
          <img src={photo.file.url} width={350} />
          <h3>{photo.title}</h3>
        </div>
      ))}
    </div>
  );
};

export const query = graphql`
  query PhotoQuery {
    allContentfulPhotoGallery {
      edges {
        node {
          photos {
            title
            description
            file {
              url
            }
          }
        }
      }
    }
  }
`;
