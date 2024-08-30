import { CompanyAgentDto } from '../agent/agent-company.dto';
import { FoodDto } from '../food/food.dto';

export class CompanyDto {
  name: string;
  description: string;
  cnpj: string;
  address: string;
  email: string;
  password: string;
  phone: string;
  foodsToDonate: FoodDto[];
  comapanyAgents: CompanyAgentDto[];
}
