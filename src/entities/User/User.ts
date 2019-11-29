import { Entity, BaseEntity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, BeforeUpdate, BeforeInsert, OneToMany } from "typeorm";
import { IsEmail, Length } from "class-validator";
import bcrypt from "bcrypt-nodejs";
import MedicalRecord from "../MedicalRecord/MedicalRecord";
import { TGender, TLanguage } from "../../types/types";

const GenderAttr: TGender[] = [
    "M",
    "W"
];
const Nationality: TLanguage[] = [
    "KO",
    "EN",
    "CH",
    "FR"
];

@Entity()
class User extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;
    
    @Column({ type: "text",nullable: false,  enum: GenderAttr, default: "M" })
    gender: TGender;

    @Column({ type: "text" })
    @Length(1, 50, {
        groups: ["length"],
        message: "FirstName is a string, which is 1-50 characters long."
    })
    firstName: string;

    @Column({ type: "text" })
    @Length(1, 50, {
        groups: ["length"],
        message: "LastName is a string, which is 1-50 characters long."
    })
    lastName: string;

    @IsEmail({}, {
        groups: ["email"],
        message: "Please enter a valid email format"
    })
    @Column({ type: "text" })
    email: string;

    @Column({ type: "text", enum: Nationality, default: "KO" })
    nationality: TLanguage;

    @Column({ type: "text" })
    password: string;

    @Column({ type: "int" })
    age: number;
    
    @Column({ type: "text" })
    address: string;

    @OneToMany(type => MedicalRecord, medicalRecord => medicalRecord.user, { nullable: true })
    medicalRecords: Array<MedicalRecord>;

    @CreateDateColumn() createdAt: string;

    @UpdateDateColumn() updatedAt: string;

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