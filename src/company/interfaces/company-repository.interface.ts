import { Company } from '../entities/company.entity';

export interface ICompanyRepository {
  findAllCompanies(): Promise<Company[]>;
  findCompanyById(id: string): Promise<Company>;
  createCompany(company: Company): Promise<Company>;
  updateCompany(id: string, company: Partial<Company>): Promise<Company>;
  deleteCompany(id: string): Promise<void>;
}
