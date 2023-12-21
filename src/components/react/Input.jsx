import { useState, useRef } from 'react';

const Input = ({ items, setItems}) => {
    
    const inputRef = useRef(null)
    
    const handleSubmit = (evt) => {
        evt.preventDefault()
        setItems([...items, inputRef.current.value])
        inputRef.current.value = ''
    }
    
    const handleDelete = (itemToDelete) => {
        setItems(() => items.filter((item) => item !== itemToDelete))
    }
    
    return(
        <div>
        <form onSubmit={(evt) => {handleSubmit(evt)}}>
            <input
            type='text'
            placeholder='item'
            ref={inputRef}
            />
            <button>add item</button>
        </form>
        <div className="item-list-container">
            {items.length > 0 && items.map((item)=> (
                <div className="item" key={item}>{item}
                    <button onClick={(evt) => {handleDelete(item)}}>X</button>
                </div>
            ))}
        </div>
        </div>
    )  
}
export default Input