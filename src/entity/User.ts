import {
  Entity,
  Column,
  PrimaryColumn,
  BeforeInsert,
  BaseEntity,
} from "typeorm";

// When working with typescript - sometimes there won't be
// type definition files...
import { v4 as uuidv4 } from "uuid";

@Entity("users")
export class User extends BaseEntity {
  @PrimaryColumn("uuid") id: string;

  @Column("varchar", { length: 255 }) email: string;

  @Column("text") password: string;

  // TypeORM allows you to run functions before
  // inserting data, using the following:
  @BeforeInsert()
  addId() {
    this.id = uuidv4();
  }
}
