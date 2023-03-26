import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Role } from 'src/roles/role.enum';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ default: Date.now, required: true })
  createdAt: Date;

  @Prop({
    enum: ['teacher', 'student', 'admin'],
    default: 'student',
    required: true,
  })
  role: Role;
}

export const UserSchema = SchemaFactory.createForClass(User);
