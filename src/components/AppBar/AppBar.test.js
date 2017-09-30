import React from 'react'
import { Button } from 'material-ui'
import { shallow } from 'enzyme'
import Component, { Internal } from './AppBar'

// const shallow = createShallow()

describe('AppBar', () => {
  describe('rendering', () => {
    it('should return function', () => {
      expect(typeof Component).toBe('function')
    })

    it('should define prop types', () => {
      expect(Internal.propTypes).toBeDefined()
    })

    it('should render', () => {
      const wrapper = shallow(<Component />)
      expect(wrapper.exists()).toBe(true)
    })

    it('should contains Login button', () => {
      const wrapper = shallow(<Component />)
      wrapper.debug()
      expect(wrapper.dive().contains(<Button color="contrast">Login</Button>)).toBe(true)
    })
  })
})
