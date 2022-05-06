import BasePageComponent from "../components/BasePageComponent";
import "./Home.scss";

import Dashboard from "../components/Dashboard";

export default class Home extends BasePageComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return super.render(
      <div className="Home">
        <Dashboard />
      </div>
    );
  }
}
