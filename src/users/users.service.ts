import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User, UserDocument } from './schemas/user.schema';
@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name)
    private readonly usersModel: Model<UserDocument>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const createdUser = await this.usersModel.create(createUserDto);
    return createdUser;
  }

  async findAll(): Promise<User[]> {
    return this.usersModel.find().exec();
  }

  async findOne(id: string): Promise<User> {
    return this.usersModel.findOne({ _id: id }).lean().exec();
  }

  async findOneByMail(mail: string): Promise<User> {
    return this.usersModel.findOne({ mail: mail }).lean().exec();
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const updatedUser = await this.usersModel;
    return updatedUser;
  }

  async delete(id: string) {
    const deletedUser = await this.usersModel
      .findByIdAndRemove({ _id: id })
      .exec();
    return deletedUser;
  }
}
