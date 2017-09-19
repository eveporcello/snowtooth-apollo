import React, { Component } from 'react'
import './App.css'
import { LiftStatusRow } from './LiftStatusRow'
const lifts = require('./lifts.json')

class LiftStatusTable extends Component {
  render() {
    return (
      <div className="LiftStatus">
        <table>
          <thead>
            <th>Lift Name</th>
            <th>Lift Status</th>
          </thead>
          <tbody>
            {lifts.map((lift, i) => <LiftStatusRow
                                      lift={lift} /> )}
          </tbody>
        </table>
      </div>
    )
  }
}

export default LiftStatusTable
