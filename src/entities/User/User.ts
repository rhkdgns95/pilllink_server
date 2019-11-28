import { Entity, BaseEntity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, BeforeUpdate, BeforeInsert } from "typeorm";
import { IsEmail, Max, Min } from "class-validator";
import bcrypt from "bcrypt-nodejs";

const GenderAttr: Gender[] = [
    "MAN",
    "WOMAN"
];

@Entity()
class User extends BaseEntity {

    @PrimaryGeneratedColumn()
    @Column()
    id: number;
    
    @Column({ type: "string", enum: GenderAttr })
    gender: Gender;

    @Min(1)
    @Max(20)
    @Column({ type: "text" })
    firstName: string;

    @Min(1)
    @Max(20)
    @Column({ type: "text" })
    lastName: string;

    @IsEmail()
    @Column({ type: "text" })
    email: string;

    @Column({ type: "text" })
    nationality: string;

    @Min(4)
    @Max(255)
    @Column({ type: "text" })
    password: string;

    @Column({ type: "int" })
    age: number;
    
    @Column({ type: "text" })
    address: string;

    @CreateDateColumn()
    createAt: string;

    @UpdateDateColumn()
    updatedAt: string;

    get fullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }

    public comparePassword = (password: string): boolean => {
        return bcrypt.compareSync(password, this.password);    
    }

    @BeforeInsert()
    @BeforeUpdate()
    savePassword (): void {
        if(this.password) {
            this.password = this.hashPassword(this.password);
        }
    }

    private hashPassword = (password: string): string => {
        return bcrypt.hashSync(password);
    }
}

export default User;