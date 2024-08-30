import {
  BeforeInsert,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { v4 as uuidv4 } from 'uuid';
// import { Food } from './food.entity';
import { CompanyAgent } from './agent-company.entity';

@Entity()
export class Company {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  cnpj: string;

  @Column()
  address: string;

  @Column()
  phone: string;

  @Column()
  email: string;

  @Column()
  password: string;

  // @OneToMany(() => Food, (food) => food.company)
  // foods: Food[];

  // Uma empresa pode ter várias intermediadores
  @OneToMany(() => CompanyAgent, (agent) => agent.company)
  companyAgents: CompanyAgent[];

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createAt: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updateAt: Date;

  @BeforeInsert()
  setId() {
    this.id = uuidv4();
  }
}
