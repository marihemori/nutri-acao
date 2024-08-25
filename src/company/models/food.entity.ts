import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
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

  @ManyToOne(() => Company, (company) => company.foods)
  company: Company;
}
