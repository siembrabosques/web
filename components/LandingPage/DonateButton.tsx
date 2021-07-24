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
              href={`https://www.paypal.com/donate?business=contacto%40semillistas.es&item_name=Reforestaci%C3%B3n+de+Sierra+de+Lujar&currency_code=EUR`}>
            <Content>
                <Text>
                    <div>¡Siembrate!</div>
                    <div>Un arbol 2,5€</div>
                </Text>
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
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  z-index: 3;
  text-transform: uppercase;

  > div:first-child {
    font-size: 1.1em;
  }
`
const Root = styled.a`
  font-size: 1em;
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
  transition: transform ease-in-out 0.2s, filter ease-in-out 0.4s;
  filter: hue-rotate(20deg);

  &:hover {
    transform: rotate(3deg);
    filter: hue-rotate(50deg);
  }
`

const ActionButton = styled.button`
  background: transparent;
  border: none;
  font-size: 1.5em;
  font-family: Galyon;
  margin: ${[1,2,3,4]};
  cursor: pointer;
  transition: font-size ease-in-out 0.2s, color ease-in-out 0.2s;
  &:hover {
    font-size: 1.6em;
    color: rgba(0,0,0,.8);
  }
  margin-bottom: 24px;
`

export default DonateButton