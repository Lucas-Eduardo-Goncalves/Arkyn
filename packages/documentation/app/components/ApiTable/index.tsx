import { ReactNode } from "react";
import { TableContainer } from "./styles";

type ApiTableProps = {
  children: ReactNode;
};

function ApiTable({ children }: ApiTableProps) {
  return (
    <TableContainer>
      <table>{children}</table>
    </TableContainer>
  );
}

export { ApiTable };
