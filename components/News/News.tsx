import styled from '@emotion/styled'

interface Props {
    className?: string
}

const News = (props: Props) => <Root className={props.className}>
    <h1>IFCU News</h1>
    <div>Subscribe to our newsletter</div>
</Root>

const Root = styled.div`
    padding: 14px;
`
export default News