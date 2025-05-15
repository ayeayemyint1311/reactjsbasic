import {React} from "react";

function User({data, remove}) {
    const handleRemove = () => {
        remove(data.uuid)
    }
    return (
        <div className="card py-5 mb-2">
            <div className="row">
                <div className="col-2">
                    <img src={data.image} width={100} />
                </div>
                <div className="col-3">
                    <p>Phone No: {data.phone}</p>
                    <p>Cell: {data.cell}</p>
                </div>
                <div className="col-2">
                    <p>{data.name}</p>
                </div>
                <div className="col-5">
                    <button className="btn btn-primary btn-sm" onClick={handleRemove}>
                        Delete
                    </button>
                </div>
            </div>
        </div>
    )
}

export default User;