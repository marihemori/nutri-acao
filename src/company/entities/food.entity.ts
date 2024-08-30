import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

@Entity()
export class Food {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  type: string;

  @Column()
  quantity: number;

  @Column()
  weight: number;

  // @ManyToMany(() => Company, (company) => company.foods)
  // company: Company;

  @BeforeInsert()
  setId() {
    this.id = uuidv4();
  }
}
