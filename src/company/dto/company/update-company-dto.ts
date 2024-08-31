import { UpdateAgentCompanyDto } from '../agent/update-agent-company.dto';
// import { UpdateFoodDto } from '../food/update-food.dto';

export class UpdateCompanyDto {
  name?: string;
  description?: string;
  cnpj?: string;
  address?: string;
  email?: string;
  password?: string;
  phone?: string;
  // foodsToDonate?: UpdateFoodDto[];
  companyAgents?: UpdateAgentCompanyDto[];
}
