import { useState } from "react";

import "./Dashboard.scss";

// Current Task: Users must be able to view all projects under current user

// TODO: Use axios and pull data from Flask endpoint that's connected database later
const dummyData = [
  {
    id: 1,
    user_id: 4,
    name: "RTF",
    description: "Realtime Face Recognition",
    budget: 12000,
  },
  {
    id: 2,
    user_id: 1,
    name: "SWT",
    description: "Smart Watch Tracker",
    budget: 80000,
  },
  {
    id: 3,
    user_id: 2,
    name: "ULS",
    description: "Upgrade Legacy System",
    budget: 11000,
  },
];

// user parameter contains user information, display data matching user info
function Dashboard(user) {
  const [projectData, setProjectData] = useState(dummyData);

  const displayData = projectData.map((currentProject) => {
    const { id, user_id, name, description, budget } = currentProject;

    return (
      <h3>
        ID:{id} {user_id} {name} {description} {budget}
      </h3>
    );
  });

  return (
    <>
      <div>Display Data Test</div>
      <div>{displayData}</div>
    </>
  );
}

export default Dashboard;
