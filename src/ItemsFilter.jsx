import React from "react";

class ItemsFilter extends React.Component {

render() {
    return(
                <div className="btn-group" role="group">
                    <input type="radio" className="btn-check" name="btnradio" id="btnradio1"/>
                    <label className="btn btn-outline-primary" htmlFor="btnradio1">Всё</label>

                    <input type="radio" className="btn-check" name="btnradio" id="btnradio2"/>
                    <label className="btn btn-outline-primary" htmlFor="btnradio2">Активно</label>

                    <input type="radio" className="btn-check" name="btnradio" id="btnradio3"/>
                    <label className="btn btn-outline-primary" htmlFor="btnradio3">Сделано</label>
                </div>
                )
        }
}
    
export default ItemsFilter;