import { BaseEntity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToOne, Entity } from "typeorm";
import MedicalRecord from "../MedicalRecord/MedicalRecord";
import { RES_WAY, RES_AMOUNT } from "../../types/types";

const AMOUNT: RES_AMOUNT[] = [ "D3", "D5", "D7" ];
const WAY: RES_WAY[] = ["AFTER_IMMEDIATE_EAT", "AGO_EAT", "AGO_IMMEDIATE_EAT", "NO_EAT"];

@Entity()
class ConfirmRecord extends BaseEntity{
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type:"text", enum: AMOUNT, default: "D3" })
    res_amount: RES_AMOUNT;

    @Column({ type:"text", enum: WAY, default: "AGO_EAT" })
    res_way: RES_WAY;

    @Column({ type: "boolean", nullable: true })
    TO_MORNING: boolean;

    @Column({ type: "boolean", nullable: true })
    TO_LUNCH: boolean;

    @Column({ type: "boolean", nullable: true })
    TO_DINNER: boolean;

    @Column({ type: "boolean", nullable: true })
    TO_SLEEP: boolean;

    @Column({ type: "boolean", nullable: true })
    CAUTION_SLEEP: boolean;

    @Column({ type: "boolean", nullable: true })
    CAUTION_STOMACAHCHE: boolean;

    @Column({ type: "boolean", nullable: true })
    CAUTION_RASH: boolean;

    @Column({ type: "boolean", nullable: true })
    CAUTION_DIZZY: boolean;

    @Column({ type: "boolean", nullable: true })
    CAUTION_DIARRHEA: boolean;

    @Column({ type: "boolean", nullable: true })
    CAUTION_BLOODPRESSURE: boolean;

    @Column()
    medicalRecordId: number;

    @OneToOne(type => MedicalRecord, medicalRecord => medicalRecord.confirm, { nullable: false })
    medicalRecord: MedicalRecord;

    @CreateDateColumn() createdAt: string;
    @UpdateDateColumn() updatedAt: string;
}

export default ConfirmRecord;