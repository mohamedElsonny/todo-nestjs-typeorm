import { Field, ObjectType, Int } from '@nestjs/graphql';

import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { Todo } from 'todo/entities/todo.entity';

@Entity()
@ObjectType()
export class Task {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Column('text')
  @Field()
  body: string;

  @Column()
  @Field(() => Int)
  todoId: number;

  @ManyToOne(() => Todo, (todo) => todo.tasks)
  @Field(() => Todo)
  todo: Todo;

  @CreateDateColumn({ type: 'timestamp' })
  @Field()
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  @Field()
  updatedAt: Date;
}
