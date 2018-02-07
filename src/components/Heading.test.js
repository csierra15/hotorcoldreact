import React from 'react'
import {shallow, mount} from 'enzyme'
import './setupTests'
import Heading from './Heading'

describe('<Heading />', () => {
  it('Renders without crashing - smoke test', () => {
    shallow(<Heading />)
  })
})
