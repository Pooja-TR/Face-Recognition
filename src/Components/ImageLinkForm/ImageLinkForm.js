import React from 'react';
import './ImageLinkForm.css'

const ImageLinkForm = ({ onInputChange, onSubmit }) => {
    return (
        <div >
            <p className='white f3'>
                {'This Magic App will detect faces in your pictures. Give it a Try !'}
            </p>
            <div className='center'>
                <div className='center form pa4 br3 shadow-r'>
                    <input className='f4 pa2 w-70 center' type="text" onChange={onInputChange} />
                    <button className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple'
                        onClick={onSubmit}
                    >Detect </button>
                </div></div>
        </div>
    );
}

export default ImageLinkForm;