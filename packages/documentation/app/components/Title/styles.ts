import { styled } from "@linaria/react";

const H1 = styled.h2`
  letter-spacing: -0.015em;
  font-size: 2.25rem;
  font-weight: 700;

  color: var(--secondary-900);
  flex: 1;
`;

const H2 = styled.h2`
  letter-spacing: -0.015em;
  font-size: 1.875rem;
  font-weight: 600;
  margin-top: 16px;

  color: var(--secondary-900);

  flex: 1;
  padding-bottom: 8px;
  border-bottom: 1px solid var(--secondary-200);

  svg {
    display: none;
  }

  &:hover {
    svg {
      display: unset;
    }
  }
`;

const H3 = styled.h3`
  letter-spacing: -0.015em;
  font-size: 1.5rem;
  font-weight: 600;

  color: var(--secondary-900);

  svg {
    display: none;
  }

  &:hover {
    svg {
      display: unset;
    }
  }
`;

export { H1, H2, H3 };
