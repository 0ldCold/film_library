import {
  Body,
  Controller, Delete,
  Get,
  Path,
  Post, Put,
  Route,
} from "tsoa";
import type { UsersDTO, UserCreationParams } from "./Users.DTO";
import { UsersService } from "./Users.service";

@Route("users")
export class UsersController extends Controller {

  @Get()
  public async listUsers(): Promise<UsersDTO[]> {
    return new UsersService().getAll();
  }

  @Get("{userId}")
  public async getUser(
    @Path() userId: number
  ): Promise<UsersDTO> {
    return new UsersService().getOne(userId);
  }

  @Post()
  public async createUser(
    @Body() requestBody: UserCreationParams
  ): Promise<UsersDTO> {
    const result = await new UsersService().create(requestBody);
    this.setStatus(201);
    return result;
  }

  @Put("{userId}")
  public async updateUser(
    @Path() userId: number,
    @Body() requestBody: UserCreationParams,
  ): Promise<UsersDTO> {
    return await new UsersService().update(userId, requestBody);
  }

  @Delete("{userId}")
  public async deleteUser(
    @Path() userId: number
  ): Promise<void> {
    return await new UsersService().delete(userId)
  }
}
