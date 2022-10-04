import styled from '@emotion/styled'
import Logo from "../Layout/Logo";
import * as React from "react";
import {Navigation} from "../../data/navigation";
import Nav from '../Layout/Navigation/Nav'
interface Props {
	className?: string
	navigation: Navigation
}

const Header = (props: Props) => (
	<Root className={props.className}>
		<Logo/>
		<Nav navigation={props.navigation}/>
	</Root>
)

const Root = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 34px 8px 8px 34px;
  @media (max-width: 500px) {
    padding: 8px;
  }
`

const HeaderLink = styled.a`
  width: 240px;
  color: white;
  background: #63a225;
  height: 100%;
  padding: 30px 0;
  margin-right: 12px;
  text-align: center;
  @media (max-width: 980px) {
    font-size: 0.7em;
    width: 140px;
  }
  @media (max-width: 670px) {
    padding-right: 10px;
    padding-left: 10px;
    width: auto;
  }


`
export default Header
