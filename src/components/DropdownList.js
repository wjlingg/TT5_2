import React from 'react'

export const Dropdown = (props) => (
  <div className="form-group">
    <strong>{props.name}</strong>
    <select
      className="form-control"
      name="{props.name}"
      onChange={props.onChange}
    >
    {/* <option defaultValue>Select {props.name}</option> */}
      <option defaultValue>Select one</option>
      {props.options.map((item, index) => (
        <option key={index} value={item.id}>
          {item.name}
        </option>
      ))}
    </select>
  </div>
)

export default class DropdownList extends React.Component {
  constructor() {
    super()
    this.state = {
      list: [],
      chosenValue: '',
    }
  }

  componentDidMount() {
    //   call for api here
    fetch('')
      .then((response) => response.json())
      .then((item) => this.setState({ list: item }))
  }

  onDropdownChange = (e) => {
    this.setState({ chosenValue: e.target.value })
  }

  render() {
    return (
      <div>
        <Dropdown
          name={this.state.name}
          options={this.state.list}
          onDropdownChange={this.onDropdownChange}
        />
      </div>
    )
  }
}