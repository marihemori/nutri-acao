import { CreateOrganizationAgentDto } from '../agent/create-agent-organization.dto';
import { CreateMainFoodDto } from '../food/create-main-food.dto';
import { ReceivedFoodDto } from '../food/received-food.dto';

export class CreateOrganizationDto {
  id: string;
  name: string;
  description: string;
  cnpj: string;
  socialNumber: string;
  address: string;
  phone: string;
  email: string;
  password: string;
  mainFoods?: CreateMainFoodDto[];
  receivedFoods?: ReceivedFoodDto[];
  organizationAgents?: CreateOrganizationAgentDto[];
}
