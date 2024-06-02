import React from 'react';

const InputGroup = ({type, name, placeholder, messageError}) => {
  return (
    <div className='input-group'>
        <input type={type} name={name} placeholder={placeholder} required={false}/>
        <p className='messageError'>{messageError}</p>
    </div>
  )
}

export default InputGroup;
