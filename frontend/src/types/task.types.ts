export interface Task{
  id: string;
  title: string;
  description?: string;
  isComplete: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface CreateTaskInput{
  title: string;
  description?: string;
}

export interface UpdateTaskInput{
  title?: string;
  description?: string;
  isComplete?: boolean;
}