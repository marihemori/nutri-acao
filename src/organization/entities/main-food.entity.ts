import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Organization } from './organization.entity';

@Entity()
export class MainFood {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  type: string;

  @ManyToOne(() => Organization, (organization) => organization.mainFoods)
  organization: Organization;
}
