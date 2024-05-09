import React from 'react';
import Card from '../Componets/Card';

const All = ({data}) => {
    return (
        
        <div className='row'>
            {data.map((element,index)=>{
                return(
                    <div className="col">
                    <Card element={element} index={index} />
                    </div>
                )
            })}
        </div>
    );
};

export default All;