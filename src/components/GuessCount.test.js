import React from 'react'
import {shallow, mount} from 'enzyme'
import './setupTests'
import GuessCount from './GuessCount'

describe('<GuessCount />', () => {
  it('Renders without crashing - smoke test', () => {
    shallow(<GuessCount />)
  })
})
