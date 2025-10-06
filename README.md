# 📝 Gerenciador de Tarefas (Task Manager)

Um aplicativo simples e funcional de **gerenciamento de tarefas (CRUD)** desenvolvido com **React**, **Vite** e **Tailwind CSS**.  
O projeto permite **criar**, **listar**, **atualizar (marcar como concluída)** e **deletar** tarefas, com **armazenamento local (localStorage)** para persistência dos dados.

---

## 🚀 Tecnologias Utilizadas

- ⚛️ **React** – biblioteca principal para a construção da interface.
- ⚡ **Vite** – ferramenta de build ultrarrápida.
- 🎨 **Tailwind CSS** – estilização moderna e responsiva.
- 🧠 **React Hooks**
  - `useState` para gerenciar estados internos.
  - `useEffect` para sincronizar dados com o `localStorage`.
- 🔄 **React Router** – navegação entre páginas (quando aplicável).
- 📦 **UUID** – geração de IDs únicas para as tarefas.
- 💾 **LocalStorage** – persistência das tarefas no navegador.

---

## 🧩 Funcionalidades

✅ Adicionar nova tarefa (com título e descrição)  
✅ Listar todas as tarefas  
✅ Marcar tarefa como concluída/não concluída  
✅ Excluir tarefas individualmente  
✅ Salvar automaticamente no navegador (mesmo após recarregar a página)

---

## 🖼️ Demonstração

### Tela principal
<img width="756" height="607" alt="image" src="https://github.com/user-attachments/assets/a0e32cbe-ed52-4f52-9ce7-bf49c8c41ae5" />


A interface é intuitiva e responsiva, permitindo o gerenciamento rápido das suas tarefas diárias.

---

## 🧠 Conceitos Aplicados

- **Componentização:**  
  Separação do código em componentes reutilizáveis (`Title`, `Tasks`, `AddTask`, etc).

- **Hooks:**  
  Utilização de `useState` e `useEffect` para controle de estado e sincronização com o `localStorage`.

- **Props:**  
  Passagem de funções e dados entre componentes para manter o código limpo e organizado.

- **Gerenciamento de estado local:**  
  Cada ação (adicionar, deletar, marcar como concluída) atualiza o estado do React e reflete automaticamente na UI.

---

## ⚙️ Como Executar o Projeto
Acesse meu deploy: https://task-manager-with-react-jsx.vercel.app/
