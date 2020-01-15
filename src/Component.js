import React from 'react'
import photoInSrc from './photoInSrc.jpg'
function Component (){
    return (
        <div className= "component">
            <img src={photoInSrc}  alt="logo"  className="img"/>
            <p className="paragraphe">Price</p>
            <input value="1" className="input"></input>
        </div>
    );
}
export default Component;