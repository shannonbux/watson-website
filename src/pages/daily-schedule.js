import React from "react";

export default ({ data }) => {
  console.log(data);

  return (
    <div>
      <h1>Watson's Daily Schedule</h1>
      <table>
        <thead>
          <tr>
            <th>Activity</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {data.allContentfulDailySchedule.edges.map(({ node }, index) => (
            <tr key={index}>
              <td>{node.activityName}</td>
              <td>{node.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <br />
      <div>
        <h3>A Note About Food</h3>
        <p>
          At both breakfast and dinner time, Watson eats 1/2 C. of{" "}
          <a href="https://www.hillspet.com/dog-food/sd-adult-advanced-fitness-small-bites-lamb-meal-and-rice-recipe-dog-food-dry">
            this Hill's Science Diet
          </a>{" "}
          food. Sometimes he won't eat if he's not hungry; in that case, no need
          to worry or force him. Sometimes he also won't eat unless you put a
          tablespoon of very hot water into the food to make it soft.
        </p>
      </div>
    </div>
  );
};

export const query = graphql`
  query ScheduleQuery {
    allContentfulDailySchedule(sort: { fields: [order] }) {
      edges {
        node {
          activityName
          time
        }
      }
    }
  }
`;
