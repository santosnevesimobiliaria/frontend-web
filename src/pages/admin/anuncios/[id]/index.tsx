import AdminLayout from '@/layout/adminPageInnerLayout';
import { GetServerSideProps } from 'next';
import { parseCookies } from 'nookies';

function EditarAnuncio() {
  return (
    <AdminLayout title="Editar Anúncio">
      <div>
        <h1>Editar Anuncio</h1>
      </div>
    </AdminLayout>
  );
}

export default EditarAnuncio;

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
