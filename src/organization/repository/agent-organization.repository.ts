import { Injectable } from '@nestjs/common';
import { IAgentOrganizationRepository } from '../interfaces/agent-organization-repository.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { AgentOrganization } from '../entities/agent-organization.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AgentOrganizationRepository
  implements IAgentOrganizationRepository
{
  constructor(
    @InjectRepository(AgentOrganization)
    private readonly agentOrganizationRepository: Repository<AgentOrganization>,
  ) {}

  // Encontrar todos os agentes de organização
  async findAllAgents(): Promise<AgentOrganization[]> {
    return this.agentOrganizationRepository.find();
  }

  // Encontrar um agente de organização por ID
  async findAgentById(id: string): Promise<AgentOrganization> {
    const agent = await this.agentOrganizationRepository.findOneBy({ id });
    return agent;
  }

  // Criar um agente da organização
  async createAgent(
    createAgentOrganizationDto: AgentOrganization,
  ): Promise<AgentOrganization> {
    const agent = this.agentOrganizationRepository.create(
      createAgentOrganizationDto,
    );
    return this.agentOrganizationRepository.save(agent);
  }

  // Atualizar um agente da organização
  async updateAgent(
    id: string,
    agent: Partial<AgentOrganization>,
  ): Promise<AgentOrganization> {
    await this.agentOrganizationRepository.update(id, agent);
    return this.findAgentById(id);
  }

  // Deletar um agente da organização
  async deleteAgent(id: string): Promise<{ deleted: boolean }> {
    const result = await this.agentOrganizationRepository.delete(id);
    if (result.affected === 0) {
      throw new Error(`Agente não encontrado!`);
    }
    return { deleted: true };
  }
}
