import React from "react"
// import 'C:\Users\dariu\OneDrive\Desktop\threed\threeD\src\components\imageLinkForm\ImageLinkForm.css'
import './ImageLinkForm.css'

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
    return (
        <div className="ImageLinkForm ">
            <p>{'This will do something. I have yet to decide what. 😁'}</p>
            <div className="textButtonShadow centerReact">
                <div className="centerReact">
                    <input type="text" onChange={ onInputChange }/>
                    <button onClick={ onButtonSubmit }>Detect</button>
                </div>
            </div>
        </div>
    )
}

export default ImageLinkForm;