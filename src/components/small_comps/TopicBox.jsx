import './TopicBox.css'
import trig from '../../assets/icons/trig_icon.svg'
import algebra from '../../assets/icons/algebra_icon.svg'
import geom from '../../assets/icons/geom_icon.svg'
import gen from '../../assets/icons/gen_icon.svg'
import arith from '../../assets/icons/artth_icon.svg'
import log from '../../assets/icons/log_icon.svg'
import calculus from  '../../assets/icons/calculus_icon.svg'
import discrete from  '../../assets/icons/discrete_icon.svg'
import vect from '../../assets/icons/vect_icon.svg'

const TopicBox = ({name, icon})=>{
    switch(icon){
        case "trig": icon = trig; break;
        case "algebra": icon = algebra;break;
        case "geom": icon = geom;break;
        case "gen": icon = gen;break;
        case "arith": icon = arith;break;
        case "log": icon = log;break;
        case "calculus": icon = calculus;break;
        case "discrete": icon = discrete;break;
        case "vect": icon = vect;break;

    }
    return(
        <>
        <div className="topic-topic-box">
            <img src={icon} alt="icon" />
            <plaintext>{name}</plaintext>
        </div>
        </>
    )
}
export default TopicBox;