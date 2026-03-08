import React from "react";



class TLT extends React.Component {

    state = {
        done: false,
        check: false,
        trash: false
    }

    onLabel = () => {
        console.log(`нажато на ${this.props.label}`)
        this.setState({done: true})
    }

    onCheckClick = () => {
        console.log(`цвет изменен`)
        this.setState({check: true});
    }

    onTrashClick = () => {
            console.log(`цвет изменен красный`)
            this.setState({trash: true});
    }

    render() {
        let myClass = '';
        if(this.state.done) {
            myClass += ' done';
        }

        if(this.state.check) {
            myClass = myClass + ' check';
        }

        if(this.state.trash) {
            myClass = myClass + ' trash';
        }

        const {label} = this.props

        // const itemsStyle = {
        //     color: important ? 'red' : 'black'
        // }


    return(
        <div>
            <span className={myClass} onClick={this.onLabel}>
                {label}
            </span>
            <button onClick={this.onTrashClick} type="button" id="ButtonDanger" className="btn btn-outline-danger buttons">
                <i className="fa-solid fa-trash"></i>
            </button>
            <button onClick={this.onCheckClick} type="button" className="btn btn-outline-success buttons">
                <i className="fa-solid fa-check"></i>
            </button>
        </div>
        )
    }
};

export default TLT