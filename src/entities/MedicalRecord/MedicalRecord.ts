import { Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, Entity, BaseEntity, OneToOne, ManyToOne, JoinTable } from "typeorm";
import User from "../User/User";
import ConfirmRecord from "../ConfirmRecord/ConfirmRecord";
import { TLanguage, TAllergy, TPregnant, TChronicDiseases, TStatus } from "../../types/types";
import Colic from "../Symptoms/Colic";
import Female from "../Symptoms/Female";
import Hangover from "../Symptoms/Hangover";
import Headache from "../Symptoms/Headache";
import Other from "../Symptoms/Other";
import Skin from "../Symptoms/Skin";
import Toothache from "../Symptoms/Toothache";
import Cold from "../Symptoms/Cold";

const Language: TLanguage[] =[
    "KO",
    "EN",
    "CH",
    "FR"
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
    
    @Column()
    symptomId: number;

    @OneToOne(type => Cold, cold => cold.medicalRecord)
    @OneToOne(type => Colic, colic => colic.medicalRecord)
    @OneToOne(type => Female, cold => cold.medicalRecord)
    @OneToOne(type => Hangover, cold => cold.medicalRecord)
    @OneToOne(type => Headache, cold => cold.medicalRecord)
    @OneToOne(type => Other, cold => cold.medicalRecord)
    @OneToOne(type => Skin, cold => cold.medicalRecord)
    @OneToOne(type => Toothache, cold => cold.medicalRecord)
    @JoinTable()
    symptom: Cold | Colic | Female | Hangover | Headache | Other | Skin | Toothache;
    
    
    @Column()
    confirmId: number;

    @OneToOne(type => ConfirmRecord, confirmRecord => confirmRecord.medicalRecord)
    confirm: ConfirmRecord;

    @Column({ nullable: false })
    patientId: number;
    
    @ManyToOne(type => User, user => user.medicalRecords, { nullable: false })
    patient: User;

    @CreateDateColumn() createdAt: string;
    @UpdateDateColumn() updatedAt: string;
}

export default MedicalRecord;