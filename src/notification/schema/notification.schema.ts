import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type NotificationDocument = Notification & Document;

@Schema()
export class Notification {
  @Prop()
  type: string;

  @Prop()
  to: string;

  @Prop()
  correlation_id: number;

  @Prop()
  message: string;
}

export const NotificationSchema = SchemaFactory.createForClass(Notification);
