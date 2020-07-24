import {Entity, PrimaryGeneratedColumn, Column, Unique, BaseEntity} from "typeorm";
import {Length} from "class-validator";
import * as bcrypt from 'bcryptjs'

@Entity()
@Unique(['email'])
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @Length(4, 20)
    email: string;

    @Column()
    @Length(4, 100)
    password: string;

    @Column()
    token: string;

    hashPassword() {
        this.password = bcrypt.hashSync(this.password, 8)
    }

    checkIfUnencryptedPasswordIsValid(unencryptedPassword: string) {
        return bcrypt.compareSync(unencryptedPassword, this.password)
    }
}
