import React from 'react';
import Card from './Card';
import {robots} from './robots';


const App = () => {
    return(
        <section className='gallery'>
            {robots.map((value) =>{
                return <Card key={value.id} name={value.name} email={value.email} username={value.username} />
            })
            }
        </section>
    );
}

export default App;