import { Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, Entity, BaseEntity, OneToOne, ManyToOne, JoinColumn } from "typeorm";
import User from "../User/User";
import ConfirmRecord from "../ConfirmRecord/ConfirmRecord";
import { TLanguage, TAllergy, TPregnant, TChronicDiseases, TStatus } from "../../types/types";

const Language: TLanguage[] =[
    "KO",
    "EN",
    "CH",
    "US"
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
    "COLIC",
    "FEMALE",
    "HANGOVER",
    "HEADACHE",
    "OTHER",
    "SKIN",
    "TOOTHACHE"
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
    
    @Column({ nullable: true})
    confirmId: number;

    @OneToOne(type => ConfirmRecord, confirmRecord => confirmRecord.medicalRecord, { nullable: true })
    @JoinColumn()
    confirm: ConfirmRecord;

    @Column({ nullable: false })
    patientId: number;
    
    @ManyToOne(type => User, user => user.medicalRecords, { nullable: false })
    patient: User;

    // Cold - 감기
    @Column({type: 'boolean', nullable: true})
    cold_cough: boolean // 기침

    @Column({type: 'boolean', nullable: true})
    cold_headache: boolean // 두통

    @Column({type: 'boolean', nullable: true})
    cold_snot: boolean // 콧물

    @Column({type: 'boolean', nullable: true})
    cold_throat: boolean // 목아픔

    @Column({type: 'boolean', nullable: true})
    cold_fever: boolean // 열

    @Column({type: 'boolean', nullable: true})
    cold_muscle: boolean // 몸살

    // Colic - 복통
    @Column({type: 'boolean', nullable: true})
    colic_diarrhead: boolean // 설사

    @Column({type: 'boolean', nullable: true})
    colic_periodCramps: boolean // 생리통

    @Column({type: 'boolean', nullable: true})
    colic_indigestion: boolean // 소화불량

    @Column({type: 'boolean', nullable: true})
    colic_constipation: boolean // 변비

    @Column({type: 'boolean', nullable: true})
    colic_sickness: boolean // 메스꺼움

    @Column({type: 'boolean', nullable: true})
    colic_heartburn: boolean // 속쓰림

    // Female - 여성질환
    @Column({type: 'boolean', nullable: true})
    female_tmp: boolean // 임시

    // Hangover - 숙취
    @Column({type: 'boolean', nullable: true})
    hangover_headache: boolean // 두통

    @Column({type: 'boolean', nullable: true})
    hangover_diarrhea: boolean // 설사

    @Column({type: 'boolean', nullable: true})
    hangover_throwup: boolean // 구토

    @Column({type: 'boolean', nullable: true})
    hangover_sickness: boolean // 메스꺼움

    @Column({type: 'boolean', nullable: true})
    hangover_heartburn: boolean // 속쓰림

    // Headache - 두통
    @Column({type: 'boolean', nullable: true})
    headache_headache: boolean // 두통

    @Column({type: 'boolean', nullable: true})
    headache_migraine: boolean // 편두통

    // Skin - 피부질환
    @Column({type: 'boolean', nullable: true})
    skin_abrasion: boolean // 철과상

    @Column({type: 'boolean', nullable: true})
    skin_acne: boolean // 여드름

    @Column({type: 'boolean', nullable: true})
    skin_hives: boolean // 두드러기

    @Column({type: 'boolean', nullable: true})
    skin_eczema: boolean // 습진

    @Column({type: 'boolean', nullable: true})
    skin_blister: boolean // 수포

    @Column({type: 'boolean', nullable: true})
    skin_athletesfoot: boolean // 무좀

    // Toothache - 구강질환
    @Column({type: 'boolean', nullable: true})
    toothache_needle: boolean // 혓바늘

    @Column({type: 'boolean', nullable: true})
    toothache_stomatitis: boolean // 구내염

    @Column({type: 'boolean', nullable: true})
    toothache_drylips: boolean // 마른 입술

    @Column({type: 'boolean', nullable: true})
    toothache_badbreath: boolean // 입냄새

    @Column({type: 'boolean', nullable: true})
    toothache_gum: boolean // 잇몸

    @Column({type: 'boolean', nullable: true})
    toothache_drymouth: boolean // 구강건조증

    // Other - 기타
    @Column({type: 'boolean', nullable: true})
    other_tmp: boolean // 임시
    
    @CreateDateColumn() createdAt: string;
    @UpdateDateColumn() updatedAt: string;
}

export default MedicalRecord;