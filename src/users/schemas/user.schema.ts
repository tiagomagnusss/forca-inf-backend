import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop()
  name: string;

  @Prop()
  mail: string;

  @Prop()
  password: string;

  @Prop()
  role: 'teacher' | 'student' | 'admin';
}

export const UserSchema = SchemaFactory.createForClass(User);
