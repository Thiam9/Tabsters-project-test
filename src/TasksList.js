import React from 'react';
import TaskItem from './TaskItem';

const TasksList = (props) => {
   const liste = props.liste;
   const selectedRadio = props.selectedRadio;
    return (
        <div> 
         {
                                   liste
                                    .filter(item => item.status.includes(selectedRadio))
                                    .map((item)=> {

                                        return (
                                            <TaskItem
                                                key={item.id}
                                                item={item}
                                            />
                                        )
                                    })
                            }
                   
        
        </div>
    );
};

export default TasksList;