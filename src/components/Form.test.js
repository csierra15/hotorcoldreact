import React from 'react'
import {shallow, mount} from 'enzyme'
import './setupTests'
import MakeGuess from './Form'

describe('<MakeGuess />', () => {
  it('Renders without crashing - smoke test', () => {
    shallow(<MakeGuess />)
  })
})
