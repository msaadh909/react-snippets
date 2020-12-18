const Movebox = (props) => {
    const {employee, updateEmployeeStatus} = props
    
    return (
        <p>
            <label htmlFor={employee}>
                <input
                    type="checkbox"
                    value={employee}
                    onChange={updateEmployeeStatus}
                />
                {employee}
            </label>
        </p>
    )
}

export default Movebox;