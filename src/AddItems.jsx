import { useState } from "react"

const AddItems = ({onAdd}) => {
    const [value, setValue] = useState('');

    const handleAdd = () => {
        onAdd(value);
        setValue('');
    }

    return(   
        <div className="row">
            <div className="col-5">
                <input 
                className="form-control" type="text" 
                placeholder="Add element..."
                value={value} 
                onChange={(e) => setValue(e.target.value)}/>
            </div>
            <div className="col-6">
                <button className="btn btn-outline-info" onClick={handleAdd}>
                    добавить
                </button>
            </div>
        </div>
    )
}

export default AddItems;