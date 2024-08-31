import { InjectRepository } from '@nestjs/typeorm';
import { AgentCompany } from '../entities/agent-company.entity';
import { Repository } from 'typeorm';
import { CompanyRepository } from '../repository/company.repository';
import { AgentCompanyDto } from '../dto/agent/agent-company.dto';
import { Company } from '../entities/company.entity';

export class AgentCompanyService {
  constructor(
    @InjectRepository(AgentCompany)
    private readonly agentCompanyRepository: Repository<AgentCompany>,
    @InjectRepository(Company)
    private readonly companyRepository: CompanyRepository,
  ) {}

  // Encontrar todos os agentes de empresa
  async findAllAgents(): Promise<AgentCompany[]> {
    const agents = await this.agentCompanyRepository.find();
    return agents;
  }

  // Encontrar um agente de empresa por ID
  async findAgentById(id: string): Promise<AgentCompany> {
    const agent = await this.agentCompanyRepository.findOneBy({ id });
    return agent;
  }

  // Criar um agente de empresa
  async createAgentCompany(
    createAgentCompanyDto: AgentCompanyDto,
  ): Promise<AgentCompany> {
    const company = await this.companyRepository.findCompanyById(
      createAgentCompanyDto.companyId,
    );

    if (!company) {
      throw new Error(`Empresa não encontrada!`);
    }

    const newAgent = this.agentCompanyRepository.create({
      ...createAgentCompanyDto,
      company,
    });

    company.companyAgents.push(newAgent);

    await this.companyRepository.createCompany(company);

    await this.agentCompanyRepository.save(newAgent);

    return newAgent;
  }
}
