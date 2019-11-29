import { BaseEntity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToOne } from "typeorm";
import MedicalRecord from "../MedicalRecord/MedicalRecord";

class ConfirmRecord extends BaseEntity{
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: "text"})
    result: string;

    @Column()
    medicalRecordId: number;
    
    @OneToOne(type => MedicalRecord, medicalRecord => medicalRecord.confirm)
    medicalRecord: MedicalRecord;

    @CreateDateColumn() createdAt: string;
    @UpdateDateColumn() updatedAt: string;
}

export default ConfirmRecord;