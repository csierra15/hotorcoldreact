import React from 'react'
import {shallow, mount} from 'enzyme'
import './setupTests'
import GuessList from './GuessList'

describe('<GuessList />', () => {
  it('Renders without crashing - smoke test', () => {
    shallow(<GuessList/>)
  })
})
