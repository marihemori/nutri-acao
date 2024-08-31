import { MainFood } from '../entities/main-food.entity';

export interface IMainFoodRepository {
  findAllByOrganizationId(organizationId: string): Promise<MainFood[]>;
  findById(id: string): Promise<MainFood | null>;
  createMainFood(mainFood: MainFood): Promise<MainFood>;
  updateMainFood(id: string, mainFood: Partial<MainFood>): Promise<MainFood>;
  deleteMainFood(id: string): Promise<void>;
}
