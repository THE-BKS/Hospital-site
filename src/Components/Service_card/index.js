import React from 'react';
import "./styles.css";

function Service_card() {
    return (
        <div className="card-container">
            <div className="card-left">
                Card Left
                <ul>
                    <li>Coffee</li>
                    <li>Tea</li>
                    <li>Milk</li>
                    <li>Tea</li>
                    <li>Milk</li>
                </ul>
            </div>
            <div className="card-right">
                Card Right
                <ul>
                    <li>Coffee</li>
                    {/* <li>Coffee</li> */}
                    <li>Green tea</li>
                    <li>Milk</li>
                    <li>Tea</li>
                    <li>Milk</li>
                </ul>
            </div>
        </div>
    )
}

export default Service_card
