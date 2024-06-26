import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { UrlsModule } from './urls/urls.module';

@Module({
  imports: [ConfigModule.forRoot(),AuthModule, UsersModule,MongooseModule.forRoot(process.env.MONGODB_URI), UrlsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
