import { BaseEntity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToOne, Entity } from "typeorm";
import MedicalRecord from "../MedicalRecord/MedicalRecord";

@Entity()
class ConfirmRecord extends BaseEntity{
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "text" })
    result: string;

    @Column()
    medicalRecordId: number;
    
    @OneToOne(type => MedicalRecord, medicalRecord => medicalRecord.confirm, { nullable: false })
    medicalRecord: MedicalRecord;

    @CreateDateColumn() createdAt: string;
    @UpdateDateColumn() updatedAt: string;
}

export default ConfirmRecord;