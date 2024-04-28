import { styled } from "@linaria/react";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 4px;

  position: sticky;
  top: 16px;

  min-width: 200px;
  max-width: 200px;

  height: calc(100vh - 6rem);

  footer {
    display: flex;
    flex-direction: column;

    max-width: 200px;

    background-color: var(--secondary-100);
    border-radius: 6px;

    margin-top: auto;
    padding: 0.75rem;

    strong {
      font-size: 14px;
      font-weight: 600;
    }

    p {
      color: var(--secondary-500);
      font-size: 12px;
      font-weight: 400;

      max-width: 200px;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
`;

export { Container };
