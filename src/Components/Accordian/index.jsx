import { useState } from "react"
import data from './data'
import "./styles.css"

export default function Accordian (){

    const [selecter, setSelecter] = useState(null);
    const [enableMultiSelection , setEnableMultiSelection] = useState(false);
    const [multiple, setMultiple] = useState([]);

    function handleSingleSelection(getCurrentId){
        setSelecter(getCurrentId === selecter ? null : getCurrentId);
    }

    function handleMultiSelection(getCurrentId){
        let cpyMultiple = [...multiple];
        const findIndexOfCurrentId = cpyMultiple.indexOf(getCurrentId);

        
        if(findIndexOfCurrentId === -1) cpyMultiple.push(getCurrentId);
        else cpyMultiple.splice(findIndexOfCurrentId, 1)
        setMultiple(cpyMultiple);
    }

    

    return(
        <div className="wrapper">
            <button className={enableMultiSelection ? "Enabled-button" : "Disabled-Button"} onClick={() => setEnableMultiSelection(!enableMultiSelection)}>Enable Multiple Selections</button>
            <div className="accordian">
                {data && data.length > 0 ? 
                (data.map((dataItem) => (<div className="items">
                    <div onClick={enableMultiSelection ? () => handleMultiSelection(dataItem.id) : () => handleSingleSelection(dataItem.id)} className="Title">
                        <h3>{dataItem.question}</h3>
                        
                    </div>
                    {
                        selecter === dataItem.id || multiple.indexOf(dataItem.id) !== -1 ? 
                        <div className="content">{dataItem.answer}</div>
                        : null
                    }


                </div>))): (<div>No data found</div>)}
            </div>
        </div>
    )
}