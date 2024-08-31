import { AgentOrganization } from '../entities/agent-organization.entity';

export interface IAgentOrganizationRepository {
  findAllAgents(): Promise<AgentOrganization[]>;
  findAgentById(id: string): Promise<AgentOrganization>;
  createAgent(agent: AgentOrganization): Promise<AgentOrganization>;
  updateAgent(
    id: string,
    agent: Partial<AgentOrganization>,
  ): Promise<AgentOrganization>;
  deleteAgent(id: string): Promise<{ deleted: boolean }>;
}
