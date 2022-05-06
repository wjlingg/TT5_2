import { useState } from "react";
import { Grid } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import IconButton from "@mui/material/IconButton";

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
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

view(id){
  console.log(id);

}

// user parameter contains user information, display data matching user info
function Dashboard(user) {
  const [projectData, setProjectData] = useState(dummyData);

  const displayData = projectData.map((currentProject) => {
    const { id, user_id, name, description, budget } = currentProject;

    return (
      // <div className="dashboard-data" key={id}>
      //   {id} {user_id} {name} {description} {budget}
      // </div>

      <div className="dashboard-data" key={id}>
        <Grid container>
          <Grid item className="grid-100">
            <div className="body-item">
              <Grid container className="grid-100">
                <Grid item xs={12} md={1}>
                  <div className="id">{id}</div>
                </Grid>
                <Grid item xs={12} md={1}>
                  <div className="userId">{user_id}</div>
                </Grid>
                <Grid item xs={12} md={2}>
                  <div className="userName">{name}</div>
                </Grid>
                <Grid item xs={12} md={3}>
                  <div className="description">{description}</div>
                </Grid>
                <Grid item xs={12} md={2}>
                  <div className="budget">{budget}</div>
                </Grid>
                <Grid item xs={12} md={3}>
                  {/* <div className="item-divider"></div> */}
                  <div className="icon-content">
                    <IconButton onClick={this.view.bind(this,id)}>
                      <VisibilityIcon />
                    </IconButton>
                    <IconButton onClick={() => this.edit(id)}>
                      <EditIcon />
                    </IconButton>
                    <IconButton onClick={() => this.delete(id)}>
                      <DeleteIcon />
                    </IconButton>
                  </div>
                </Grid>
              </Grid>
            </div>
          </Grid>
        </Grid>
      </div>
    );
  });

  return (
    <>
      <div>Display Data Test</div>
      <div className="dashboard">
        <div>{displayData}</div>
      </div>
    </>
  );
}

export default Dashboard;
