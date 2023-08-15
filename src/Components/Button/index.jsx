import React from "react";
// import Input from "../../Components/Input/Input";

const Button = ({text, colorText, colorBackground, disable,type}) => {
    return (
        <div className='flex flex-col justify-center'>
          <button 
            className={`bg-${colorBackground} text-${colorText} border w-full h-10 rounded`}
            type={type}
            disabled={disable}
          >
            {text}
          </button>
          {/* {validForm === true ?
            <p className='text-green-600'>Form sent successfully!</p>
            : validForm === false ? <p className='text-red-600'><b>Error:</b> Please fill out the form correctly</p>
              : null
          } */}
        </div>
    );
}
export default Button;