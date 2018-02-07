import React from 'react'
import {shallow, mount} from 'enzyme'
import './setupTests'
import Feedback from './Feedback'

describe('<Feedback />', () => {
  it('Renders without crashing - smoke test', () => {
    shallow(<Feedback />)
  })
})
