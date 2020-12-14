// import React, { useState } from "react";

// const GenderRadio = ({gender}) => {
const Radio = ({name, options, value, handleChange}) => {
    return options.map((option, i) => {
        return <div key={i} className="form-check">
            <label className="form-check-label">
                <input
                    className="form-check-input"
                    type="radio"
                    name={name}
                    value={option}
                    checked={option === value}
                    onChange={e => handleChange(e.target.value)}
                />
                {option}
            </label>
        </div>
    })
}

export default Radio;



