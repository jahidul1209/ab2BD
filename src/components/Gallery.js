import React from 'react';

const Gallery = (props) => {

    return (
        <div className='gallery'>
            {
                props.propImage  ?
                    <a href={`${ props.propImage}`}><img src={`${ props.propImage}`} alt= 'img'></img></a>
                 :  
              
                    props.gallery.map((data)=>(
                 <a href={`${data.url}`}><img src={`${data.url}`} alt= 'img'></img></a>
               )) 
            }
                
                 
        </div>
    );
};

export default Gallery;