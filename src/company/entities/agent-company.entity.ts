import {
  BeforeInsert,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { v4 as uuidv4 } from 'uuid';
import { Company } from './company.entity';

@Entity()
export class CompanyAgent {
  @PrimaryGeneratedColumn('uuid')
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

  @Column()
  companyId: string;

  // Uma empresa pode ter várias intermediadores
  @ManyToOne(() => Company, (company) => company.companyAgents)
  @JoinColumn({ name: 'companyId' })
  company: Company;

  @BeforeInsert()
  setId() {
    this.id = uuidv4();
  }
}
