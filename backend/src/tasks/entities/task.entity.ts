import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tasks')
export class Task {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 200 })
  title: string;

  @Column({ type: 'date', name: 'task_date' })
  taskDate: string;

  @Column({ type: 'int', name: 'effort_level', default: 0 })
  effortLevel: number;

  @Column({ name: 'is_done', default: false })
  isDone: boolean;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;
}