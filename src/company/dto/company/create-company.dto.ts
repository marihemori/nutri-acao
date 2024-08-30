import { CreateCompanyAgentDto } from '../agent/create-agent-company.dto';
// import { CreateFoodDto } from '../food/create-food.dto';

export class CreateCompanyDto {
  id: string;
  name: string;
  description: string;
  cnpj: string;
  address: string;
  email: string;
  password: string;
  phone: string;
  // foodsToDonate: CreateFoodDto[];
  companyAgents?: CreateCompanyAgentDto[];
}
