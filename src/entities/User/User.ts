import { Entity, BaseEntity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, BeforeUpdate, BeforeInsert, OneToMany, RelationCount } from "typeorm";
import { IsEmail, Length } from "class-validator";
import bcrypt from "bcrypt-nodejs";
import MedicalRecord from "../MedicalRecord/MedicalRecord";
import { TGender, TLanguage, TAddress } from "../../types/types";
import { Board } from "../Board/Board";

const GenderAttr: TGender[] = [
    "M",
    "W"
];
const Nationality: TLanguage[] = [
    "KO",
    "EN",
    "CH",
    "JA",
    "FR",
    "ES", 
    "RU", 
    "MO",
    "VI",
    "TH",
    "US",
    "CA",
    "ME",
    "TA",
    "HO"
];
const Address: TAddress[] = [
    "SEOUL",
    "BUSAN",
    "DAEGU",
    "INCHEON",
    "GWANGJU",
    "DAEJEON",
    "ULSAN",
    "SEJONG",
    "GYEONGGI",
    "GANGWON",
    "CHUNGBUK",
    "CHUNGNAM",
    "JEONBUK",
    "JEONNAM",
    "GYEONGBUK",
    "GYEONGNAM",
    "JEJU"
];
@Entity("users")
class User extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;
    
    @Column({ type: "text",nullable: false,  enum: GenderAttr, default: "M" })
    gender: TGender;

    @Column({ type: "text" })
    @Length(3, 25, {
        groups: ["length"],
        message: "ID is a string, which is 3-50 characters long."
    })
    userId: string;

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

    @Column('boolean')
    isAbroad: boolean;

    @Column({ type: "text", enum: Nationality, default: "KO" })
    nationality: TLanguage;

    @Column({ type: "text" })
    password: string;

    @Column({ type: "int" })
    age: number;
    
    @Column({ type: "text", nullable: true })
    abroadAddress: string | null;
    
    @Column({ type: "text", enum: Address, nullable: true })
    addressList: TAddress | null;

    @Column({ type: "text", nullable: true })
    addressItem: string | null;

    @OneToMany(type => MedicalRecord, medicalRecord => medicalRecord.patient)
    medicalRecords: MedicalRecord[];

    @RelationCount((user: User) => user.medicalRecords)
    medicalRecordsCount: number;
    
    @OneToMany(type => Board, board => board.writer)
    boards: Board[];
    
    @RelationCount((user: User) => user.boards)
    boardCount: number;

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