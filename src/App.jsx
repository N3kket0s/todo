import TL from "./TL.jsx"
import AppHeader from "./AppHeader.jsx"
import Search from "./Search.jsx"
import ItemsFilter from "./ItemsFilter.jsx"
import { useState, useEffect } from "react"
import AddItems from "./AddItems.jsx"

let maxID = 10000;
const App = () => {

    const [items, setItems] = useState(() => {
        const saved = localStorage.getItem('items');
        return saved ? JSON.parse(saved) : [
            {id: 1, label: 'проснуться'},
            {id: 2, label: 'умыться' , important: true},
            {id: 3, label: 'покушать'}
        ];
    })

    useEffect(() => {
        localStorage.setItem('items' , JSON.stringify(items));
    }, [items]);

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

    const [term, setTerm] = useState('');

    const onSearchChange = (term) => {
        setTerm(term);
    }

    const searchItem = (items, term) => {
        if (term.length === 0) {
            return items;
        }
        return items.filter((item) => {
            return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1;
        })
    }

    const visibleItems = searchItem(items, term);

    return(
        <div className="container">
            <AppHeader/>
            <div className="row">
                <div className="col-6">
                    <Search onSearchChange = {onSearchChange}/>
                </div>
                <div className="col-6">
                    <ItemsFilter/>
                </div>
                <div>
                    <AddItems onAdd = {addItems}/>
                </div>
            </div>
            <TL todos={visibleItems} onDeleted = {deleteItems}/>
            <span>{(new Date()).toString()}</span>
        </div>
    )
}
export default App