import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AgentCompanyService } from '../services/agent-company.service';
import { AgentCompanyDto } from '../dto/agent/agent-company.dto';
import { AgentCompany } from '../entities/agent-company.entity';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Agentes empresariais')
@Controller('agent-company')
export class AgentCompanyController {
  constructor(private readonly agentCompanyService: AgentCompanyService) {}

  @ApiOperation({ summary: 'Lista todos os agentes da empresa' })
  @ApiResponse({
    status: 200,
    type: AgentCompany,
    description: 'Lista de agentes',
  })
  @ApiResponse({ status: 404, description: 'Empresa não encontrada!' })
  // Listar todos os agentes da empresa
  @Get()
  async findAllAgents(): Promise<AgentCompany[]> {
    return await this.agentCompanyService.findAllAgents();
  }

  @ApiOperation({ summary: 'Encontra um agente da empresa por ID' })
  @ApiResponse({
    status: 200,
    type: AgentCompany,
    description: 'Agente encontrado',
    isArray: false,
  })
  @ApiResponse({ status: 404, description: 'Agente não encontrado!' })
  // Encontrar um agente da empresa por ID
  @Get('/:id')
  async findAgentById(@Param('id') id: string): Promise<AgentCompany> {
    const agent = await this.agentCompanyService.findAgentById(id);
    console.log(agent);
    return agent;
  }

  @ApiOperation({ summary: 'Cria um agente da empresa' })
  @ApiResponse({
    status: 201,
    type: AgentCompany,
    description: 'Agente criado',
    isArray: false,
  })
  @ApiResponse({ status: 404, description: 'Empresa não encontrada!' })
  // Criar um agente da empresa
  @Post('/create')
  async createAgentCompany(
    @Body() createAgentCompanyDto: AgentCompanyDto,
  ): Promise<AgentCompany> {
    return this.agentCompanyService.createAgentCompany(createAgentCompanyDto);
  }
}
