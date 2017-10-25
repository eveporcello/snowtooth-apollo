import React from 'react'
import { TrafficLight } from './TrafficLight'


export const LiftStatusRow = ({ lift }) => (
    <tr>
      <td>{lift.name}</td>
      <td>
        <TrafficLight lift={lift}/>
      </td>
    </tr>
)
