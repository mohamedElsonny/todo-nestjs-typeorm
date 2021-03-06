import { Field, Int, ObjectType } from '@nestjs/graphql';

import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { OneToMany } from 'typeorm';

import { Task } from '../../task/entities/task.entity';

@Entity()
@ObjectType()
export class Todo {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Column()
  @Field()
  content: string;

  @Column('text')
  @Field()
  description: string;

  @OneToMany(() => Task, (task) => task.todo)
  @Field(() => [Task], { defaultValue: [] })
  tasks: Task[];

  @CreateDateColumn({ type: 'timestamp' })
  @Field()
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  @Field()
  updatedAt: Date;
}
