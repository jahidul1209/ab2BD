import React, { useEffect, useState } from 'react'
import FetchAPI from './FetchAPI';
import Gallery from './Gallery';


const Products = (props) => {
    const {galleryData, price, title, propsVal, skus} = FetchAPI()
        
    const discounted = price.discounted 
    const old = price.old 
    const [propColor , setPropColor] = useState('Black')
    const [propImage , setPropImage] = useState()
    const [propSize , setPropSize] = useState('39')
    const [propPrice , setPropPrice] = useState()
    const [id , setID] = useState()
    console.log(skus)
    const color = propsVal[0]
    const size = propsVal[1]

    useEffect(()=>{
        console.log(id)
        if(id){
           skus.map(( key )=>{
              if(id == key.props[0] || id == key.props[1]){
                setPropPrice(key.price)
                console.log(key)
              }        
        })
        color.values.map((key ) =>{
                if(id == key.id ){
                    setPropImage(key.image)
                }
              
                
        })
       }
    },[id])


    const handleColor = (data) =>{
        setPropColor(`${data.title}`)
        setID(`${data.id}`)
    }
    const handleSize = (data) =>{
        setID(`${data.id}`)
        setPropSize(`${data.name}`)
    }


        return (
          <div className='container'>
            <div className='row'> 
             <div className='col-md-6'>
                 {
                  propImage ? <Gallery propImage = {propImage}/>
                  :
                   <Gallery gallery = {galleryData}/>
                 }      
             </div>
             <div className='col-md-6'>
                 <div className='product-title'>
                     <h6>Product Title : <span style={{fontSize:'14px',fontWeight:300}}>{title}</span></h6>
                 </div>
                 <div className='product-price'>
                     <h6 style={{color: '#000000',fontSize: '25px'}}>Price : { propPrice ? propPrice.discounted : discounted}<span style={{color: '#ff5200',fontSize: '30px',marginLeft: '20px', textDecoration: 'line-through'}}>{propPrice ? propPrice.old  : old}</span></h6>
                 </div>
                 <div className='gallary-details'>
                 <div className='color-variation'>
                     <p>Color: <span>{propColor}</span></p>
                     <div className='imge-vari'>
                         {
                            color &&
                             color.values.map((data) =>(    
                              <button type='button' onClick={()=>handleColor(data)} ><img src={`${data.thumb}`} alt = 'img'></img>  </button> 
                           )) 
                         }
                    </div>
                 </div>
                <div className='product-size'>
                     <p>Size : <span style={{fontSize:'18px', fontWidth:'400'}}>{propSize}</span></p>
                     <div className='size'>
                         {
                             size &&
                            size.values.map((data)=>(
                               <button type='button'  onClick={()=>handleSize(data)}><span>{data.name}</span></button> 
                            )) 
                         }
                      
                     </div>     
                 </div>
               </div>
             </div>
           </div>
        </div>
    );
    }
export default Products;