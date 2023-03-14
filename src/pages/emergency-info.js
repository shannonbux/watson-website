import React from "react";

export default ({ data }) => (
  <div>
    <h1>Veterinarian & Emergency Info</h1>
    <p>
      Watson can eat many human foods, like any plain, lean cooked meat, rice,
      corn, berries, celery, cucumber, fish. Call a pet emergency support line if he eats any of the following:
    </p>
    <ul>
      <li>
        Any prescription drugs, vitamins, or known poisons/chemicals (i.e. rat
        poison or cleaning solutions)
      </li>
      <li>Xylitol (found in many candies and gum)</li>
      <li>Chocolate</li>
      <li>Tree nuts</li>
      <li>Grapes</li>
    </ul>
    <br />
    <h2>Emergency Contacts</h2>
    <br />
    <h4>
      Campus Veterinary Clinic | 1807 Martin Luther King Jr Blvd | Berkeley, CA
      | (510) 549-1252
    </h4>
    <p>
      Dr. Hannabess Thomson-Laing is Watson's regular veterinarian. Call her if
      you can't get ahold of me for questions you have during office hours or
      concerns that are not as urgent.
    </p>
    <br />
    <h4>
      PETS Referral Center | 1048 University Ave | Berkeley, CA | (510) 548-6684
    </h4>
    <p /> You can call this place 24/7 in an emergency to ask for advice. Watson
    has been here once, and they will let you know what you need to do.
  </div>
);

export const query = graphql`
  query AboutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
