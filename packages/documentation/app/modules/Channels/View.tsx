import { useState } from "react";
import { Container, Title } from "~/components";
import { Body } from "./components/Body";
import { FormModal } from "./components/FormModal";
import { DeleteModal } from "./components/DeleteModal";
import { Breadcrumb, BreadcrumbLink } from "@arkyn/components";

function View() {
  const [openAddModal, setOpenAddModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState<string | null>(null);

  return (
    <Container>
      <Breadcrumb>
        <BreadcrumbLink to="/">Inbox Flow API</BreadcrumbLink>
        <BreadcrumbLink to="/v2/channels">Channels</BreadcrumbLink>
      </Breadcrumb>

      <Title as="h1">Channels</Title>
      <Body
        openCreateModal={() => setOpenAddModal(true)}
        openDeleteModal={setOpenDeleteModal}
      />

      <FormModal
        isOpen={openAddModal}
        handleCloseModal={() => setOpenAddModal(false)}
      />

      <DeleteModal
        id={openDeleteModal || ""}
        isOpen={!!openDeleteModal}
        handleCloseModal={() => setOpenDeleteModal(null)}
      />
    </Container>
  );
}

export { View };
