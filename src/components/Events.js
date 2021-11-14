import React from 'react'
import Post from './Post'

const Events = () => {

    return (
        <div>
            <Post 
                date='30 Nov 2020' 
                title='Book Club - Debt: The First 5000 Years - Ch 1' 
                link="https://www.meetup.com/ethbuilders/events/wrpmcsybcqbcc/"
            />
            <Post 
                date='06 Dec 2020' 
                title='Book Club - Debt: The First 5000 Years - Ch 2' 
                link="https://www.meetup.com/ethbuilders/events/wrpmcsybcqbcc/"
            />
        </div>
    )
}

export default Events
