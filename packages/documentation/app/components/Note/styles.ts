import { styled } from "@linaria/react";

const Container = styled.p`
  font-size: 1rem;
  line-height: 1.25rem;
  font-weight: 400;
  color: var(--secondary-600);

  padding: 1rem;
  border-left: 4px solid transparent;

  &.danger {
    border-color: var(--danger-500);
    background-color: var(--danger-50);
  }

  &.success {
    border-color: var(--success-500);
    background-color: var(--success-50);
  }

  &.warning {
    border-color: var(--warning-500);
    background-color: var(--warning-50);
  }

  &.info {
    border-color: var(--info-500);
    background-color: var(--info-50);
  }

  code {
    font-family: monospace;
    font-weight: 500;
    color: var(--primary-800);
  }
`;

export { Container };
