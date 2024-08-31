import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Company } from '../entities/company.entity';
import { CreateCompanyDto } from '../dto/company/create-company.dto';
import { ICompanyRepository } from '../interfaces/company-repository.interface';

@Injectable()
export class CompanyRepository implements ICompanyRepository {
  constructor(
    @InjectRepository(Company)
    private readonly companyRepository: Repository<Company>,
  ) {}

  // Encontrar todas as empresas
  async findAllCompanies(): Promise<Company[]> {
    return this.companyRepository.find();
  }

  // Encontrar uma empresa por ID
  async findCompanyById(id: string): Promise<Company> {
    const company = await this.companyRepository.findOneBy({ id });
    console.log(company);
    return company;
  }

  // Criar uma empresa
  async createCompany(createCompanyDto: CreateCompanyDto): Promise<Company> {
    const company = this.companyRepository.create(createCompanyDto);
    return this.companyRepository.save(company);
  }

  // Atualizar uma empresa
  async updateCompany(id: string, company: Partial<Company>): Promise<Company> {
    await this.companyRepository.update(id, company);
    return this.findCompanyById(id);
  }

  // Deletar uma empresa
  async deleteCompany(id: string): Promise<void> {
    await this.companyRepository.delete(id);
  }
}
