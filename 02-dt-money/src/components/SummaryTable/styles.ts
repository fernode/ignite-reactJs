import styled from 'styled-components'

export const Container = styled.div`
  font-size: 1.6rem;
  margin: 6.4rem auto 0 auto;

  table {
    width: 100%;
    border-spacing: 0 1rem;
    text-align: left;

    th {
      color: var(--text-body);
      padding-left: 3.2rem;
    }

    tr {
      background: var(--shape);
      height: 6.4rem;
      border-radius: 0.5rem;

      td {
        color: var(--text-body);
        padding-left: 3.2rem;

        &:first-child {
          color: var(--text-title);
        }
      }
    }
  }
`
