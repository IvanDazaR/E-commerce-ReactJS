import React from 'react';
import { XCircleIcon, CheckCircleIcon } from '@heroicons/react/24/solid';

const Input = ({regex, tipo, label, placeholder, name, legend, state, setState}) => {
	const onChange = (event) => {
        setState({
            ...state,
            field: event.target.value,
        })
      
    }
    const validation = () => {
        if (regex.test(state.field)) {
            setState({
                ...state,
                valid: 'true'
            })
        } else {
            setState({
                ...state,
                valid: 'false'
            })
        }
    }
    
	return (
		<div>
			<label className={`${state.valid === 'false' && 'text-red-600'}`} htmlFor={name}>{label}</label>
			<div className='relative'>
				<input 
                    className={`${state.valid === 'false' && 'border-red-600'} border w-full rounded-lg p-2 mb-4 focus:outline-none`}
					type={tipo}
					placeholder={placeholder} 
					id={name}
					value={state.field}
					onChange={onChange}
					onKeyUp={validation}
					onBlur={validation}
					valid={state.valid}
				/>
                <div className={`${state.valid === 'false' ? 'opacity-100 text-red-600' : state.valid === 'true' ? 'opacity-100 text-green-600' : 'opacity-0'} absolute right-2 bottom-6 `}>
                    { state.valid === 'true' ?
                        <CheckCircleIcon className='h-6 w-6 cursor-pointer'/>
                        :
                        <XCircleIcon className='h-6 w-6 cursor-pointer'/>
                    }
                </div>
			</div>
                <p className={`${state.valid === 'false' ? 'flex' : 'hidden'} text-red-600`}> 
                    {legend} 
                </p>
		</div>
	);
}
 
export default Input;