import { Injectable, NotFoundException } from '@nestjs/common';
import { Company } from '../entities/company.entity';
import { CreateCompanyDto } from '../dto/company/create-company.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ReceivedFoodDto } from 'src/organization/dto/food/received-food.dto';
import { ReceivedFood } from 'src/organization/entities/received-food.entity';
import { ReceivedFoodRepository } from 'src/organization/repository/received-food.repository';
import { OrganizationRepository } from 'src/organization/repository/organization.repository';
import { Repository } from 'typeorm';

@Injectable()
export class CompanyService {
  constructor(
    @InjectRepository(Company)
    private readonly companyRepository: Repository<Company>,

    private readonly organizationRepository: OrganizationRepository,

    private readonly receivedFoodRepository: ReceivedFoodRepository,
  ) {}

  // Encontrar todas as empresas
  async findAllCompanies(): Promise<Company[]> {
    const companies = await this.companyRepository.find();
    return companies;
  }

  // Encontrar uma empresa por ID
  async findCompanyById(id: string): Promise<Company> {
    const company = await this.companyRepository.findOneBy({ id });
    if (!company) {
      throw new NotFoundException(`Empresa não encontrada!`);
    }
    return company;
  }

  // Criar uma empresa
  async createCompany(createCompanyDto: CreateCompanyDto): Promise<Company> {
    return this.companyRepository.create(createCompanyDto);
  }

  // Enviar alimento para uma organização
  async sendFoodToOrganization(
    companyId: string,
    organizationId: string,
    receivedFoodDto: ReceivedFoodDto,
  ): Promise<ReceivedFood> {
    // Encontrar a empresa
    const organization =
      await this.organizationRepository.findOrganizationById(organizationId);

    if (!organization) {
      throw new NotFoundException(`Organização não encontrada!`);
    }

    const receivedFood = new ReceivedFood();
    receivedFood.name = receivedFoodDto.name;
    receivedFood.type = receivedFoodDto.type;
    receivedFood.weight = receivedFoodDto.weight;
    receivedFood.quantity = receivedFoodDto.quantity;
    receivedFood.companyId = companyId;

    const savedReceivedFood =
      await this.receivedFoodRepository.createReceivedFood(receivedFood);

    organization.receivedFoods.push(savedReceivedFood);
    await this.organizationRepository.createOrganization(organization);

    return savedReceivedFood;
  }
}
