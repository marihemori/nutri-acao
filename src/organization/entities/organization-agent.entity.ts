import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Organization } from './organization.entity';

@Entity()
export class OrganizationAgent {
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

  @ManyToOne(
    () => Organization,
    (organization) => organization.organizationAgents,
  )
  organization: Organization;
}
