import { Instance } from "@arkyn/api";

const api = new Instance({
  base_url: process.env.API_BASE_URL,
  inbox_flow: {
    channel_id: "0fb19075-8d0d-4b52-845c-9afbeeba56a3",
    user_token:
      "eyJhbGciOiJIUzI1NiJ9.eyJtYWlsIjoibHVjYXNnb25jYWx2ZXNnaXRodWJAZ21haWwuY29tIiwiaWQiOiI4NTRkMTBiZS05OTQ5LTRmMjAtOTU5MS1lYWU4NGVkNDg2OGEiLCJpYXQiOjE3MTM2Mjg5NjQsImlzcyI6InVybjpleGFtcGxlOmlzc3VlciIsImF1ZCI6InVybjpleGFtcGxlOmF1ZGllbmNlIiwiZXhwIjoxNzQ1MTg2NTY0fQ.WuDZQFvPKNhGFpRvCsLRuerUnPPTl5GiVSTwFOy1_co",
  },
});

export { api };
