import { InjectRepository } from '@nestjs/typeorm';
import { AgentOrganization } from '../entities/agent-organization.entity';
import { Repository } from 'typeorm';
import { Organization } from '../entities/organization.entity';
import { NotFoundException } from '@nestjs/common';

export class AgentOrganizationService {
  constructor(
    @InjectRepository(AgentOrganization)
    private readonly agentOrganizationRepository: Repository<AgentOrganization>,
    @InjectRepository(Organization)
    private readonly organizationRepository: Repository<Organization>,
  ) {}

  // Encontrar todos os agentes de organização
  async findAllAgents(): Promise<AgentOrganization[]> {
    const agents = await this.agentOrganizationRepository.find();
    console.log(agents);
    return agents;
  }

  // Encontrar um agente de organização por ID
  async findAgentById(id: string): Promise<AgentOrganization> {
    const agent = await this.agentOrganizationRepository.findOneBy({ id });
    if (!agent) {
      throw new NotFoundException(`Agente não encontrado!`);
    }
    return agent;
  }

  // Criar um agente da organização
  async createAgent(
    createAgentOrganizationDto: AgentOrganization,
  ): Promise<AgentOrganization> {
    const organization = await this.organizationRepository.findOne({
      where: { id: createAgentOrganizationDto.organizationId },
      relations: ['organizationAgents'],
    });

    if (!organization) {
      throw new NotFoundException(
        `Organização com ID ${createAgentOrganizationDto.organizationId} não encontrada!`,
      );
    }

    const newAgent = this.agentOrganizationRepository.create({
      ...createAgentOrganizationDto,
      organization,
    });

    organization.organizationAgents.push(newAgent);

    await this.organizationRepository.save(organization);

    await this.agentOrganizationRepository.save(newAgent);

    return newAgent;
  }
}
