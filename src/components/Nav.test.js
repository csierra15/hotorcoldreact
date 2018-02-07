import React from 'react'
import {shallow, mount} from 'enzyme'
import './setupTests'
import Nav from './Nav'

describe('<Nav />', () => {
  it('Renders without crashing - smoke test', () => {
    shallow(<Nav />)
  })
})
