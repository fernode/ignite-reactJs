import styled from 'styled-components'

interface Props {
  background?: boolean
}

export const Container = styled.div`
  font-size: 1.6rem;
  display: flex;
  justify-content: space-between;
  margin: -8rem auto 0 auto;
`

export const Content = styled.div<Props>`
  width: 35.2rem;
  background: ${(props) =>
    props.background ? 'var(--green)' : 'var(--shape)'};
  border-radius: 0.5rem;
  padding: 0 2.4rem 0 3.2rem;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2.5rem 0 1.4rem 0;

    h3 {
      font-weight: 400;
      color: ${(props) =>
        props.background ? 'var(--shape)' : 'var(--text-title)'};
    }

    img {
      width: 3.2rem;
      height: 3.2rem;
    }
  }

  div {
    p {
      font-size: 3.6rem;
      font-weight: 400;
      padding-bottom: 1.8rem;

      color: ${(props) =>
        props.background ? 'var(--shape)' : 'var(--text-title)'};
    }
  }
`
