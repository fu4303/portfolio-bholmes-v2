import React from 'react'
import styled from 'styled-components'

const Styled = {
  Container: styled.div`
    width: 100%;
    height: 100%;
  `
}

class Parallax extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      onscreen: false,
      leftAlign: 0,
    }
  }
  shouldComponentUpdate = (nextProps, nextState) => {
    return this.state.leftAlign < nextState.leftAlign - 100
  }
  componentDidMount = () => {
    const scrollTop = event.srcElement.body.scrollTop
    window.addEventListener('scroll', (event) => {
      this.setState({
        leftAlign: scrollTop
      })
    })
  }
  render() {
    console.log(this.state.scrollTop)
    return (
      <Styled.Container>
        {this.props.render(this.state)}
      </Styled.Container>
    )
  }
}