import { Button, IconButton } from "@arkyn/components";
import { useLoaderData, useNavigate } from "@remix-run/react";
import { ArrowRight, Trash } from "lucide-react";

import { ApiTable } from "~/components/ApiTable";
import { loader } from "../../functions/loader";
import { Badge, ButtonsContainer, TableCaption } from "./styles";

type BodyProps = {
  openCreateModal: () => void;
  openDeleteModal: (e: string) => void;
};

function Body({ openCreateModal, openDeleteModal }: BodyProps) {
  const loaderData = useLoaderData<typeof loader>();
  const navigate = useNavigate();

  return (
    <ApiTable>
      <TableCaption>
        <div>
          <h3></h3>
          <Button size="sm" variant="ghost" onClick={openCreateModal}>
            Add new Channel
          </Button>
        </div>
      </TableCaption>

      <thead>
        <tr>
          <th>Name</th>
          <th>Created At</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
        {loaderData.map((channel) => (
          <tr key={channel.id}>
            <td>{channel.name}</td>
            <td>{new Date(channel.created_at).toLocaleDateString("pt-br")}</td>
            <td>
              <Badge size="lg" scheme="success">
                Active
              </Badge>
            </td>
            <td>
              <ButtonsContainer>
                <IconButton
                  onClick={() => openDeleteModal(channel.id)}
                  scheme="danger"
                  variant="outline"
                  aria-label="Delete Channel"
                  size="xs"
                  icon={Trash}
                />

                <IconButton
                  onClick={() => navigate(`/v2/channels/${channel.id}`)}
                  variant="outline"
                  aria-label="Manage your calls"
                  size="xs"
                  icon={ArrowRight}
                />
              </ButtonsContainer>
            </td>
          </tr>
        ))}
      </tbody>
    </ApiTable>
  );
}

export { Body };
