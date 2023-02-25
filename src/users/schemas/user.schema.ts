import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true, unique: true })
  mail: string;

  @Prop({ required: true })
  password: string;

  @Prop({ default: false, required: true })
  confirmed: Boolean;

  @Prop({ default: Date.now, required: true })
  createdAt: Date;

  @Prop({ enum: ['teacher', 'student', 'admin'], default: 'student', required: true })
  role: 'teacher' | 'student' | 'admin';
}

export const UserSchema = SchemaFactory.createForClass(User);
