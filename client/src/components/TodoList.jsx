import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'

const Wrapper = styled.div`
    padding: 0 40px 40px 40px;
`

const TodoList = props => (
    <Wrapper>
        <h1>To-Do List</h1>
        <ol>
            <li>Reconfigure to pull cluster from Mongo Atlas using mongoose</li>
            <li>Reconfigure backend schema models: relevant flight data incls. geoloc and IATA code</li>
            <li>Figure out how to reference another table to cross-search locations <b>OR</b> merge relevant columns</li>
            <li>Add search functionability for radial distance</li>
            <li>Add a form to directly add to this list from React rather than from client/src</li>
        </ol>
    </Wrapper>
);

export default TodoList
