import BasePageComponent from "../components/BasePageComponent";
import "./Add.scss";
import { OutlinedInput } from '@mui/material';
import FormControl from "@mui/material/FormControl";
// import OutlinedInput from "@mui/material/OutlinedInput";
import React from 'react';
import "./Add.scss";
import CircularProgress from "@mui/material/CircularProgress";
import { ButtonRed } from "../Globals";
export default class DynamicTable extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            add_Data: "",
            isloading: false,
            message: "",
            items: []
        }
    }

    updateMessage(event) {
        this.setState({
            message: event.target.value
        });
    }

    handleClick() {
        var items = this.state.items;

        items.push(this.state.message);

        this.setState({
            items: items,
            message: ""
        });
    }

    handleItemChanged(i, event) {
        var items = this.state.items;
        items[i] = event.target.value;

        this.setState({
            items: items
        });
    }

    handleItemDeleted(i) {
        var items = this.state.items;

        items.splice(i, 1);

        this.setState({
            items: items
        });
    }

    renderRows() {
        var context = this;

        return this.state.items.map(function (o, i) {
            return (
                <tr key={"item-" + i}>
                    <td>
                        <input
                            type="text"
                            value={o}
                            onChange={context.handleItemChanged.bind(context, i)}
                        />
                    </td>
                    <td>
                        <button
                            onClick={context.handleItemDeleted.bind(context, i)}
                        >
                            Delete
                        </button>
                    </td>
                </tr>
            );
        });
    }

    render() {
        return (
            <div className="data">
                <div className="container">
                    <table className="add">
                        <p className="title">Add Expense</p>

                        <div className="form">
                            <div className="form-group">
                                <label htmlFor="add_Data">Add</label>
                                <FormControl className="form-control" variant="outlined">
                                    <OutlinedInput
                                        id="add_Data"
                                        type="add_Data"
                                        name="add_Data"
                                        className="input"
                                        variant="outlined"
                                        fullWidth
                                        value={this.state.add_Data}
                                        onChange={this.textChange}
                                    />
                                </FormControl>
                            </div>
                            {this.state.isloading === false && (
                                <ButtonRed
                                    variant="contained"
                                    color="primary"
                                    className="submitBtn"
                                    onClick={this.add_Data}
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
                                    Add Expense
                                </ButtonRed>
                            )}
                        </div>

                        <tbody>
                            {this.renderRows()}
                        </tbody>
                    </table>
                    <hr />
                    <input
                        type="text"
                        value={this.state.message}
                        onChange={this.updateMessage.bind(this)}
                    />
                    <button
                        onClick={this.handleClick.bind(this)}
                    >
                    </button>
                </div>
            </div>
        );
    }
}