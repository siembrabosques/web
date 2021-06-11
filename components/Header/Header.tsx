import styled from '@emotion/styled'
import Link from "next/link";

const Header = () => (
    <Root>
        <Logo src='/img/fiuc-logo.png'/>
    </Root>
)

const Root = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100vw;
`

const Logo = styled.img`
  max-width: 200px;
  max-height: 80px;
  width: auto;
  height: auto;
`

const Nav = styled.nav`
  display: flex;
  align-items: center;
  padding: 8px;
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