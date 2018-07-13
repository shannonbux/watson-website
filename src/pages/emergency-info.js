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
      This will force him to throw up. Then, call Pet Medical Center at the
      number below or the Park Animal Hospital if you are calling after hours.
    </p>
    <br />
    <h2>Emergency Contacts</h2>
    <br />
    <h4>My mom | ask me for her phone #</h4>
    <p>
      If I'm not available, my mother can answer non-medical questions via text
      or call!
    </p>
    <br />
    <h4>Pet Medical Center | 525 S. State St. | Orem, UT | (801) 225-5395</h4>
    <p>
      Dr. Susan E. Weber is Watson's regular veterinarian. Call her office for
      questions you have during regular work hours or concerns that are not
      really an emergency.
    </p>
    <br />
    <h4>
      Park Animal Hospital | 1615 South State | Provo, UT | (801) 374-0622
    </h4>
    <p /> You can call this place 24/7 in an emergency.
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
