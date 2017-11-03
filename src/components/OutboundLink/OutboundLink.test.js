import React from "react"
// import { Button } from 'material-ui'
import { shallow } from "enzyme"
import Component, { Internal } from "./OutboundLink"

// const shallow = createShallow()

const createTestLink = children =>
  shallow(<Component href="http://some.test/link">{children}</Component>).dive()

const createCenteredTestLink = children =>
  shallow(
    <Component center href="http://some.test/link">
      {children}
    </Component>,
  ).dive()

describe("OutboundLink", () => {
  describe("general checks", () => {
    it("should return function", () => {
      expect(typeof Component).toBe("function")
    })

    it("should define prop types", () => {
      expect(Internal.propTypes).toBeDefined()
    })
  })

  describe("simple rendering", () => {
    it("should render", () => {
      const wrapper = createTestLink("Test link")
      expect(wrapper.exists()).toBe(true)
    })

    it("should render as 'a' component", () => {
      const wrapper = createTestLink("Test link")
      expect(wrapper.prop("component")).toBe("a")
    })

    it("should pass children text", () => {
      const wrapper = createTestLink("Test link")
      expect(wrapper.contains("Test link")).toBe(true)
    })

    it("should pass children React element", () => {
      const wrapper = createTestLink(<div>test</div>)
      expect(wrapper.contains(<div>test</div>)).toBe(true)
    })

    it("should pass href prop", () => {
      const wrapper = createTestLink("Test link")
      expect(wrapper.prop("href")).toBe("http://some.test/link")
    })

    it("should have noopener tag", () => {
      const wrapper = createTestLink("Test link")
      expect(wrapper.prop("rel").split(/\s/)).toContain("noopener")
    })

    it("should have noreferrer tag", () => {
      const wrapper = createTestLink("Test link")
      expect(wrapper.prop("rel").split(/\s/)).toContain("noreferrer")
    })

    it("should target _blank", () => {
      const wrapper = createTestLink("Test link")
      expect(wrapper.prop("target")).toBe("_blank")
    })
  })

  describe("rendering centered", () => {
    it("should render", () => {
      const wrapper = createCenteredTestLink("Test link")
      expect(wrapper.exists()).toBe(true)
    })

    it("should render as 'div' component", () => {
      const wrapper = createCenteredTestLink("Test link")
      expect(wrapper.find("div").exists()).toBe(true)
    })

    it("should render an 'a' component in div", () => {
      const wrapper = createCenteredTestLink("Test link")
      expect(
        wrapper
          .childAt(0)
          .dive()
          .prop("component"),
      ).toBe("a")
    })

    it("should pass children text", () => {
      const wrapper = createCenteredTestLink("Test link")
      expect(wrapper.contains("Test link")).toBe(true)
    })

    it("should pass children React element", () => {
      const wrapper = createCenteredTestLink(<div>test</div>)
      expect(wrapper.contains(<div>test</div>)).toBe(true)
    })

    it("should pass href prop", () => {
      const wrapper = createCenteredTestLink("Test link")
      expect(
        wrapper
          .childAt(0)
          .dive()
          .prop("href"),
      ).toBe("http://some.test/link")
    })

    it("should have noopener tag", () => {
      const wrapper = createCenteredTestLink("Test link")
      expect(
        wrapper
          .childAt(0)
          .dive()
          .prop("rel")
          .split(/\s/),
      ).toContain("noopener")
    })

    it("should have noreferrer tag", () => {
      const wrapper = createCenteredTestLink("Test link")
      expect(
        wrapper
          .childAt(0)
          .dive()
          .prop("rel")
          .split(/\s/),
      ).toContain("noreferrer")
    })

    it("should target _blank", () => {
      const wrapper = createCenteredTestLink("Test link")
      expect(
        wrapper
          .childAt(0)
          .dive()
          .prop("target"),
      ).toBe("_blank")
    })
  })
})
