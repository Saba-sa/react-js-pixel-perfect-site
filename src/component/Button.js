import React from 'react';


function Button({ CustomclassName, text,img,onClick }) {
 return (
    <div onClick={onClick} className={`${CustomclassName ? CustomclassName : ``} w-[372px] h-[51px] flex justify-center items-center rounded-lg bg-green font-semibold text-sm text-white`}>
       {img ? <img src={img} alt="img" className='pr-2' /> : ""} {text}
    </div>
 );
}

export default Button;