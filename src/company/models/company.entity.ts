import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Food } from './food.entity';
import { Intermediary } from './intermediary.entity';

@Entity()
export class Company {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  cnpj: string;

  @Column()
  address: string;

  @Column()
  phone: string;

  @Column()
  email: string;

  @OneToMany(() => Food, (food) => food.company)
  foods: Food[];

  // Uma empresa pode ter várias intermediadores
  @OneToMany(() => Intermediary, (intermediary) => intermediary.company)
  intermediaries: Intermediary[];
}
