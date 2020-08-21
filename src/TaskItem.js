import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import  './style.scss';

export default class TaskItem extends Component {

    render() {
        let { id, name, status, progress } = this.props.item;

        return (

            <div className="list-group list">
                <a href="#" className="list-group-item list-group-item-action active">
                    {name}
                </a>
                
                <a href="#" className="list-group-item list-group-item-action">{status}</a>
                <a href="#" className="list-group-item list-group-item-action">{progress}</a>
               
            </div>

        );
    }
}
