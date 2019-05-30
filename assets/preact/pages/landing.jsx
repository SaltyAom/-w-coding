import { h, Fragment } from 'preact'
import Koishi from '../../img/koishi.gif'
import Icon from '../../img/favX192.png'

const Landing = () => {
    return(
        <Fragment>
            <img id='koishi' src={Koishi} alt="Random anime girl gif" />
            <h1 id='title'>Under construction! <br /> Please visit later, UMU</h1>
        </Fragment>
    );
}

export default Landing;