import { useState } from 'react';
import { Input } from './Input';

export function AddTask({ onAddTaskSubmit }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  return (
    <div className="space-y-4 p-6 bg-[#F2F2F2] rounded-md shadow flex flex-col ">
      <Input
        type="text"
        placeholder="Digite o Título da Tarefa"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <Input
        type="text"
        placeholder="Digite a descrição da tarefa"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <button
        className="bg-[#7776A6] hover:bg-[#2F2B8C] text-white px-4 py-2 rounded-md font-medium cursor-pointer"
        onClick={() => {
          if (!title.trim() && !description.trim()) {
            return alert('Preencha o título e a descrição da tarefa!');
          } else {
            onAddTaskSubmit(title, description);
            setTitle('');
            setDescription('');
          }
        }}
      >
        Adicionar
      </button>
    </div>
  );
}
