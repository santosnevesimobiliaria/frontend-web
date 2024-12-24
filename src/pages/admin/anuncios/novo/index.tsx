import AdminLayout from "@/layout/adminPageInnerLayout";
import { GetServerSideProps } from "next";
import { parseCookies } from "nookies";

function NovoAnuncio() {
  return (
    <AdminLayout title="Novo Anúncio">
      <div>
        <h1>Novo Anúncio</h1>
      </div>
    </AdminLayout>
  );
}

export default NovoAnuncio;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const cookies = parseCookies(ctx);
  const token = cookies['santos_imoveis.access_token'];

  if (!token) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};