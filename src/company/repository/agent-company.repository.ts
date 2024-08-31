import { Injectable } from '@nestjs/common';
import { IAgentCompanyRepository } from '../interfaces/agent-company-repository.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AgentCompany } from '../entities/agent-company.entity';

@Injectable()
export class AgentCompanyRepository implements IAgentCompanyRepository {
  constructor(
    @InjectRepository(AgentCompany)
    private readonly agentCompanyRepository: Repository<AgentCompany>,
  ) {}

  // Encontrar todos os agentes da empresa
  async findAllAgents(): Promise<AgentCompany[]> {
    return this.agentCompanyRepository.find();
  }

  // Encontrar um agente por ID
  async findAgentById(id: string): Promise<AgentCompany> {
    const agent = await this.agentCompanyRepository.findOneBy({ id });
    return agent;
  }

  // Criar um agente
  async createAgent(createAgentDto: AgentCompany): Promise<AgentCompany> {
    const agent = this.agentCompanyRepository.create(createAgentDto);
    return this.agentCompanyRepository.save(agent);
  }

  // Atualizar um agente
  async updateAgent(
    id: string,
    agent: Partial<AgentCompany>,
  ): Promise<AgentCompany> {
    await this.agentCompanyRepository.update(id, agent);
    return this.findAgentById(id);
  }

  // Deletar um agente
  async deleteAgent(id: string): Promise<void> {
    await this.agentCompanyRepository.delete(id);
  }
}
