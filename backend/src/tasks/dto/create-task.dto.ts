export class CreateTaskDto {
  title: string;
  taskDate: string;
  effortLevel?: number;
  isDone?: boolean;
}