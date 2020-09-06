import React from 'react'
import './card.style.css'

export const Card = (props) => (
<div className='card-container'>
    <img src={`https://robohash.org/${props.imid}?set=set2&size=180x180`} alt=""/>
    <h2>{props.monster}</h2>
<h5>{props.email}</h5>
</div>
)