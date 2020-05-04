import React, {Component} from 'react';
import Card from './Card';
import {robots} from './robots';
import Searchbox from './Searchbox';
import './App.css';

class App extends Component{

    constructor(){
        super();
        this.state = {
            robots: robots,
            searchfield: ''
        };

        // this.onSearchChange = this.onSearchChange.bind(this);
    }

    onSearchChange = (event) => {
        this.setState({searchfield : event.target.value});
    }

    render = () => {
        const filteredRobots = this.state.robots.filter(robot =>{
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        });
        return(
            <>
            <header>
            <h1>robofriends</h1>
            <Searchbox searchChange={this.onSearchChange}/>
            </header>
            <section className='gallery'>
                {filteredRobots.map((value) =>{
                    return <Card key={value.id} name={value.name} email={value.email} username={value.username} />
                })
                }
            </section>
            </>
        );
    }
}

export default App;