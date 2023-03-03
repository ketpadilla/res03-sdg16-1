import '../App.css'
import React, {Component} from 'react'
import ObjectData from '../data/cities.json'

class PostList extends Component {
    render() {
        return (
            <div>
                <h1> List of Cities </h1>
                {ObjectData.map((object, index) => {
                    return <div>
                        <h3>{object.city} ({object.zip}), {object.province}</h3>
                    </div>
                })}
            </div>
        )
    }
}

export default PostList