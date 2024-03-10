import { styled } from "@linaria/react";

const Container = styled.p`
  font-size: 1rem;
  line-height: 1.75rem;
  color: var(--secondary-600);

  code,
  pre {
    font-family: monospace;
    font-weight: 500;
    color: var(--secondary-700);
    padding: 2px 6px;
    border-radius: 4px;
    background: var(--secondary-100);
  }

  pre {
    padding: 12px 20px;
  }
`;

export { Container };
