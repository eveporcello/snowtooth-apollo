import React from 'react'
import './App.css'
import { LiftStatusRow } from './LiftStatusRow'
import { gql, graphql } from 'react-apollo'


const LiftStatusTable = ({ data: {allLifts}, loading }) => {
  if(!loading) {
    return (
      <div className="LiftStatus">
        <table>
          <thead>
            <th>Lift Name</th>
            <th>Lift Status</th>
          </thead>
          <tbody>
            { allLifts.map((lift, i) => <LiftStatusRow lift={lift} /> )}
          </tbody>
        </table>
      </div>
    )
  }
}

const allLiftsQuery = gql`
    query {
      allLifts {
        name
        status
      }
    }
`

export const LiftStatusTableWithData = graphql(allLiftsQuery)(LiftStatusTable)
