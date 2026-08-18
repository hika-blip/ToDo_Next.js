export type Todo = {
  id: string;
  title: string;
  completed: boolean;
  dueDate?: string; // YYYY-MM-DD形式
  createdAt: string;
};