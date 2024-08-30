import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { OrganizationAgent } from './agent-organization.entity';
import { MainFood } from './main-food.entity';
import { ReceivedFood } from './received-food.entity';

@Entity()
export class Organization {
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

  @Column()
  password: string;

  @Column()
  socialNumber: string;

  @OneToMany(() => MainFood, (mainFood) => mainFood.organization, {
    cascade: true,
  })
  mainFoods: MainFood[];

  @OneToMany(() => ReceivedFood, (receivedFood) => receivedFood.organization, {
    cascade: true,
  })
  receivedFoods: ReceivedFood[];

  @OneToMany(
    () => OrganizationAgent,
    (organizationAgent) => organizationAgent.organization,
  )
  organizationAgents: OrganizationAgent[];

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createAt: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updateAt: Date;
}
