export const typeDefs = ["type CreateConfirmResponse {\n  ok: Boolean!\n  error: String\n  confirmRecordId: Int\n}\n\ntype Mutation {\n  CreateConfirm(medicalRecordId: Int!, result: String!): CreateConfirmResponse!\n  CreateMedicalRecord(lang: Language!, status: Status!, allergy: Allergy!, pregnant: Pregnant!, chronicDiseases: ChronicDiseases!, cold_cough: Boolean, cold_headache: Boolean, cold_runnyNose: Boolean, cold_soreThroat: Boolean, cold_fever: Boolean, cold_bodyache: Boolean, hangover_headache: Boolean, hangover_diarrhea: Boolean, hangover_vomit: Boolean, hangover_nausea: Boolean, hangover_heartburn: Boolean, stomachache_diarrhead: Boolean, stomachache_periodCramps: Boolean, stomachache_indigestion: Boolean, stomachache_constipation: Boolean, stomachache_nausea: Boolean, stomachache_heartburn: Boolean, skin_abrasion: Boolean, skin_acne: Boolean, skin_rash: Boolean, skin_eczema: Boolean, skin_blister: Boolean, skin_athletesfoot: Boolean, female_periodCramp: Boolean, female_pregnancyTest: Boolean, female_oralBirthControl: Boolean, female_postCoitalBirthControl: Boolean, other_tmp: Boolean): CreateMedicalRecordResponse!\n  UpdateConfirmRecord(confirmRecordId: Int!, result: String!): UpdateConfirmRecordResponse!\n  EmailSignUp(email: String!, firstName: String!, lastName: String!, password: String!, address: String!, isAbroad: Boolean!, age: Int!, gender: Gender!, nationality: Nationality!): EmailSignUpResponse!\n  UpdateMyProfile(isAbroad: Boolean, firstName: String, lastName: String, age: Int, password: String, address: String, gender: Gender, nationality: Nationality): UpdateMyProfileResponse!\n}\n\ntype CreateMedicalRecordResponse {\n  ok: Boolean\n  error: String\n  medicalRecordId: Int\n}\n\ntype GetMyMedicalRecordsResponse {\n  ok: Boolean!\n  error: String\n  medicalRecords: [MedicalRecord]\n  totalCount: Int\n}\n\ntype Query {\n  GetMyMedicalRecords(first: Int, offset: Int): GetMyMedicalRecordsResponse!\n  EmailSignIn(email: String!, password: String!): EmailSignInResponse!\n  GetMyProfile: GetMyProfileResponse!\n}\n\ntype ConfirmRecord {\n  id: Int!\n  result: String!\n  medicalRecordId: Int\n  medicalRecord: MedicalRecord!\n  createdAt: String!\n  updatedAt: String\n}\n\nenum Language {\n  JA\n  FR\n  ES\n  RU\n  MO\n  VI\n  TH\n  KO\n  EN\n  CH\n}\n\nenum Status {\n  COLD\n  HANGOVER\n  STOMACHACHE\n  SKIN\n  FEMALE\n  OTHER\n}\n\nenum Allergy {\n  NULL\n  ALLERGY_PAINKILLER\n  ALLERGY_ANTIBIOTIC\n  ALLERGY_LACTOSE\n}\n\nenum Pregnant {\n  NULL\n  PREGNANT_TRUE\n}\n\nenum ChronicDiseases {\n  NULL\n  CHRONIC_LIVER\n  CHRONIC_KIDNEY\n}\n\ntype MedicalRecord {\n  id: Int!\n  lang: Language!\n  status: Status!\n  allergy: Allergy!\n  pregnant: Pregnant!\n  chronicDiseases: ChronicDiseases!\n  createdAt: String!\n  updatedAt: String\n  patientId: Int!\n  patient: User!\n  confirmId: Int\n  confirm: ConfirmRecord\n  # Cold - 감기\n  cold_cough: Boolean\n  cold_headache: Boolean\n  cold_runnyNose: Boolean\n  cold_soreThroat: Boolean\n  cold_fever: Boolean\n  cold_bodyache: Boolean\n  # Hangover - 숙취\n  hangover_headache: Boolean\n  hangover_diarrhea: Boolean\n  hangover_vomit: Boolean\n  hangover_nausea: Boolean\n  hangover_heartburn: Boolean\n  # Stomachache - 복통\n  stomachache_diarrhead: Boolean\n  stomachache_periodCramps: Boolean\n  stomachache_indigestion: Boolean\n  stomachache_constipation: Boolean\n  stomachache_nausea: Boolean\n  stomachache_heartburn: Boolean\n  # Skin - 피부질환\n  skin_abrasion: Boolean\n  skin_acne: Boolean\n  skin_rash: Boolean\n  skin_eczema: Boolean\n  skin_blister: Boolean\n  skin_athletesfoot: Boolean\n  # Female - 여성질환\n  female_periodCramp: Boolean\n  female_pregnancyTest: Boolean\n  female_oralBirthControl: Boolean\n  female_postCoitalBirthControl: Boolean\n  # Other - 기타\n  other_tmp: Boolean\n}\n\ntype UpdateConfirmRecordResponse {\n  ok: Boolean!\n  error: String\n  confirmRecordId: Int\n}\n\ntype EmailSignInResponse {\n  ok: Boolean!\n  error: String\n  token: String\n}\n\ntype EmailSignUpResponse {\n  ok: Boolean!\n  error: String\n  token: String\n}\n\nenum Gender {\n  M\n  W\n}\n\nenum Nationality {\n  JA\n  FR\n  ES\n  RU\n  MO\n  VI\n  TH\n  KO\n  EN\n  CH\n  JA\n  FR\n  ES\n  RU\n  MO\n  VI\n  TH\n  KO\n  EN\n  CH\n}\n\ntype GetMyProfileResponse {\n  ok: Boolean!\n  error: String\n  user: User\n}\n\ntype User {\n  id: Int!\n  firstName: String!\n  lastName: String!\n  fullName: String\n  email: String!\n  password: String!\n  age: Int!\n  medicalRecords: [MedicalRecord]!\n  medicalRecordsCount: Int\n  gender: Gender!\n  isAbroad: Boolean!\n  nationality: Nationality!\n  address: String!\n  createdAt: String!\n  updatedAt: String\n}\n\ntype UpdateMyProfileResponse {\n  ok: Boolean!\n  error: String\n}\n"];
/* tslint:disable */

