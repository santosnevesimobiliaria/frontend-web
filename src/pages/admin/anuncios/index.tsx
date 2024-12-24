import Actions from '@/components/admin/actions';
import CustomTable from '@/components/customTable';
import DefaultButton from '@/components/defaultButton';
import DefaultTextInput from '@/components/defaultTextInput';
import AdminLayout from '@/layout/adminPageInnerLayout';
import { api } from '@/services/axios';
import { Property } from '@/types/propertiesType';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { parseCookies } from 'nookies';

interface DashboardAnunciosProps {
  propertiesData: Property[];
}

function DashboardAnuncios({ propertiesData }: DashboardAnunciosProps) {
  const router = useRouter();

  const headItens = {
    id: 'Código',
    title: 'Título',
    price: 'Preço',
    'Realtor.name': 'Corretor',
    actions: 'Ações',
  };

  const bodyItens = propertiesData?.map((property: Property) => {
    return { ...property, actions: <Actions page='anuncios' propertyId={property.id} /> };
  });

  return (
    <AdminLayout title="Dashboard Anúncios">
      <span className="absolute right-10">
        <DefaultButton
          onClinkFunc={() => router.push('/admin/anuncios/novo')}
          text="Adicionar anúncio"
          orangeSchema
        />
      </span>
      <span className="flex w-full justify-center items-center">
        <DefaultTextInput maxWidth={'60%'} placeholder="Pesquisar anúncio" />
      </span>
      <CustomTable headItens={headItens} bodyItens={bodyItens} />
    </AdminLayout>
  );
}

export default DashboardAnuncios;

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

  try {
    const response = await api.get('/properties', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return {
      props: {
        propertiesData: response.data as Property[],
      },
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      props: {
        propertiesData: null,
      },
    };
  }
};
