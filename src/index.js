import React from 'react'
import { render } from 'react-dom'
import './index.css'
import LiftStatusTable from './LiftStatusTable'
import registerServiceWorker from './registerServiceWorker'

render(
  <LiftStatusTable />,
  document.getElementById('root')
)
registerServiceWorker()
