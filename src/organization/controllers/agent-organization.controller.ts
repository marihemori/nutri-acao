import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AgentOrganization } from '../entities/agent-organization.entity';
import { AgentOrganizationService } from '../services/agent-organization.service';

@Controller('agent-organization')
export class AgentOrganizationController {
  constructor(
    private readonly agentOrganizationService: AgentOrganizationService,
  ) {}

  // Listar todos os agentes da organização
  @Get()
  async findAllAgents(): Promise<AgentOrganization[]> {
    return this.agentOrganizationService.findAllAgents();
  }

  // Encontrar um agente da organização por ID
  @Get('/:id')
  async findAgentById(@Param('id') id: string): Promise<AgentOrganization> {
    const agent = await this.agentOrganizationService.findAgentById(id);
    console.log(agent);
    return agent;
  }

  // Criar um agente da organização
  @Post('/create')
  async createAgent(
    @Body() createAgentOrganizationDto: AgentOrganization,
  ): Promise<AgentOrganization> {
    return this.agentOrganizationService.createAgent(
      createAgentOrganizationDto,
    );
  }
}
