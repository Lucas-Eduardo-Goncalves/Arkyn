import { styled } from "@linaria/react";

const Container = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 3rem 1.5rem;
  gap: 16px;

  flex: 1;
  background: var(--secondary-100);
  border-top: 1px solid var(--secondary-200);

  > h2 {
    color: var(--secondary-700);
    font-size: 16px;
    font-weight: 400;

    > strong {
      font-weight: 700;
    }
  }

  > p {
    color: var(--secondary-600);
    font-size: 12px;
    font-weight: 400;
  }
`;

export { Container };
