/* eslint-env node, jest */

import React from 'react'
import Enzyme, {mount, shallow} from 'enzyme'

import Adapter from 'enzyme-adapter-react-15.4'
Enzyme.configure({adapter: new Adapter()})

function Hello (props) {
  return <p>Hello World</p>
}

class HelloClass extends React.Component {
  render () {
    return <p>Hello World</p>
  }
}

it('should mount the test', () => {
  let wrapper = mount(<Hello />)

  expect(true).toBe(true)
})

describe('Shallow rendering composite nodes', () => {
  it('should shallow render a Stateless Function Component', () => {
    let wrapper = shallow(<Hello />)
    expect(true).toBe(true)
  })

  it('should shallow render a class component', () => {
    let wrapper = shallow(<HelloClass />)

    expect(true).toBe(true)
  })
})

describe('Shallow render known node types', () => {
  it('should render a paragraph tag', () => {
    let wrapper = shallow(<p>Hello</p>)

    expect(true).toBe(true)
  })
})
