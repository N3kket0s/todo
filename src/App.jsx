import TL from "./TL.jsx"
import AppHeader from "./AppHeader.jsx"
import Search from "./Search.jsx"
import ItemsFilter from "./ItemsFilter.jsx"
import { useState, useEffect } from "react"
import AddItems from "./AddItems.jsx"

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
            return items.filter(item => item.id !== id)
        })
    }
    const addItems = (text) => {
        if (!text.trim()) return;

        setItems((items) => {
            const maxId = items.length > 0 
             ? Math.max(...items.map((item) => item.id)) : 0;

            const newItem = {
                label: text,
                important: false,
                done: false,
                id: maxId + 1
            };

            return [...items, newItem];
        })
    };

    const [term, setTerm] = useState('');
    const [filter, setFilter] = useState('all');

    const onSearchChange = (term) => {
        setTerm(term);
    }

    const onFilterChange = (filter) => {
        setFilter(filter);
    }    

    const searchItem = (items, term) => {
        if (term.length === 0) {
            return items;
        }
        return items.filter((item) => {
            return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1;
        })
    }

    const filterItem = (items, filter) => {
        switch(filter) {
            case 'active' :
                return items.filter((item) => !item.done);
            case 'done' :
                return items.filter((item) => item.done);
            default:
                return items;
        }
    }

    const visibleItems = filterItem(searchItem(items, term), filter);
    const doneCount = items.filter((item) => item.done).length
    const todoCount = items.length - doneCount

    const toggleDone = (id) => {
      setItems ((items) => {
            const index = items.findIndex((item) => item.id === id);
            const oldItem = items[index];
            const newItem = {...oldItem, 
            done: !oldItem.done
            }
            return[
                ...items.slice(0, index),
                newItem,
                ...items.slice(index + 1)
            ];
        });
    }

    const toggleImportant = (id) => {
      setItems ((items) => {
            const index = items.findIndex((item) => item.id === id);
            const oldItem = items[index];
            const newItem = {...oldItem, 
            important: !oldItem.important
            }
            return[
                ...items.slice(0, index),
                newItem,
                ...items.slice(index + 1)
            ];
        });
    }

    return(
        <div className="container">
            <AppHeader active={todoCount} done={doneCount}/>
            <Search onSearchChange = {onSearchChange}/>
            <ItemsFilter onFilterChange ={onFilterChange}/>
            <TL 
            todos={visibleItems}
            onDeleted = {deleteItems}
            onToggleDone = {toggleDone}
            onToggleImportant = {toggleImportant}
             />
             <AddItems onAdd = {addItems}/>
            <span>{(new Date()).toString()}</span>
        </div>
    )
}
export default App