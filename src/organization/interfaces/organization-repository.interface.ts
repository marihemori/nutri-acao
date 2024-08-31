import { Organization } from '../entities/organization.entity';

export interface IOrganizationRepository {
  findAllOrganizations(): Promise<Organization[]>;
  findOrganizationById(id: string): Promise<Organization>;
  createOrganization(company: Organization): Promise<Organization>;
  updateOrganization(
    id: string,
    company: Partial<Organization>,
  ): Promise<Organization>;
  deleteOrganization(id: string): Promise<void>;
}
