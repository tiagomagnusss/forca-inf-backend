import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { OAuth2Client } from 'google-auth-library';
import { Model } from 'mongoose';
// import { UsersService } from 'src/users/users.service';
// import { CreateUserDto } from '../users/dto/create-user.dto';
import { User, UserDocument } from '../users/schemas/user.schema';

const client = new OAuth2Client(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
);

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name)
    private readonly usersModel: Model<UserDocument>,
    private jwtService: JwtService,
  ) {}

  // async validateUser(token: string): Promise<any> {
  //   const ticket = await client.verifyIdToken({
  //     idToken: token,
  //     audience: process.env.GOOGLE_CLIENT_ID,
  //   });

  //   const { email } = ticket.getPayload();
  //   const user = await this.usersModel.findOne({ email });
  //   if (user) return user;
  //   return null;
  // }

  async login(token: string): Promise<any> {
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: process.env.GOOGLE_CLIENT_ID,
    });

    const { email } = ticket.getPayload();
    const user = await this.usersModel.findOne({ email });
    if (!user) {
      const newUser = new this.usersModel({
        email,
        name,
      });
      await newUser.save();
      return {
        data: newUser,
        accessToken: this.jwtService.sign({
          sub: newUser._id,
          username: newUser.name,
          role: newUser.role,
        }),
        message: 'success',
      };
    } else {
      return {
        data: user,
        accessToken: this.jwtService.sign({
          sub: user._id,
          username: user.name,
          role: user.role,
        }),
        message: 'success',
      };
    }
  }
}
