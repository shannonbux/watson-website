import React from "react";

export default ({ data }) => (
  <div>
    <h1>Emergency Info</h1>
    <p>
      Watson can eat many human foods, like any plain, lean cooked meat, rice,
      corn, berries, celery, cucumber, fish. The important things to avoid are
      as follows:
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
    <p>
      If you know he ate something in the list above, you can squirt/pour one
      tablespoon of hydrogen peroxide into his mouth so that he swallows it.
      This will force him to throw up. Then, call someone from the emergency
      contacts below to ask what to do next!
    </p>
    <br />
    <h2>Emergency Contacts</h2>
    <br />
    <h4>Me</h4>
    <p>
      Call me first! My cell phone is 435-901-1640. I can receive calls and
      texts there; calls are better for emergencies.{" "}
    </p>
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
