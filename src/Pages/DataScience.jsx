import React from 'react';
import Card from './../Componets/Card';

const DataScience = ({data}) => {
    const dsdata = data.filter((ele)=> ele.title==="Data Science");
    return (
        <div className='row'>
            {
            dsdata.map((element,index)=>{
                return(
                    <div className="col col-md-3 p-4">
                    <Card element={element} index={index}/>
                    </div>
                )
            })}
        </div>
    );
};

export default DataScience;