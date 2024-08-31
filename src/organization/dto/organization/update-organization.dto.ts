import { UpdateOrganizationAgentDto } from '../agent/update-agent-organization-.dto';
import { ReceivedFoodDto } from '../food/received-food.dto';
import { UpdateMainFoodDto } from '../food/update-main-food.dto';

export class UpdateOrganizationDto {
  name?: string;
  description?: string;
  cnpj?: string;
  socialNumber?: string;
  address?: string;
  phone?: string;
  email?: string;
  password?: string;
  mainFoods?: UpdateMainFoodDto[];
  receivedFoods?: ReceivedFoodDto[];
  organizationAgents?: UpdateOrganizationAgentDto[];
}
