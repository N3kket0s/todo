import TL from "./TL.jsx"
import AppHeader from "./AppHeader.jsx"
import Search from "./Search.jsx"
import ItemsFilter from "./ItemsFilter.jsx"
import { useState } from "react"
import AddItems from "./AddItems.jsx"

let maxID = 10000;
const App = () => {

    const [items, setItems] = useState([
                {id: 1,label: 'Проснуться'},
                {id: 2,label: 'Умыться', important: true},
                {id: 3,label: 'Покушать'}
    ]);


    const deleteItems = (id) => {
        setItems((items) => {
            const index = items.findIndex((element) => element.id === id)
            const before = items.slice(0, index)
            const after = items.slice(index + 1)
            return [...before, ...after]
        })
    }
    const addItems = (text) => {
        setItems((items) => {
            const newItem = {
                id: maxID++,
                label:  text, 
                important:  false
            }
            return [...items, newItem]
        })
    }

    return(
        <div className="container">
            <AppHeader/>
            <div className="row">
                <div className="col-6">
                    <Search/>
                </div>
                <div className="col-6">
                    <ItemsFilter/>
                </div>
                <div>
                    <AddItems onAdd = {addItems}/>
                </div>
            </div>
            <TL todos={items} onDeleted = {deleteItems}/>
            <span>{(new Date()).toString()}</span>
        </div>
    )
}
export default App