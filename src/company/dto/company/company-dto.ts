import { CompanyAgentDto } from '../agent/agent-company.dto';

export class CompanyDto {
  id: string;
  name: string;
  description: string;
  cnpj: string;
  address: string;
  email: string;
  password: string;
  phone: string;
  companyAgents: CompanyAgentDto[];
}
