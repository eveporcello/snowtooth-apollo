import React from 'react'
import { gql } from 'react-apollo'

const mutation = gql`

`

export const TrafficLight = ({ lift }) => (
  <div id="traffic-light">
    <div className={(lift.status === "closed") ? "light red" : "light"}></div>
    <div className={(lift.status === "hold") ? "light yellow" : "light"}></div>
    <div className={(lift.status === "open") ? "light green" : "light"}></div>
  </div>
)
