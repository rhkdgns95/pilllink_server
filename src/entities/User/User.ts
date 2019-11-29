import { Entity, BaseEntity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, BeforeUpdate, BeforeInsert, OneToMany } from "typeorm";
import { IsEmail, Max, Min } from "class-validator";
import bcrypt from "bcrypt-nodejs";
import MedicalRecord from "../MedicalRecord/MedicalRecord";

const GenderAttr: TGender[] = [
    "MAN",
    "WOMAN"
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
    @Column()
    id: number;
    
    @Column({ type: "string", enum: GenderAttr, default: "MAN" })
    gender: TGender;

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

    @Column({ type: "text", enum: Nationality, default: "KO" })
    nationality: TLanguage;

    @Min(4)
    @Max(255)
    @Column({ type: "text" })
    password: string;

    @Column({ type: "int" })
    age: number;
    
    @Column({ type: "text" })
    address: string;

    @OneToMany(type => MedicalRecord, medicalRecord => medicalRecord.user, { nullable: true })
    medicalRecords: Array<MedicalRecord>;

    @CreateDateColumn() createAt: string;

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