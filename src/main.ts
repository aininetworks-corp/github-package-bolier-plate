import { Module } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

@Module({})
class BootstrapModule {}

const bootstrap = async () => {
  const app = await NestFactory.create(BootstrapModule);
  await app.close();
};

bootstrap();
