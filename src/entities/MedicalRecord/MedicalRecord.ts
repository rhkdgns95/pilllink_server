import { Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, Entity, BaseEntity, ManyToOne, OneToMany, RelationCount } from "typeorm";
import User from "../User/User";
import ConfirmRecord from "../ConfirmRecord/ConfirmRecord";
import { TLanguage, TAllergy, TPregnant, TChronicDiseases, TStatus } from "../../types/types";

const Language: TLanguage[] =[
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
const Allergy: TAllergy[] = [
    "NULL",
    "ALLERGY_PAINKILLER",
    "ALLERGY_ANTIBIOTIC",
    "ALLERGY_LACTOSE"
]

const Pregnant: TPregnant[] = [
    "NULL",
    "PREGNANT_TRUE"
];

const ChronicDiseases: TChronicDiseases[] = [
    "NULL",
    "CHRONIC_LIVER",
    "CHRONIC_KIDNEY"
];
const Status: TStatus[] = [
    "COLD",
    "HANGOVER",
    "STOMACHACHE",
    "SKIN",
    "FEMALE",
    "OTHER",
]

@Entity()
class MedicalRecord extends BaseEntity {
    
    @PrimaryGeneratedColumn() 
    id: number;

    @Column({ type: "text", enum: Language })
    lang: TLanguage;
    
    @Column({ type: "text", enum: Status })
    status: TStatus;

    @Column({ type: "text", enum: Allergy, default: "NULL" })
    allergy: TAllergy;

    @Column({ type: "text", enum: Pregnant, default: "NULL" })
    pregnant: TPregnant;

    @Column({ type: "text", enum: ChronicDiseases, default: "NULL" })
    chronicDiseases: TChronicDiseases;
    
    @OneToMany(type => ConfirmRecord, confirmRecord => confirmRecord.medicalRecord, { nullable: true })
    confirm: ConfirmRecord[];

    @RelationCount((medicalRecord: MedicalRecord) => medicalRecord.confirm)
    confirmCount: number; 
    
    @Column({ nullable: true })
    patientId: number;
    
    @ManyToOne(type => User, user => user.medicalRecords, { nullable: false })
    patient: User;

    // Cold - 감기
    @Column({type: 'boolean', nullable: true})
    cold_cough: boolean // 기침

    @Column({type: 'boolean', nullable: true})
    cold_headache: boolean // 두통

    @Column({type: 'boolean', nullable: true})
    cold_runnyNose: boolean // 콧물

    @Column({type: 'boolean', nullable: true})
    cold_soreThroat: boolean // 목아픔

    @Column({type: 'boolean', nullable: true})
    cold_fever: boolean // 열

    @Column({type: 'boolean', nullable: true})
    cold_bodyache: boolean // 몸살

    // Hangover - 숙취
    @Column({type: 'boolean', nullable: true})
    hangover_headache: boolean // 두통

    @Column({type: 'boolean', nullable: true})
    hangover_diarrhea: boolean // 설사

    @Column({type: 'boolean', nullable: true})
    hangover_vomit: boolean // 구토

    @Column({type: 'boolean', nullable: true})
    hangover_nausea: boolean // 메스꺼움

    @Column({type: 'boolean', nullable: true})
    hangover_heartburn: boolean // 속쓰림

    // Stomachache - 복통
    @Column({type: 'boolean', nullable: true})
    stomachache_diarrhead: boolean // 설사

    @Column({type: 'boolean', nullable: true})
    stomachache_periodCramps: boolean // 생리통

    @Column({type: 'boolean', nullable: true})
    stomachache_indigestion: boolean // 소화불량

    @Column({type: 'boolean', nullable: true})
    stomachache_constipation: boolean // 변비

    @Column({type: 'boolean', nullable: true})
    stomachache_nausea: boolean // 메스꺼움

    @Column({type: 'boolean', nullable: true})
    stomachache_heartburn: boolean // 속쓰림

    // Skin - 피부질환
    @Column({type: 'boolean', nullable: true})
    skin_abrasion: boolean // 철과상

    @Column({type: 'boolean', nullable: true})
    skin_acne: boolean // 여드름

    @Column({type: 'boolean', nullable: true})
    skin_rash: boolean // 두드러기

    @Column({type: 'boolean', nullable: true})
    skin_eczema: boolean // 습진

    @Column({type: 'boolean', nullable: true})
    skin_blister: boolean // 수포

    @Column({type: 'boolean', nullable: true})
    skin_athletesfoot: boolean // 무좀

    // Female - 여성질환
    @Column({type: 'boolean', nullable: true})
    female_periodCramp: boolean // 생리통

    @Column({type: 'boolean', nullable: true})
    female_pregnancyTest: boolean // 임신테스트
    
    @Column({type: 'boolean', nullable: true})
    female_oralBirthControl: boolean // 경구피임약

    @Column({type: 'boolean', nullable: true})
    female_postCoitalBirthControl: boolean // 사후피임약

    // Other - 응급처치
    @Column({type: 'boolean', nullable: true})
    other_bandAid: boolean // 반창고
    
    @Column({type: 'boolean', nullable: true})
    other_bandage: boolean // 붕대

    @Column({type: 'boolean', nullable: true})
    other_disinfectant: boolean // 소독약
    
    @Column({type: 'boolean', nullable: true})
    other_salineSolution: boolean // 식염수
    
    @Column({type: 'boolean', nullable: true})
    other_artificialTears: boolean // 인공눈물

    @Column({type: 'boolean', nullable: true})
    other_mensoredamCream: boolean | null; // 멘소레담 크림형

    @Column({type: 'boolean', nullable: true})
    other_mensoredamSpray: boolean | null; // 멘소레담 스프레이형

    @Column({type: 'boolean', nullable: true})
    other_painKillingPatch: boolean | null; // 파스

    @Column({type: 'boolean', nullable: true})
    other_painKillingPatchWater: boolean | null; // 물파스

    @CreateDateColumn() createdAt: string;
    @UpdateDateColumn() updatedAt: string;
}

export default MedicalRecord;