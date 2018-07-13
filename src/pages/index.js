import React from "react";
import watson from "./watson-welcome.png";

console.log(watson);

export default () => (
  <div>
    <h3>Welcome!</h3>
    <p>
      If you have arrived at this site, it's probably because you are
      babysitting Watson. By clicking on the links to different pages, you'll
      find his daily schedule for sleep, walks, and eating, and a list of
      command phrases that he understands. You will also find a collection of
      photos that show Watson's professional capabilities :) Enjoy!
    </p>
    <img src={watson} alt="Cute picture of Watson" width={350} />
  </div>
);
