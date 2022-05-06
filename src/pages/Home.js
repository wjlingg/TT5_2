import BasePageComponent from '../components/BasePageComponent';
import "./Home.scss"


export default class Home extends BasePageComponent {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    
    render() {
        return super.render(
            <div className="Home">
                <p className="">Body</p>
            </div>
        )
    }
}