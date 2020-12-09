import React from 'react';
import './ImageLinkForm.css'


const ImageLinkForm = ({ onInputChange ,onButtonSubmit}) => {
    return (
        <div className='f3'>
          <p>This magic brain will detect faces in your pictures .give it a try</p>
          <div className='center'>
          <div className='form center pa4 shadow-5 br3'>
          <input type='text'className='f4 pa2 w-70 center'onChange={onInputChange}/>
          <button className='w-30 grow dib ink f4 pv2 ph3 br2 white bg-light-purple'
          onClick={onButtonSubmit}
          >Detect
          </button>
          </div>
          </div>
        </div>
    );
}
export default ImageLinkForm;