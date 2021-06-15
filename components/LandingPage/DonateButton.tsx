import * as React from 'react'
import styled from "@emotion/styled";

interface Props {
    className?: string
}

const DonateButton = (props: Props) => {
    const [trees, setTrees] = React.useState<number>(1)
    const donationAmount = trees * 2;

    const amendDonation = (d: number) => (event: any) => {
        setTrees(Math.max(1, trees + d))
        event.preventDefault()
    }
    return (
        <Root className={props.className}
              href={`https://www.paypal.com/donate?business=contacto%40semillistas.es&item_name=Reforestaci%C3%B3n+de+Sierra+de+Lujar&currency_code=EUR&amount=${donationAmount}`}>
            <Content>
                <Text>
                    <div>¡Siembrate!</div>
                    <div>{trees} {trees > 1 ? 'Arboles' : 'Arbol'} €{trees * 2}</div>
                </Text>
                <Buttons>
                    <button onClick={amendDonation(-1)} disabled={trees === 1}>-</button>
                    <button onClick={amendDonation(1)}>+</button>
                </Buttons>
                <ActionButton>¡Donar Ahora!</ActionButton>
            </Content>
        </Root>
    )
}

const Text = styled.div`
  overflow: hidden;
  position: relative;
  z-index: 3;

`

const Content = styled.div`
  padding-top: 36px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  z-index: 3;
  text-transform: uppercase;

  > div:first-child {
    font-size: 18px;
  }
`
const Root = styled.a`
  font-size: 24px;
  font-family: Galyon;

  background-image: url('/img/tree.png');
  background-size: contain;
  background-repeat: no-repeat;

  text-decoration: none;
  color: black;

  &:visited {
    color: black;
    text-decoration: none;
  }

  cursor: pointer;
  position: absolute;
  margin: 16px;
  transition: transform ease-in-out 0.2s;
  transition: filter ease-in-out 0.4s;
  filter: hue-rotate(20deg);

  &:hover {
    transform: rotate(3deg);
    filter: hue-rotate(50deg);
  }
`

const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  margin: 4px 8px 4px 8px;

  button {
    width: 50px;
    height: 50px;
    box-shadow: 0 4px 16px rgba(0,0,0,.2);
    background: transparent;
    border: none;
    font-size: 24px;
    border-radius: 550%;
    cursor: pointer;
    &:first-child {
      margin-right: 8px;
    }

    &:hover {
      color: rgba(0, 0, 0, .7);
      font-weight: bold;
    }
  }
`

const ActionButton = styled.button`
  background: transparent;
  border: none;
  font-size: 24px;
  font-family: Galyon;
  cursor: pointer;
  transition: font-size ease-in-out 0.2s, color ease-in-out 0.2s;
  &:hover {
    font-size: 26px;
    color: rgba(0,0,0,.8);
  }
`

const Spacer = styled.div`
  width: 100%;
  height: 24px;
`
export default DonateButton