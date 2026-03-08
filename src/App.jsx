import TL from "./TL.jsx"
import AppHeader from "./AppHeader.jsx"
import Search from "./Search.jsx"
import ItemsFilter from "./ItemsFilter.jsx"


const App = () => {
    const items = [
                {id: 1,label: 'Проснуться'},
                {id: 2,label: 'Умыться', important: true},
                {id: 3,label: 'Покушать'}
    ]
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
            </div>
            <TL todos={items}/>
            <span>{(new Date()).toString()}</span>
        </div>
    )
}
export default App