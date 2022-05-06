import BasePageComponent from "../components/BasePageComponent";
import "./Login.scss";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import CircularProgress from "@mui/material/CircularProgress";
import { ButtonRed } from "../Globals";
import Axios from "axios";

export default class Login extends BasePageComponent {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      isloading: false,
      errorEmail: "",
      errorPassword: "",
      success: false,
      error: false,
      message: "",
    };
  }
  handleClickShowPassword = () => {
    this.setState({
      showPassword: !this.state.showPassword,
    });
  };
  handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  textChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  login = async () => {
    this.setState({ isloading: true });
    if (this.state.email === "" || this.state.password === "") {
      if (this.state.email === "") {
        this.setState({ errorEmail: "Please enter an email." });
      } else {
        this.setState({ errorEmail: "" });
      }
      if (this.state.password === "") {
        this.setState({ errorPassword: "Please enter a password." });
      } else {
        this.setState({ errorPassword: "" });
      }
      this.setState({ isloading: false });
      return;
    }

    let data = this.state;
    console.log(data);

    Axios.get("http://localhost:3000/login", data).then((result) => {
      console.log(result);
      this.setState({
        success: true,
        error: false,
        message: "Login Successful",
      });
      window.localStorage.setItem(
        "@userdata",
        JSON.stringify(result.data.data)
      );
      this.moveNext("/Home");
    });
  };

  render() {
    return super.render(
      <div className="login">
        <div className="container">
          <div className="card">
            <div className="card-body">
              <p className="startedText">Welcome Back</p>

              <p className="subtext">Log in to your account</p>

              <div className="form">
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <FormControl className="form-control" variant="outlined">
                    <OutlinedInput
                      id="email"
                      type="email"
                      name="email"
                      className="input"
                      variant="outlined"
                      fullWidth
                      value={this.state.email}
                      onChange={this.textChange}
                    />
                    <div className="errorMessage">{this.state.errorEmail}</div>
                  </FormControl>
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <FormControl
                    className="form-control password"
                    variant="outlined"
                  >
                    <OutlinedInput
                      className="input"
                      name="password"
                      id="password"
                      type={this.state.showPassword ? "text" : "password"}
                      value={this.state.password}
                      onChange={this.textChange}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={this.handleClickShowPassword}
                            onMouseDown={this.handleMouseDownPassword}
                            edge="end"
                          >
                            {this.state.showPassword ? (
                              <VisibilityOff />
                            ) : (
                              <Visibility />
                            )}
                          </IconButton>
                        </InputAdornment>
                      }
                    />
                    <div className="errorMessage">
                      {this.state.errorPassword}
                    </div>
                  </FormControl>
                </div>
                {this.state.isloading === false && (
                  <ButtonRed
                    variant="contained"
                    color="primary"
                    className="submitBtn"
                    onClick={this.login}
                  >
                    Log in
                  </ButtonRed>
                )}
                {this.state.isloading === true && (
                  <ButtonRed
                    variant="contained"
                    color="primary"
                    className="loading-button"
                    disabled={true}
                  >
                    <CircularProgress className="loading" />
                    Log in
                  </ButtonRed>
                )}
              </div>
              <Snackbar
                open={this.state.success}
                autoHideDuration={6000}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "center",
                }}
                onClose={() => this.setState({ success: false })}
                a
              >
                <Alert variant="filled" severity="success">
                  {this.state.message}
                </Alert>
              </Snackbar>
              <Snackbar
                open={this.state.error}
                autoHideDuration={6000}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "center",
                }}
                onClose={() => this.setState({ error: false })}
                a
              >
                <Alert variant="filled" severity="error">
                  {this.state.message}
                </Alert>
              </Snackbar>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
