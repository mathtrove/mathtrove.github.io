import { useState } from 'react'
import './TopicsStyle.css'
import emptyState from '../../assets/formulaempty.png';
import formulaData from '../../elements/misc/AlgebraData';

const AlgebraPage = () => {
    const noFormulaSelected = () =>{
        return (
            <>
            <img src={emptyState} alt="" />
            <p className='p-disabled'>The information about your formula will show here</p>
            </>
        )
    }
    const [updateFormulaInfo, setUpdateFormulaInfo] = useState(noFormulaSelected);
    const formulaInfoToggle = i => {
        if(updateFormulaInfo === i){
            return setUpdateFormulaInfo(noFormulaSelected);
        }
        setUpdateFormulaInfo(formulaData[i].info);
        document.querySelector(".formula-right").classList.add("selected");
    }
    return(
        <>
        <section id="topic-page">
            <h1 className='main-h1'>Algebra formulas</h1>
            <em>{formulaData.length} formulas found.</em>
            <main style={{display: 'flex', marginTop: '5rem'}}>
                <section className="formula-left">
                    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderRadius: '24px', overflow: 'hidden'}}>
                        <input type="search" name="formulaSearch" id="formula-search" placeholder='Ctrl + K to search...' />
                        <span className='material-symbols-outlined'>search</span>
                    </div>
                    {
                        formulaData.map((data, i) => {
                            return(
                            <div className='formula-box' key={data.sno} onClick={()=> formulaInfoToggle(i)}>
                                <strong>{data.head}</strong>
                                <p>{data.desc}</p>
                            </div>
                            )
                        })
                    }
                </section>
                <section className='formula-right'>
                    <div className="formula-infocontainer">
                        {updateFormulaInfo}
                    </div>
                </section>
            </main>
        </section>
        <p></p>
        </>
    )
}

export default AlgebraPage;