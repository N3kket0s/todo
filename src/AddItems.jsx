const AddItems = ({onAdd}) => {
    let value
    return(
        <div className="row">
            <div className="col-5">
                <input 
                className="form-control" type="text" 
                placeholder="Add element..."/>
            </div>
            <div className="col-6">
                <button className="btn btn-outline-info" onClick={() => onAdd('test')}>
                    добавить
                </button>
            </div>
        </div>
    )
}

export default AddItems;