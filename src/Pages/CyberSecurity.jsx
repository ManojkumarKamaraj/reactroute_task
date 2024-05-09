import React from 'react';
import Card from '../Componets/Card';

const CyberSecurity = ({data}) => {
    const csdata =data.filter((ele)=>ele.title==="Cyber Security");
    return (
        <div className='row'>
            {
                csdata.map((element,index)=>{
                    return(
                        <div className="col col-md-3 p-4">
                        <Card element={element} index={index} />
                        </div>
                    )
                })
            }
        </div>
    );
};

export default CyberSecurity;