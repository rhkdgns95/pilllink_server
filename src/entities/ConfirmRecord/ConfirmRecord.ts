import { BaseEntity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, Entity, ManyToOne } from "typeorm";
import MedicalRecord from "../MedicalRecord/MedicalRecord";
import { RES_WAY, RES_AMOUNT } from "../../types/types";

const AMOUNT: RES_AMOUNT[] = [ "D1", "D2", "D3", "D5", "D7" ];
// const WAY: RES_WAY[] = ["AFTER_IMMEDIATE_EAT", "AGO_EAT", "AGO_IMMEDIATE_EAT", "NO_EAT", "AFTER_EAT"];
const WAY: RES_WAY[] = [ "AGO_EAT", "AFTER_EAT", "NO_EAT"];

@Entity()
class ConfirmRecord extends BaseEntity{
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type:"text", enum: AMOUNT, default: "D3" })
    res_amount: RES_AMOUNT;

    @Column({ type:"text", enum: WAY, default: "AGO_EAT" })
    res_way: RES_WAY;

    @Column("int")
    res_perOneTimeCnt: number;

    @Column({ type: "boolean", nullable: true })
    TO_MORNING: boolean | null;

    @Column({ type: "boolean", nullable: true })
    TO_LUNCH: boolean | null;

    @Column({ type: "boolean", nullable: true })
    TO_DINNER: boolean | null;

    @Column({ type: "boolean", nullable: true })
    TO_SLEEP: boolean | null;

    @Column({ type: "boolean", nullable: true })
    CAUTION_SLEEP: boolean | null;

    @Column({ type: "boolean", nullable: true })
    CAUTION_STOMACAHCHE: boolean | null;

    @Column({ type: "boolean", nullable: true })
    CAUTION_RASH: boolean | null;

    @Column({ type: "boolean", nullable: true })
    CAUTION_DIZZY: boolean | null;

    @Column({ type: "boolean", nullable: true })
    CAUTION_DIARRHEA: boolean | null;

    @Column({ type: "boolean", nullable: true })
    CAUTION_BLOODPRESSURE: boolean | null;

    @Column()
    medicalRecordId: number;

    @ManyToOne(type => MedicalRecord, medicalRecord => medicalRecord.confirm, { nullable: false })
    medicalRecord: MedicalRecord;

    @CreateDateColumn() createdAt: string;
    @UpdateDateColumn() updatedAt: string;
}

export default ConfirmRecord;