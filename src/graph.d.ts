export const typeDefs = ["type ConfirmRecord {\n  id: Int!\n  result: String!\n  medicalRecordId: Int\n  medicalRecord: MedicalRecord!\n  createdAt: String!\n  updatedAt: String\n}\n\nenum Language {\n  KO\n  EN\n  CH\n  FR\n  KO\n  EN\n  CH\n  FR\n}\n\nenum Status {\n  COLD\n  COLIC\n  FEMALE\n  HANGOVER\n  HEADACHE\n  OTHER\n  SKIN\n  TOOTHACHE\n}\n\nunion Symptoms = Cold | Colic | Female | Hangover | Headache | Other | Skin | Toothache\n\nenum Allergy {\n  NULL\n  ALLERGY_PAINKILLER\n  ALLERGY_ANTIBIOTIC\n  ALLERGY_LACTOSE\n}\n\nenum Pregnant {\n  NULL\n  PREGNANT_TRUE\n}\n\nenum ChronicDiseases {\n  NULL\n  CHRONIC_LIVER\n  CHRONIC_KIDNEY\n}\n\ntype MedicalRecord {\n  id: Int!\n  lang: Language!\n  status: Status!\n  allergy: Allergy!\n  pregnant: Pregnant!\n  chronicDiseases: ChronicDiseases!\n  createdAt: String!\n  updatedAt: String\n  userId: Int!\n  user: User!\n  symptomId: Int\n  symptom: Symptoms!\n  confirmId: Int\n  confirm: ConfirmRecord\n}\n\n# 감기\ntype Cold {\n  id: Int!\n  cold_cough: Boolean!\n  cold_headache: Boolean!\n  cold_snot: Boolean!\n  cold_throat: Boolean!\n  cold_fever: Boolean!\n  cold_muscle: Boolean!\n  createdAt: String!\n  updatedAt: String\n  medicalRecordId: Int\n  medicalRecord: MedicalRecord\n}\n\n# 복통\ntype Colic {\n  id: Int!\n  colic_diarrhead: Boolean!\n  colic_periodCramps: Boolean!\n  colic_indigestion: Boolean!\n  colic_constipation: Boolean!\n  colic_sickness: Boolean!\n  colic_heartburn: Boolean!\n  createdAt: String!\n  updatedAt: String\n  medicalRecordId: Int\n  medicalRecord: MedicalRecord\n}\n\n# 여성질환\ntype Female {\n  id: Int!\n  female_tmp: Boolean!\n  createdAt: String!\n  updatedAt: String\n  medicalRecordId: Int\n  medicalRecord: MedicalRecord\n}\n\n# 숙취\ntype Hangover {\n  id: Int!\n  hangover_headache: Boolean!\n  hangover_diarrhea: Boolean!\n  hangover_throwup: Boolean!\n  hangover_sickness: Boolean!\n  hangover_heartburn: Boolean!\n  createdAt: String!\n  updatedAt: String\n  medicalRecordId: Int\n  medicalRecord: MedicalRecord\n}\n\n# 두통\ntype Headache {\n  id: Int!\n  headache_headache: Boolean!\n  headache_migraine: Boolean!\n  createdAt: String!\n  updatedAt: String\n  medicalRecordId: Int\n  medicalRecord: MedicalRecord\n}\n\n# 기타\ntype Other {\n  id: Int!\n  other_tmp: Boolean!\n  createdAt: String!\n  updatedAt: String\n  medicalRecordId: Int\n  medicalRecord: MedicalRecord\n}\n\n# 피부질환\ntype Skin {\n  id: Int!\n  skin_abrasion: Boolean!\n  skin_acne: Boolean!\n  skin_hives: Boolean!\n  skin_eczema: Boolean!\n  skin_blister: Boolean!\n  skin_athletesfoot: Boolean!\n  createdAt: String!\n  updatedAt: String\n  medicalRecordId: Int\n  medicalRecord: MedicalRecord\n}\n\n# 구강질환\ntype Toothache {\n  id: Int!\n  toothache_needle: Boolean!\n  toothache_stomatitis: Boolean!\n  toothache_drylips: Boolean!\n  toothache_badbreath: Boolean!\n  toothache_gum: Boolean!\n  toothache_drymouth: Boolean!\n  createdAt: String!\n  updatedAt: String\n  medicalRecordId: Int\n  medicalRecord: MedicalRecord\n}\n\ntype EmailSignInResponse {\n  ok: Boolean!\n  error: String\n  token: String\n}\n\ntype Query {\n  EmailSignIn(email: String!, password: String!): EmailSignInResponse\n  GetMyProfile: GetMyProfileResponse!\n}\n\ntype EmailSignUpResponse {\n  ok: Boolean!\n  error: String\n  token: String\n}\n\nenum Gender {\n  M\n  W\n}\n\nenum Nationality {\n  KO\n  EN\n  CH\n  FR\n}\n\ntype Mutation {\n  EmailSignUp(email: String!, firstName: String!, lastName: String!, password: String!, address: String!, age: Int!, gender: Gender!, nationality: Nationality!): EmailSignUpResponse!\n}\n\ntype GetMyProfileResponse {\n  ok: Boolean!\n  error: String\n  user: User\n}\n\ntype User {\n  id: Int!\n  firstName: String!\n  lastName: String!\n  email: String!\n  password: String!\n  age: Int!\n  medicalRecords: [MedicalRecord]!\n  gender: Gender!\n  nationality: Language!\n  address: String!\n  createdAt: String!\n  updatedAt: String\n}\n"];
/* tslint:disable */

