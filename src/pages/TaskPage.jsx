import { ChevronLeftIcon } from 'lucide-react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Title } from '../components/Title';

export function TaskPage() {
  const navigate = useNavigate();
  //pegar query params
  const [searchParams] = useSearchParams();

  const title = searchParams.get('title');
  const description = searchParams.get('description');

  return (
    <div className="h-screen w-screen bg-[#423F8C] p-6 flex justify-center">
      <div className="w-[500px] space-y-4">
        <div className="flex justify-center relative mb-6">
          <button
            onClick={() => navigate(-1)}
            className="cursor-pointer absolute left-0 top-0 bottom-0 text-gray-200"
          >
            <ChevronLeftIcon />
          </button>
          <Title>Detalhes da Tarefa</Title>
        </div>
        <div className="bg-slate-200 p-4 rounded-md text-center">
          <h2 className="text-xl font-bold text-slate-600">{title}</h2>
          <p className="text-slate-600">{description}</p>
        </div>
      </div>
    </div>
  );
}
