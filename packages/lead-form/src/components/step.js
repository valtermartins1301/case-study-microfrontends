import React from "react"
import PropTypes from "prop-types"
import {css} from '@emotion/core'
import styled from '@emotion/styled'
import userIcon from '../images/user.png'
import flagIcon from '../images/flag.png'

const STEPS = ['1', '2', '3', '4'];

// Navigation
const baseNav = css`
  text-align: center;

  img {
    height: 1.2em;
    margin: 0 1em;
  }
`
const Nav = styled.nav`
  ${baseNav}
`

// orderedList
const baseOrderedList = css`
  list-style: none;
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 0.5em;
  padding: 0;
  height: 0.3em;
  background-color: #ddd;
`
const OrderedList = styled.ul`
  ${baseOrderedList}
`
// list item
const baseItemList = css`
  padding: 1em;
  margin: 0 1.5em;
  border-radius: 50%;
  font-size: 0.5em;
`
const activeItem = ({active}) => active && css`
  font-weight: bold;
  color: #767676;
  background-color: #285; 
`

const ListItem = styled.li`
  ${baseItemList}
  ${activeItem}
`

// --------------------------
const Step = ({ selected }) => (
  <Nav>
    <img src={userIcon} label="User icon"/>
    <OrderedList>
      {STEPS.map((step, index) => {
        const active = selected === step;

        return <ListItem key={index} active={active}/>
      })}
    </OrderedList>
    <img src={flagIcon} label="Flag icom"/>
  </Nav>
)

Step.propTypes = {
  selected: PropTypes.string.isRequired,
}

export default Step
