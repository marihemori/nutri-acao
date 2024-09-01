import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Configuração do Swagger
  const config = new DocumentBuilder()
    .setTitle('Nutrição')
    .setDescription(
      'API para o gerenciamento de doação de alimentos de empresas para organizações',
    )
    .setVersion('1.0')

    .addTag('Empresas', 'API para gerenciamento de empresas')
    .addTag('Organizações', 'API para gerenciamento de organizações')
    .addTag(
      'Alimentos de maior preferência',
      'API para gerenciamento de alimentos que a organização prefere',
    )
    .addTag(
      'Agentes empresariais',
      'API para gerenciamento de agentes da empresa',
    )
    .addTag(
      'Agentes organizacionais',
      'API para gerenciamento de agentes da organização',
    )
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
