import '../App.css'
import React, {useState} from 'react'
import ObjectData from '../data/cities.json'

function PostSearch() {
    const [searchItem, setSearchItem] = useState("")
    return (
        <div>
            <input className='App-input'
                type="text"
                placeholder="Search..."
                onChange={(event) => {setSearchItem(event.target.value); console.log(searchItem);}}
                />
                {ObjectData.filter((val) => {
                    if(searchItem==""){
                        return "";
                    } else if(val.city.toLowerCase().includes(searchItem.toLowerCase())) {
                        return val;
                    }
                }).map((object, index) => {
                    return <div>
                        <h3>{object.city} ({object.zip}), {object.province}</h3>
                    </div>
                })}
        </div>
    )
}

export default PostSearch