export interface Query {
  GetMyMedicalRecords: GetMyMedicalRecordsResponse;
  EmailSignIn: EmailSignInResponse;
  GetMyProfile: GetMyProfileResponse;
}

export interface GetMyMedicalRecordsQueryArgs {
  first: number | null;
  offset: number | null;
}

export interface EmailSignInQueryArgs {
  email: string;
  password: string;
}

export interface GetMyMedicalRecordsResponse {
  ok: boolean;
  error: string | null;
  medicalRecords: Array<MedicalRecord> | null;
  totalCount: number | null;
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
  patientId: number;
  patient: User;
  confirmId: number | null;
  confirm: ConfirmRecord | null;
  cold_cough: boolean | null;
  cold_headache: boolean | null;
  cold_runnyNose: boolean | null;
  cold_soreThroat: boolean | null;
  cold_fever: boolean | null;
  cold_bodyache: boolean | null;
  hangover_headache: boolean | null;
  hangover_diarrhea: boolean | null;
  hangover_vomit: boolean | null;
  hangover_nausea: boolean | null;
  hangover_heartburn: boolean | null;
  stomachache_diarrhead: boolean | null;
  stomachache_periodCramps: boolean | null;
  stomachache_indigestion: boolean | null;
  stomachache_constipation: boolean | null;
  stomachache_nausea: boolean | null;
  stomachache_heartburn: boolean | null;
  skin_abrasion: boolean | null;
  skin_acne: boolean | null;
  skin_rash: boolean | null;
  skin_eczema: boolean | null;
  skin_blister: boolean | null;
  skin_athletesfoot: boolean | null;
  female_periodCramp: boolean | null;
  female_pregnancyTest: boolean | null;
  female_oralBirthControl: boolean | null;
  female_postCoitalBirthControl: boolean | null;
  other_tmp: boolean | null;
}

