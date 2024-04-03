import { styled } from "@linaria/react";

const Container = styled.p`
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 400;
  color: var(--secondary-600);

  code {
    font-size: 0.9rem;
    line-height: 1.3rem;

    font-family: monospace;
    padding: 2px 4px;
    border-radius: 4px;
    background: var(--secondary-100);

    &.area {
      display: block;
      padding: 12px 20px;
    }
  }
`;

export { Container };
