import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AgentOrganization } from '../entities/agent-organization.entity';
import { AgentOrganizationService } from '../services/agent-organization.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Agentes organizacionais')
@Controller('agent-organization')
export class AgentOrganizationController {
  constructor(
    private readonly agentOrganizationService: AgentOrganizationService,
  ) {}

  // Listar todos os agentes da organização
  @ApiOperation({ summary: 'Lista todos os agentes da organização' })
  @ApiResponse({
    status: 200,
    type: AgentOrganization,
    description: 'Lista de agentes',
  })
  @ApiResponse({ status: 404, description: 'Organização não encontrada!' })
  @Get()
  async findAllAgents(): Promise<AgentOrganization[]> {
    return this.agentOrganizationService.findAllAgents();
  }

  // Encontrar um agente da organização por ID
  @ApiOperation({ summary: 'Encontra um agente da organização por ID' })
  @ApiResponse({
    status: 200,
    type: AgentOrganization,
    description: 'Agente encontrado',
  })
  @ApiResponse({ status: 404, description: 'Agente não encontrado!' })
  @Get('/:id')
  async findAgentById(@Param('id') id: string): Promise<AgentOrganization> {
    const agent = await this.agentOrganizationService.findAgentById(id);
    console.log(agent);
    return agent;
  }

  // Criar um agente da organização
  @ApiOperation({ summary: 'Cria um agente da organização' })
  @ApiResponse({
    status: 201,
    type: AgentOrganization,
    description: 'Agente criado',
  })
  @ApiResponse({ status: 404, description: 'Organização não encontrada!' })
  @Post('/create')
  async createAgent(
    @Body() createAgentOrganizationDto: AgentOrganization,
  ): Promise<AgentOrganization> {
    return this.agentOrganizationService.createAgent(
      createAgentOrganizationDto,
    );
  }
}
