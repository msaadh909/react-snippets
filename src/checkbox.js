import React from 'react';

const Checkbox = ({name, wfh, setEmp}) => {
    // console.dir(props, "=>>>>>>>>>>>>>>>> props");
    return (
        <label>
            <input
                type="checkbox"
                name={name}
                onChange={setEmp}
                checked={ wfh }
                // checked={ this.state.male === 'male' }
            />
            { name }
        </label>
    )
}

export default Checkbox;



