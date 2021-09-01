import styled from 'styled-components'

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
    align-items: center;

    input {
      height: 6.4rem;
      width: 48rem;
      padding-left: 2.4rem;
      color: var(--text-body);
      border-radius: 0.5rem;
      border: 1px solid #d7d7d7;

      & + input {
        margin-top: 1.6rem;
      }
    }

    button {
      color: var(--shape);
      border: none;
      background: var(--green);
      height: 6.4rem;
      width: 48rem;
      margin: 2.4rem auto 0 auto;
      border-radius: 5px;

      &:hover {
        filter: brightness(0.9);
      }
    }
  }
`
