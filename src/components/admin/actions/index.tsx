import { useRouter } from 'next/router';

interface ActionsProps {
  propertyId: number;
  page: string;
};

const Actions = ({ propertyId, page }: ActionsProps) => {
  const router = useRouter();

  return (
    <div className="flex gap-2">
      <button
        onClick={() => router.push(`/admin/${page}/${propertyId}`)}
        className="bg-green-500 text-white p-2 rounded-lg"
      >
        Editar
      </button>
      <button className="bg-red-500 text-white p-2 rounded-lg">Excluir</button>
    </div>
  );
};

export default Actions;
