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
  const userData = { userID: 2, userName: "Hiyoshi" };

  const [projectData, setProjectData] = useState([]);
  const [expenseData, setExpenseData] = useState([]);
  const [showExpense, setShowExpense] = useState(false);

  const getProjects = () => {
    Axios.post("http://localhost:3001/project", userData).then((result) => {
      setProjectData(result.data);
      console.log("Retrieved Project Data");
    });
  };

  const getExpenses = () => {
    Axios.post("http://localhost:3001/expense", userData).then((result) => {
      setExpenseData(result.data);
      console.log("Retrieved Expense Data");
    });
  };

  const checkExpense = () => {
    console.log(expenseData);
  };

  useEffect(() => {
    getProjects();
    getExpenses();
  }, []);

  const displayExpenses = expenseData.map((currentExpense) => {
    const {
      id,
      project_id,
      category_id,
      name,
      description,
      amount,
      created_at,
      created_by,
      updated_at,
      updated_by,
    } = currentExpense;

    return (
      <div className="dashboard-data" key={id}>
        <Grid container>
          <Grid item className="grid-100">
            <div className="body-item">
              <Grid container className="grid-100">
                <Grid item xs={12} md={2}>
                  <div className="name">{name}</div>
                </Grid>
                <Grid item xs={12} md={4}>
                  <div className="description">{description}</div>
                </Grid>
                <Grid item xs={12} md={2}>
                  <div className="amount">{amount}</div>
                </Grid>
                <Grid item xs={12} md={1}>
                  <div className="created_by">{created_by}</div>
                </Grid>
                <Grid item xs={12} md={1}>
                  <div className="updated_by">{updated_by}</div>
                </Grid>
                <Grid item xs={12} md={2}>
                  {/* <div className="item-divider"></div> */}
                  <div className="icon-content">
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

  const displayProjects = projectData.map((currentProject) => {
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
                    <IconButton
                      onClick={() => {
                        setShowExpense(!showExpense);
                      }}
                    >
                      <VisibilityIcon />
                    </IconButton>
                  </div>
                </Grid>
              </Grid>
            </div>
            {showExpense && (
              <div className="body-item">
                <Grid container>
                  <Grid item xs={12} md={12}>
                    <h3>Expenses</h3>
                    {displayExpenses}
                  </Grid>
                </Grid>
              </div>
            )}
          </Grid>
        </Grid>
      </div>
    );
  });

  return (
    <>
      <div> Sample: Current userID: {userData.userID}</div>
      <div className="dashboard">
        <div>{displayProjects}</div>
      </div>
    </>
  );
}

export default Dashboard;