export interface Query {
  EmailSignIn: EmailSignInResponse | null;
  GetMyProfile: GetMyProfileResponse;
}

export interface EmailSignInQueryArgs {
  email: string;
  password: string;
}

export interface EmailSignInResponse {
  ok: boolean;
  error: string | null;
  token: string | null;
}

export interface GetMyProfileResponse {
  ok: boolean;
  error: string | null;
  user: User | null;
}

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  age: number;
  medicalRecords: Array<MedicalRecord>;
  gender: Gender;
  nationality: Language;
  address: string;
  createdAt: string;
  updatedAt: string | null;
}

export interface MedicalRecord {
  id: number;
  lang: Language;
  status: Status;
  allergy: Allergy;
  pregnant: Pregnant;
  chronicDiseases: ChronicDiseases;
  createdAt: string;
  updatedAt: string | null;
  userId: number;
  user: User;
  symptomId: number | null;
  symptom: Symptoms;
  confirmId: number | null;
  confirm: ConfirmRecord | null;
}

export type Language = "KO" | "EN" | "CH" | "FR";

export type Status = "COLD" | "COLIC" | "FEMALE" | "HANGOVER" | "HEADACHE" | "OTHER" | "SKIN" | "TOOTHACHE";

export type Allergy = "NULL" | "ALLERGY_PAINKILLER" | "ALLERGY_ANTIBIOTIC" | "ALLERGY_LACTOSE";

export type Pregnant = "NULL" | "PREGNANT_TRUE";

export type ChronicDiseases = "NULL" | "CHRONIC_LIVER" | "CHRONIC_KIDNEY";

export type Symptoms = Cold | Colic | Female | Hangover | Headache | Other | Skin | Toothache;

export interface Cold {
  id: number;
  cold_cough: boolean;
  cold_headache: boolean;
  cold_snot: boolean;
  cold_throat: boolean;
  cold_fever: boolean;
  cold_muscle: boolean;
  createdAt: string;
  updatedAt: string | null;
  medicalRecordId: number | null;
  medicalRecord: MedicalRecord | null;
}

export interface Colic {
  id: number;
  colic_diarrhead: boolean;
  colic_periodCramps: boolean;
  colic_indigestion: boolean;
  colic_constipation: boolean;
  colic_sickness: boolean;
  colic_heartburn: boolean;
  createdAt: string;
  updatedAt: string | null;
  medicalRecordId: number | null;
  medicalRecord: MedicalRecord | null;
}

export interface Female {
  id: number;
  female_tmp: boolean;
  createdAt: string;
  updatedAt: string | null;
  medicalRecordId: number | null;
  medicalRecord: MedicalRecord | null;
}

export interface Hangover {
  id: number;
  hangover_headache: boolean;
  hangover_diarrhea: boolean;
  hangover_throwup: boolean;
  hangover_sickness: boolean;
  hangover_heartburn: boolean;
  createdAt: string;
  updatedAt: string | null;
  medicalRecordId: number | null;
  medicalRecord: MedicalRecord | null;
}

export interface Headache {
  id: number;
  headache_headache: boolean;
  headache_migraine: boolean;
  createdAt: string;
  updatedAt: string | null;
  medicalRecordId: number | null;
  medicalRecord: MedicalRecord | null;
}

export interface Other {
  id: number;
  other_tmp: boolean;
  createdAt: string;
  updatedAt: string | null;
  medicalRecordId: number | null;
  medicalRecord: MedicalRecord | null;
}

export interface Skin {
  id: number;
  skin_abrasion: boolean;
  skin_acne: boolean;
  skin_hives: boolean;
  skin_eczema: boolean;
  skin_blister: boolean;
  skin_athletesfoot: boolean;
  createdAt: string;
  updatedAt: string | null;
  medicalRecordId: number | null;
  medicalRecord: MedicalRecord | null;
}

export interface Toothache {
  id: number;
  toothache_needle: boolean;
  toothache_stomatitis: boolean;
  toothache_drylips: boolean;
  toothache_badbreath: boolean;
  toothache_gum: boolean;
  toothache_drymouth: boolean;
  createdAt: string;
  updatedAt: string | null;
  medicalRecordId: number | null;
  medicalRecord: MedicalRecord | null;
}

export interface ConfirmRecord {
  id: number;
  result: string;
  medicalRecordId: number | null;
  medicalRecord: MedicalRecord;
  createdAt: string;
  updatedAt: string | null;
}

export type Gender = "M" | "W";

export interface Mutation {
  EmailSignUp: EmailSignUpResponse;
}

export interface EmailSignUpMutationArgs {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  address: string;
  age: number;
  gender: Gender;
  nationality: Nationality;
}

export type Nationality = "KO" | "EN" | "CH" | "FR";

export interface EmailSignUpResponse {
  ok: boolean;
  error: string | null;
  token: string | null;
}
