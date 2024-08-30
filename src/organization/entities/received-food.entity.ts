import { Company } from 'src/company/entities/company.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Organization } from './organization.entity';

@Entity()
export class ReceivedFood {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  type: string;

  @Column('decimal')
  weight: number;

  @Column('int')
  quantity: number;

  @ManyToOne(() => Organization, (organization) => organization.receivedFoods)
  organization: Organization;

  @ManyToOne(() => Company)
  company: Company;

  @Column()
  companyId: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createAt: Date;
}
