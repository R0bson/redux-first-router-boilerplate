import React from "react"
import { shallow } from "enzyme"
import Component from "./Home"

describe("Home", () => {
  describe("rendering", () => {
    it("should return function", () => {
      expect(typeof Component).toBe("function")
    })

    it("should define prop types", () => {
      expect(Component.propTypes).toBeDefined()
    })

    it("should render", () => {
      const wrapper = shallow(<Component />)
      expect(wrapper.exists()).toBe(true)
    })

    it("should display h1 with HOME text", () => {
      const wrapper = shallow(<Component />)
      expect(wrapper.find("h1").text()).toBe("HOME")
    })
  })
})
