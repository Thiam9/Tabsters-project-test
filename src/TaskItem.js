import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import  './style.scss';

export default class TaskItem extends Component {

    render() {
        let { id, name, status, progress } = this.props.item;

        return (

            <div className="list-group list">
                <a href="#" className="list-group-item list-group-item-action active">
                    Id:{id}
                </a>
                <a href="#" className="list-group-item list-group-item-action">Name:{name}</a>
                <a href="#" className="list-group-item list-group-item-action">Status:{status}</a>
                <a href="#" className="list-group-item list-group-item-action">Progress:{progress}</a>
               
            </div>

        );
    }
}
