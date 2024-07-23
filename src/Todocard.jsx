import PropType from "prop-types";
const Todotask = ({ id, taskname, taskdescription, deletetask, filtertask, status, loadeditbutton }) => {
    return (
        <>
            <div className="card" style={{ width: "18rem", display: "inline-block", margin: 40, backgroundColor: "lightgreen" }}>
                <div className="card-body">
                    <h6 className="card-title">Name : {taskname}</h6>
                    <p className="card-text">Description : {taskdescription}</p>
                    <label htmlFor="status">Status </label>
                    <select name="status" id="status" style={{ marginLeft: 10 }} value={status} onChange={() => filtertask(id)}>
                        <option value="Not Completed" >Not Completed</option>
                        <option value="Completed" >Completed</option>
                    </select><br />
                    <div style={{ margin: "25px 0px 0px 120px" }}>
                        <button style={{ margin: 8, backgroundColor: "lightseagreen", borderRadius: 5 }} onClick={() => loadeditbutton({ taskname, taskdescription, id })}>Edit</button>
                        <button style={{ backgroundColor: "brown", borderRadius: 5 }} onClick={() => deletetask(id)}>Delete</button>
                    </div>
                </div>
            </div >
        </>
    )
}
Todotask.propTypes = {
    id: PropType.string,
    taskname: PropType.string,
    taskdescription: PropType.string,
    deletetask: PropType.func,
    filtertask: PropType.func,
    status: PropType.string,
    loadeditbutton: PropType.func,
}
export default Todotask;