import { Column, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Ngo } from './ngo.entity';

export class SocialIntermediary {
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

  @ManyToOne(() => Ngo, (ngo) => ngo.socialIntermediaries)
  ngo: Ngo;
}
