import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Company } from './company.entity';

@Entity()
export class Intermediary {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  cpf: string;

  @Column()
  phone: string;

  @Column()
  email: string;

  @Column()
  address: string;

  // Uma empresa pode ter várias intermediadores
  @ManyToOne(() => Company, (company) => company.intermediaries)
  company: Company;
}
