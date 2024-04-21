import { styled } from "@linaria/react";

const Container = styled.main`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;
  gap: 1rem;

  height: 100vh;
  width: 100vw;

  h1 {
    font-size: 20px;
    color: var(--secondary-700);
    width: 236px;
  }

  form {
    width: 300px;

    display: flex;
    flex-direction: column;
    gap: 6px;

    background-color: var(--secondary-100);
    padding: 2rem;

    border-radius: 8px;
  }
`;

export { Container };
