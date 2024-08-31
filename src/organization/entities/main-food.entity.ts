import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  BeforeInsert,
} from 'typeorm';
import { v4 as uuidv4 } from 'uuid';
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

  @BeforeInsert()
  setId() {
    this.id = uuidv4();
  }
}
