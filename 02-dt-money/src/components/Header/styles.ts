import styled from 'styled-components'
import { lighten } from 'polished'

export const Container = styled.header`
  background: var(--blue);
`

export const Content = styled.div`
  max-width: 77.77%;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 3.6rem 0 13.6rem 0;

  button {
    background: var(--blue-light);
    color: #ffffff;
    border-radius: 0.5rem;
    border: none;
    font-size: 1.6rem;
    width: 19.5rem;
    height: 4.8rem;

    transition: 0.2s background;

    &:hover {
      background: ${lighten(0.2, '#6933ff')};
    }
  }
`
