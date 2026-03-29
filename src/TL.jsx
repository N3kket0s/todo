import TLT from "./TLitem.jsx"

const TL = ({todos, onDeleted, onToggleDone, onToggleImportant}) => {
    const elements = todos.map((item) => {
        const {id, ...ItemProps} = item;//DESTRUCT ID
        return(
        <li key={id} className="list-group-item">
            <TLT 
            {...ItemProps}
             onDeleted = {() => onDeleted(id)}
             onToggleDone = {() => onToggleDone(id)}
             onToggleImportant = {() => onToggleImportant(id)}
             />
        </li>
        )
    })

    return(
        <ul className="list-group" id="list">
            {elements}
        </ul>
    )
}

export default TL;