import React, { Component } from 'react';
import Habit from './Habit';
import HabitAdd from './HabitAdd';

class Habits extends Component {
  

    handleIncrement = (habit) => {
        this.props.onIncrement(habit);
    };

    handleDecrement = (habit) => {
        this.props.onDecrement(habit);
    };

    handleDelete = (habit) => {
        this.props.onDelete(habit);
    };

    handleAdd = name => {
        this.props.onAdd(name);
    }

    render() {
        return (
            <>
            <HabitAdd onAdd={this.handleAdd}/>
                <ul>
                    {this.props.habits.map(habit => 
                        <Habit 
                        key={habit.id} 
                        habit={habit} 
                        onIncrement={this.handleIncrement}
                        onDecrement={this.handleDecrement}
                        onDelete={this.handleDelete}
                        />
                    )}    
                </ul>
            </>
        );
    }
}

export default Habits;