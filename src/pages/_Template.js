import BasePageComponent from '../components/BasePageComponent';
import "./_Template.scss"


export default class _Template extends BasePageComponent {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        return super.render(
            <div className='_Template'>
            </div>
        )
    }
}