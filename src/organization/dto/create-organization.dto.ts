export class CreateOrganizationDto {
  name: string;
  description: string;
  cnpj: string;
  socialNumber: string;
  address: string;
  phone: string;
  email: string;
  mainFoods: string[];
}
