import { Logger } from '@nestjs/common';

jest.mock('../src/shared/database/prisma.service.ts');

beforeAll(async () => {
  Logger.log('Inicializando testes');
});
