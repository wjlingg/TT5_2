import BasePageComponent from "../components/BasePageComponent";
import React from "react";
import "./Edit.scss";
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
import 'bootstrap/dist/css/bootstrap.min.css'
import DropdownList from '../components/DropdownList'

export default class Edit extends BasePageComponent {
    constructor(props) {
        super(props);

        this.state = {
            edit_Data: "",
            isloading: false,
            message: "",
            items: [],
        };
    }

    handleItemChanged(i, event) {
        var items = this.state.items;
        items[i] = event.target.value;

        this.setState({
            items: items,
        });
    }

    render() {
        return super.render(
            <div className="Edit">
                <div className="container">
                    <div className="card">
                        <div className="card-body">
                            <table className="edit">


                                <div className="form">
                                    <div className="form-group">
                                        <p className="title">Edit Business Expenses</p>

                                        <label htmlFor="chooseProject">Choose your project</label>
                                        <div className="container_drop">
                                            <DropdownList />
                                        </div>
                                        <label htmlFor="add_Data">Edit your expenses</label>
                                        <FormControl className="form-control" variant="outlined">
                                            <OutlinedInput
                                                id="edit_Data"
                                                type="edit_Data"
                                                name="edit_Data"
                                                className="input"
                                                variant="outlined"
                                                fullWidth
                                                value={this.state.edit_Data}
                                                onChange={this.textChange}
                                            />
                                        </FormControl>
                                    </div>
                                    {this.state.isloading === false && (
                                        <ButtonRed
                                            variant="contained"
                                            color="primary"
                                            className="submitBtn"
                                            onClick={this.edit_Data}
                                        >
                                            Confirm Edit
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
                                            Confirm Edit
                                        </ButtonRed>
                                    )}
                                </div>
                            </table>
                            <hr />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
