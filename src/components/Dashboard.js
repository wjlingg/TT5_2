import { useState, useEffect } from "react";
import Axios from "axios";

import { Grid } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import IconButton from "@mui/material/IconButton";

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import "./Dashboard.scss";

// Current Task: Users must be able to view all projects under current user

// TODO: Use axios and pull data from Flask endpoint that's connected database later

// user parameter contains user information, display data matching user info
function Dashboard() {
  // Test data
  const userData = { userID: 1, userName: "Hiyoshi" };

  const [projectData, setProjectData] = useState([]);

  const getProjects = () => {
    Axios.post("http://localhost:3001/project", userData).then((result) => {
      setProjectData(result.data);
    });
  };

  useEffect(() => {
    getProjects();
  }, []);

  const displayData = projectData.map((currentProject) => {
    const { id, user_id, name, description, budget } = currentProject;

    return (
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
                    <IconButton>
                      <VisibilityIcon />
                    </IconButton>
                    <IconButton>
                      <EditIcon />
                    </IconButton>
                    <IconButton>
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
      <div>Sample: Current userID: {userData.userID}</div>
      <div className="dashboard">
        <div>{displayData}</div>
        <button onClick={() => getProjects()}>Get Data</button>
      </div>
    </>
  );
}

export default Dashboard;
