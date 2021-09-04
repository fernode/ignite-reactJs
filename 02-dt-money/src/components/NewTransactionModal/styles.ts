import styled from 'styled-components'
import { darken, transparentize } from 'polished'

export const Container = styled.form`
  font-size: 1.6rem;

  h3 {
    margin-bottom: 2.4rem;
    margin-top: 6.4rem;
    font-size: 2.4rem;
    margin-left: 3rem;
  }

  .input-container {
    display: flex;
    flex-direction: column;
    margin-left: 3rem;

    input {
      height: 6.4rem;
      width: 48rem;
      padding-left: 2.4rem;
      color: var(--text-body);
      border-radius: 0.5rem;
      border: 1px solid #d7d7d7;
      background: #e7e9ee;

      & + input {
        margin-top: 1.6rem;
      }
    }

    .register-button {
      color: var(--shape);
      border: none;
      background: var(--green);
      height: 6.4rem;
      width: 48rem;
      margin: 2.4rem 0 0 0;
      border-radius: 5px;
      transition: filter 0.3s;

      &:hover {
        filter: brightness(0.9);
      }
    }
  }
`

export const TransactionTypeContainer = styled.div`
  margin: 1rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  width: 48rem;
`

const colors = {
  green: '#33CC95',
  red: '#E52E4D'
}

interface ButtonProps {
  isActive: boolean
  color: 'green' | 'red'
}

export const Button = styled.button<ButtonProps>`
  ${(props) =>
    props.isActive
      ? `background: ${transparentize(0.9, colors[props.color])}`
      : `background: transparent;`};

  border: 1.5px solid #969cb3;
  height: 6.4rem;
  border-radius: 0.5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    margin-right: 1.8rem;
  }

  transition: all 0.3s;

  &:hover {
    border-color: ${darken(0.4, '#969cb3')};
  }
`
