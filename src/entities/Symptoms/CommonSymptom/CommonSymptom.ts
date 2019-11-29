import { BaseEntity, Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToOne } from "typeorm";
import MedicalRecord from "../../MedicalRecord/MedicalRecord";

@Entity()
class CommonSymptom extends BaseEntity {
    
    @Column({ type: "int" })
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    medicalRecordId: number;
    
    // cascade확인해보기. - 기록지웠을때도 같이 제거되는지 확인..
    @OneToOne(type => MedicalRecord, medicalRecord => medicalRecord.symptom, { nullable: true })
    medicalRecord: MedicalRecord;

    @CreateDateColumn() createdAt: string;
    @UpdateDateColumn() updatedAt: string;

}

export default CommonSymptom;