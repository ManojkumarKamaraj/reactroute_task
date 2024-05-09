import React from 'react';
import Card from '../Componets/Card';

const FullStack = ({data}) => {
    const fsddata = data.filter((ele)=>ele.title==="Full Stack Development")
    return (
        <div className='row'>
            {
                fsddata.map((element,index)=>{
                    return(
                        <div className=" col col-md-3  p-4">
                    <Card element={element} index={index}/>
                    </div>
                    )
                })
            }
        </div>
    );
};

export default FullStack;