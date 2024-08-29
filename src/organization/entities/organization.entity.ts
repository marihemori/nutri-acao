import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { SocialIntermediary } from './social-intermediary.entity';

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

  @Column('simple-array')
  mainFoods: string[];

  @OneToMany(
    () => SocialIntermediary,
    (socialIntermediary) => socialIntermediary.ngo,
  )
  socialIntermediaries: SocialIntermediary[];

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createAt: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updateAt: Date;
}
