import { BaseEntity, CreateDateColumn, UpdateDateColumn, PrimaryGeneratedColumn } from "typeorm";
// import MedicalRecord from "../../MedicalRecord/MedicalRecord";
// import MedicalRecord from "../../MedicalRecord/MedicalRecord";

export class CommonSymptom extends BaseEntity {
    
    @PrimaryGeneratedColumn()
    id: number;
    
    // @Column()
    // medicalRecordId: number;
    
    // // cascade확인해보기. - 기록지웠을때도 같이 제거되는지 확인..
    // @OneToOne(type => MedicalRecord, medicalRecord => medicalRecord.symptom, { nullable: true })
    // medicalRecord: MedicalRecord;

    @CreateDateColumn() createdAt: string;
    @UpdateDateColumn() updatedAt: string;

}