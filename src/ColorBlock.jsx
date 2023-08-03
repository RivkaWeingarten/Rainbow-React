import React from 'react'

function ColorBlock(props){
    return (
        <div className="colorBlock"
        style={{'backgroundColor': props.color}}>
            <p><strong>{props.color}</strong></p>
        </div>
    )
}

// Do not forget to export your component once you have built it!
export default ColorBlock
