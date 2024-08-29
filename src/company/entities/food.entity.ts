import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Company } from './company.entity';

@Entity()
export class Food {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  type: string;

  @Column()
  quantity: number;

  @Column()
  weight: number;

  @ManyToMany(() => Company, (company) => company.foods)
  company: Company;
}
