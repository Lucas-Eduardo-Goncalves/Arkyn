import { Badge as ArkynBadge } from "@arkyn/components";
import { styled } from "@linaria/react";

const ButtonsContainer = styled.div`
  display: flex;
  gap: 2px;
`;

const Badge = styled(ArkynBadge)`
  width: min-content;
  white-space: nowrap;
`;

const TableCaption = styled.caption`
  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 1rem;
  }
`;

export { TableCaption, Badge, ButtonsContainer };