export type Language = "JA" | "FR" | "ES" | "RU" | "MO" | "VI" | "TH" | "KO" | "EN" | "CH";

export type Status = "COLD" | "HANGOVER" | "STOMACHACHE" | "SKIN" | "FEMALE" | "OTHER";

export type Allergy = "NULL" | "ALLERGY_PAINKILLER" | "ALLERGY_ANTIBIOTIC" | "ALLERGY_LACTOSE";

export type Pregnant = "NULL" | "PREGNANT_TRUE";

export type ChronicDiseases = "NULL" | "CHRONIC_LIVER" | "CHRONIC_KIDNEY";

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  fullName: string | null;
  email: string;
  password: string;
  age: number;
  medicalRecords: Array<MedicalRecord>;
  medicalRecordsCount: number | null;
  gender: Gender;
  isAbroad: boolean;
  nationality: Nationality;
  address: string;
  createdAt: string;
  updatedAt: string | null;
}

export type Gender = "M" | "W";

export type Nationality = "JA" | "FR" | "ES" | "RU" | "MO" | "VI" | "TH" | "KO" | "EN" | "CH";

export interface ConfirmRecord {
  id: number;
  result: string;
  medicalRecordId: number | null;
  medicalRecord: MedicalRecord;
  createdAt: string;
  updatedAt: string | null;
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

export interface Mutation {
  CreateConfirm: CreateConfirmResponse;
  CreateMedicalRecord: CreateMedicalRecordResponse;
  UpdateConfirmRecord: UpdateConfirmRecordResponse;
  EmailSignUp: EmailSignUpResponse;
  UpdateMyProfile: UpdateMyProfileResponse;
}

export interface CreateConfirmMutationArgs {
  medicalRecordId: number;
  result: string;
}

export interface CreateMedicalRecordMutationArgs {
  lang: Language;
  status: Status;
  allergy: Allergy;
  pregnant: Pregnant;
  chronicDiseases: ChronicDiseases;
  cold_cough: boolean | null;
  cold_headache: boolean | null;
  cold_runnyNose: boolean | null;
  cold_soreThroat: boolean | null;
  cold_fever: boolean | null;
  cold_bodyache: boolean | null;
  hangover_headache: boolean | null;
  hangover_diarrhea: boolean | null;
  hangover_vomit: boolean | null;
  hangover_nausea: boolean | null;
  hangover_heartburn: boolean | null;
  stomachache_diarrhead: boolean | null;
  stomachache_periodCramps: boolean | null;
  stomachache_indigestion: boolean | null;
  stomachache_constipation: boolean | null;
  stomachache_nausea: boolean | null;
  stomachache_heartburn: boolean | null;
  skin_abrasion: boolean | null;
  skin_acne: boolean | null;
  skin_rash: boolean | null;
  skin_eczema: boolean | null;
  skin_blister: boolean | null;
  skin_athletesfoot: boolean | null;
  female_periodCramp: boolean | null;
  female_pregnancyTest: boolean | null;
  female_oralBirthControl: boolean | null;
  female_postCoitalBirthControl: boolean | null;
  other_tmp: boolean | null;
}

export interface UpdateConfirmRecordMutationArgs {
  confirmRecordId: number;
  result: string;
}

export interface EmailSignUpMutationArgs {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  address: string;
  isAbroad: boolean;
  age: number;
  gender: Gender;
  nationality: Nationality;
}

export interface UpdateMyProfileMutationArgs {
  isAbroad: boolean | null;
  firstName: string | null;
  lastName: string | null;
  age: number | null;
  password: string | null;
  address: string | null;
  gender: Gender | null;
  nationality: Nationality | null;
}

export interface CreateConfirmResponse {
  ok: boolean;
  error: string | null;
  confirmRecordId: number | null;
}

export interface CreateMedicalRecordResponse {
  ok: boolean | null;
  error: string | null;
  medicalRecordId: number | null;
}

export interface UpdateConfirmRecordResponse {
  ok: boolean;
  error: string | null;
  confirmRecordId: number | null;
}

export interface EmailSignUpResponse {
  ok: boolean;
  error: string | null;
  token: string | null;
}

export interface UpdateMyProfileResponse {
  ok: boolean;
  error: string | null;
}
