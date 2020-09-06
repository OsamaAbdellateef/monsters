import React from 'react'
import './card-list.styles.css'
import {Card} from '../card/card.component'

export const CardList = (props) => {
    console.log(props);
    return(
        <div className="card-list">
            {
                props.monsters.map(monster =>
                    <Card key={monster.id} monster={monster.name} imid = {monster.id} email={monster.email} />
                )
            }
        </div>
    )
} 
/*
{this.state.monsters.map(monster => <h3 key={monster.id}>{monster.name}</h3>)}*/ 