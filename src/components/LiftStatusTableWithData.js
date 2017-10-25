import React from 'react'
import '../styles/App.css'
import { LiftStatusRow } from './LiftStatusRow'
import { gql, graphql } from 'react-apollo'

const LiftStatusTable = ({data}) => {
    return (
      <div className="lift-status">
      <h1>Snowtooth Lift Status</h1>
        {(data.loading) ?
          <p>loading...</p> :
          <table>
            <thead>
            <tr>
              <th>Lift Name</th>
              <th>Lift Status</th>
              </tr>
            </thead>
            <tbody>
              { data.allLifts.map((lift, i) => <LiftStatusRow key={i} lift={lift} /> )}
            </tbody>
          </table>
        }
      </div>
    )
}

const allLiftsQuery = gql`
      query allLifts {
        allLifts {
          name
          status
        }
      }
`

export const LiftStatusTableWithData = graphql(allLiftsQuery)(LiftStatusTable)
