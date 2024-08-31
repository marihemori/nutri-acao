import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AgentCompanyService } from '../services/agent-company.service';
import { AgentCompanyDto } from '../dto/agent/agent-company.dto';
import { AgentCompany } from '../entities/agent-company.entity';

@Controller('agent-company')
export class AgentCompanyController {
  constructor(private readonly agentCompanyService: AgentCompanyService) {}

  // Listar todos os agentes da empresa
  @Get()
  async findAllAgents(): Promise<AgentCompany[]> {
    return await this.agentCompanyService.findAllAgents();
  }

  // Encontrar um agente da empresa por ID
  @Get('/:id')
  async findAgentById(@Param('id') id: string): Promise<AgentCompany> {
    const agent = await this.agentCompanyService.findAgentById(id);
    console.log(agent);
    return agent;
  }

  // Criar um agente da empresa
  @Post('/create')
  async createAgentCompany(
    @Body() createAgentCompanyDto: AgentCompanyDto,
  ): Promise<AgentCompany> {
    return this.agentCompanyService.createAgentCompany(createAgentCompanyDto);
  }
}
