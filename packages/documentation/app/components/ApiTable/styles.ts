import { styled } from "@linaria/react";

const TableContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  overflow: hidden;

  border-radius: 8px;
  border: 1px solid var(--secondary-200);

  table {
    width: 100%;
    background-color: inherit;
    border-collapse: collapse;

    thead tr th {
      padding: 16px 8px 16px 16px;
      text-align: start;
      font-size: 0.9rem;
      font-weight: 600;

      color: var(--secondary-800);
      background: var(--secondary-100);
    }

    tbody tr {
      transition: all 0.15s ease-in-out;

      &:hover {
        background: var(--secondary-50);
      }
    }

    tbody tr td {
      padding: 16px 8px 16px 16px;
      font-size: 0.9rem;
      line-height: 1.5rem;
      font-weight: 400;

      color: var(--secondary-800);
      border-top: 1px solid var(--secondary-200);

      code {
        font-size: 0.9rem;
        font-family: monospace;
        padding: 2px 4px;
        border-radius: 4px;
        background: var(--secondary-100);
      }
    }
  }
`;

export { TableContainer };
