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
          At either breakfast or dinner time, Watson eats 1 C. of{" "}
          <a href="https://www.chewy.com/hills-prescription-diet-id-digestive/dp/167965">
            this Hill's Science Diet
          </a>{" "}
          food. We just leave it out 1 C. in a bowl at all times and he chooses when he wants to eat.
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
