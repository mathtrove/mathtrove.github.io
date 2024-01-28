import './Topics.css'
import { Link } from 'react-router-dom';
import TopicBox from '../components/small_comps/TopicBox';
const Topics = ()=>{
    return(
        <>
        <section id="topics">
            <h1 className='main-h1'>Topics</h1>
            <div className="topics-container">
                <Link to="./trig"><TopicBox name="Trigonometry" icon="trig"/></Link>
                <Link to="./calculus"><TopicBox name="Calculus" icon="calculus"/></Link>
                <Link to="./algebra"><TopicBox name="Algebra" icon="algebra"/></Link>
                <Link to="./arithmetic"><TopicBox name="Arithmetic" icon="arith"/></Link>
                <Link to="./logarithm"><TopicBox name="Logarithms" icon="log"/></Link>
                <Link to="./number-theory"><TopicBox name="Number Theory" icon="gen"/></Link>
                <Link to="./geometry"><TopicBox name="Geometry" icon="geom"/></Link>
                <Link to="./discrete"><TopicBox name="Discrete Math" icon="discrete"/></Link>
                <Link to="./vectors"><TopicBox name="Vectors" icon="vect"/></Link>
                
                
                
               
               
                
            </div>
        </section>
        </>
    )
}

export default Topics;