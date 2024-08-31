import { AgentCompany } from '../entities/agent-company.entity';

export interface IAgentCompanyRepository {
  findAllAgents(): Promise<AgentCompany[]>;
  findAgentById(id: string): Promise<AgentCompany>;
  createAgent(agent: AgentCompany): Promise<AgentCompany>;
  updateAgent(id: string, agent: Partial<AgentCompany>): Promise<AgentCompany>;
  deleteAgent(id: string): Promise<void>;
}
