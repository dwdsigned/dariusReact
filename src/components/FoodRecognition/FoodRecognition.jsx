import React from "react"
import './FoodRecognition.css'

const FoodRecognition = ({ imageUrl }) => {
    return (
        <div className="centerReact">
            <img src={imageUrl} alt={``} width={`500`} height={`auto`} />
        </div>
    )
}















export default FoodRecognition;