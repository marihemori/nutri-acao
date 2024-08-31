import { OrganizationAgentDto } from '../agent/agent-organization.dto';
import { MainFoodDto } from '../food/main-food.dto';
import { ReceivedFoodDto } from '../food/received-food.dto';

export class OrganizationDto {
  id: string;
  name: string;
  description: string;
  cnpj: string;
  socialNumber: string;
  address: string;
  phone: string;
  email: string;
  password: string;
  mainFoods: MainFoodDto[];
  receivedFoods?: ReceivedFoodDto[];
  organizationAgents?: OrganizationAgentDto[];
}
