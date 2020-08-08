import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import tasks from './tasks';
import './style.scss';
import TasksList from './TasksList';


export default class MainApp extends Component {
constructor(props){
    super(props)
     this.state = {
        listes: [],

        radios: [
            { id: 1, value: "To Do" },
            { id: 2, value: "In Progress" },
            { id: 3, value: "Completed" }

        ],
       selectedRadio: '',
    }; 
       
        this.handleShort = this.handleShort.bind(this);
}

componentDidMount(){
    this.setState({listes:tasks});
}
   
    handleChange = (event) => {
        let radio = event.target.value;
        this.setState({ selectedRadio: radio })
    }

    handleShort() {
        const copyTasks = this.state.listes.slice();
        copyTasks.sort((a, b) => a.name.localeCompare(b.name))
        this.setState({ listes: copyTasks });
    }

    render() {

        let { listes, radios, selectedRadio } = this.state;
        return (
            <>
            <div className="myButtons"> 

                <button type="button" className="btn btn-secondary" 
                onClick={this.handleShort}>Trier par ordre </button>
            </div>
            
                <div className='main'>
                    <ul className="radioMain">
                        {
                            radios.map((radio) => {
                                return (
                                    <li key={radio.id}>
                                        <input
                                            type="radio"
                                            name="radio"
                                            checked={radio.value === selectedRadio}
                                            value={radio.value}
                                            onChange={this.handleChange}
                                        />
                                        <label htmlFor={radio.value}>{radio.value}
                                        </label>
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <div className="container-sm">
                        <div>
                            <TasksList liste={listes} selectedRadio={selectedRadio}/>
                        </div>
                    </div>

                </div>
            </>
        )
    }
}
