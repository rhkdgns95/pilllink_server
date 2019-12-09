export const typeDefs = ["type CreateConfirmResponse {\n  ok: Boolean!\n  error: String\n  confirmRecordId: Int\n}\n\ntype Mutation {\n  CreateConfirm(medicalRecordId: Int!, result: String!): CreateConfirmResponse!\n  CreateMedicalRecord(lang: Language!, status: Status!, allergy: Allergy!, pregnant: Pregnant!, chronicDiseases: ChronicDiseases!, cold_cough: Boolean, cold_headache: Boolean, cold_snot: Boolean, cold_throat: Boolean, cold_fever: Boolean, cold_muscle: Boolean, colic_diarrhead: Boolean, colic_periodCramps: Boolean, colic_indigestion: Boolean, colic_constipation: Boolean, colic_sickness: Boolean, colic_heartburn: Boolean, female_tmp: Boolean, hangover_headache: Boolean, hangover_diarrhea: Boolean, hangover_throwup: Boolean, hangover_sickness: Boolean, hangover_heartburn: Boolean, headache_headache: Boolean, headache_migraine: Boolean, skin_abrasion: Boolean, skin_acne: Boolean, skin_hives: Boolean, skin_eczema: Boolean, skin_blister: Boolean, skin_athletesfoot: Boolean, other_tmp: Boolean, toothache_needle: Boolean, toothache_stomatitis: Boolean, toothache_drylips: Boolean, toothache_badbreath: Boolean, toothache_gum: Boolean, toothache_drymouth: Boolean): CreateMedicalRecordResponse!\n  UpdateConfirmRecord(confirmRecordId: Int!, result: String!): UpdateConfirmRecordResponse!\n  EmailSignUp(email: String!, firstName: String!, lastName: String!, password: String!, address: String!, isAbroad: Boolean!, age: Int!, gender: Gender!, nationality: Nationality!): EmailSignUpResponse!\n  UpdateMyProfile(isAbroad: Boolean, firstName: String, lastName: String, age: Int, password: String, address: String, gender: Gender, nationality: Nationality): UpdateMyProfileResponse!\n}\n\ntype CreateMedicalRecordResponse {\n  ok: Boolean\n  error: String\n  medicalRecordId: Int\n}\n\ntype GetMyMedicalRecordsResponse {\n  ok: Boolean!\n  error: String\n  medicalRecords: [MedicalRecord]\n  totalCount: Int\n}\n\ntype Query {\n  GetMyMedicalRecords(first: Int, offset: Int): GetMyMedicalRecordsResponse!\n  EmailSignIn(email: String!, password: String!): EmailSignInResponse!\n  GetMyProfile: GetMyProfileResponse!\n}\n\ntype ConfirmRecord {\n  id: Int!\n  result: String!\n  medicalRecordId: Int\n  medicalRecord: MedicalRecord!\n  createdAt: String!\n  updatedAt: String\n}\n\nenum Language {\n  KO\n  EN\n  CH\n  US\n}\n\nenum Status {\n  COLD\n  COLIC\n  FEMALE\n  HANGOVER\n  HEADACHE\n  OTHER\n  SKIN\n  TOOTHACHE\n}\n\nenum Allergy {\n  NULL\n  ALLERGY_PAINKILLER\n  ALLERGY_ANTIBIOTIC\n  ALLERGY_LACTOSE\n}\n\nenum Pregnant {\n  NULL\n  PREGNANT_TRUE\n}\n\nenum ChronicDiseases {\n  NULL\n  CHRONIC_LIVER\n  CHRONIC_KIDNEY\n}\n\ntype MedicalRecord {\n  id: Int!\n  lang: Language!\n  status: Status!\n  allergy: Allergy!\n  pregnant: Pregnant!\n  chronicDiseases: ChronicDiseases!\n  createdAt: String!\n  updatedAt: String\n  patientId: Int!\n  patient: User!\n  confirmId: Int\n  confirm: ConfirmRecord\n  # Cold - 감기\n  cold_cough: Boolean\n  cold_headache: Boolean\n  cold_snot: Boolean\n  cold_throat: Boolean\n  cold_fever: Boolean\n  cold_muscle: Boolean\n  # Colic - 복통\n  colic_diarrhead: Boolean\n  colic_periodCramps: Boolean\n  colic_indigestion: Boolean\n  colic_constipation: Boolean\n  colic_sickness: Boolean\n  colic_heartburn: Boolean\n  # Female - 여성질환\n  female_tmp: Boolean\n  # Hangover - 숙취\n  hangover_headache: Boolean\n  hangover_diarrhea: Boolean\n  hangover_throwup: Boolean\n  hangover_sickness: Boolean\n  hangover_heartburn: Boolean\n  # Headache - 두통\n  headache_headache: Boolean\n  headache_migraine: Boolean\n  # Skin - 피부질환\n  skin_abrasion: Boolean\n  skin_acne: Boolean\n  skin_hives: Boolean\n  skin_eczema: Boolean\n  skin_blister: Boolean\n  skin_athletesfoot: Boolean\n  # Toothache - 구강질환\n  toothache_needle: Boolean\n  toothache_stomatitis: Boolean\n  toothache_drylips: Boolean\n  toothache_badbreath: Boolean\n  toothache_gum: Boolean\n  toothache_drymouth: Boolean\n  # Other - 기타\n  other_tmp: Boolean\n}\n\ntype UpdateConfirmRecordResponse {\n  ok: Boolean!\n  error: String\n  confirmRecordId: Int\n}\n\ntype EmailSignInResponse {\n  ok: Boolean!\n  error: String\n  token: String\n}\n\ntype EmailSignUpResponse {\n  ok: Boolean!\n  error: String\n  token: String\n}\n\nenum Gender {\n  M\n  W\n}\n\nenum Nationality {\n  KO\n  EN\n  CH\n  US\n  KO\n  EN\n  CH\n  US\n}\n\ntype GetMyProfileResponse {\n  ok: Boolean!\n  error: String\n  user: User\n}\n\ntype User {\n  id: Int!\n  firstName: String!\n  lastName: String!\n  fullName: String\n  email: String!\n  password: String!\n  age: Int!\n  medicalRecords: [MedicalRecord]!\n  gender: Gender!\n  isAbroad: Boolean!\n  nationality: Nationality!\n  address: String!\n  createdAt: String!\n  updatedAt: String\n}\n\ntype UpdateMyProfileResponse {\n  ok: Boolean!\n  error: String\n}\n"];
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
  cold_snot: boolean | null;
  cold_throat: boolean | null;
  cold_fever: boolean | null;
  cold_muscle: boolean | null;
  colic_diarrhead: boolean | null;
  colic_periodCramps: boolean | null;
  colic_indigestion: boolean | null;
  colic_constipation: boolean | null;
  colic_sickness: boolean | null;
  colic_heartburn: boolean | null;
  female_tmp: boolean | null;
  hangover_headache: boolean | null;
  hangover_diarrhea: boolean | null;
  hangover_throwup: boolean | null;
  hangover_sickness: boolean | null;
  hangover_heartburn: boolean | null;
  headache_headache: boolean | null;
  headache_migraine: boolean | null;
  skin_abrasion: boolean | null;
  skin_acne: boolean | null;
  skin_hives: boolean | null;
  skin_eczema: boolean | null;
  skin_blister: boolean | null;
  skin_athletesfoot: boolean | null;
  toothache_needle: boolean | null;
  toothache_stomatitis: boolean | null;
  toothache_drylips: boolean | null;
  toothache_badbreath: boolean | null;
  toothache_gum: boolean | null;
  toothache_drymouth: boolean | null;
  other_tmp: boolean | null;
}

export type Language = "KO" | "EN" | "CH" | "US";

export type Status = "COLD" | "COLIC" | "FEMALE" | "HANGOVER" | "HEADACHE" | "OTHER" | "SKIN" | "TOOTHACHE";

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
  gender: Gender;
  isAbroad: boolean;
  nationality: Nationality;
  address: string;
  createdAt: string;
  updatedAt: string | null;
}

export type Gender = "M" | "W";

export type Nationality = "KO" | "EN" | "CH" | "US";

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
  cold_snot: boolean | null;
  cold_throat: boolean | null;
  cold_fever: boolean | null;
  cold_muscle: boolean | null;
  colic_diarrhead: boolean | null;
  colic_periodCramps: boolean | null;
  colic_indigestion: boolean | null;
  colic_constipation: boolean | null;
  colic_sickness: boolean | null;
  colic_heartburn: boolean | null;
  female_tmp: boolean | null;
  hangover_headache: boolean | null;
  hangover_diarrhea: boolean | null;
  hangover_throwup: boolean | null;
  hangover_sickness: boolean | null;
  hangover_heartburn: boolean | null;
  headache_headache: boolean | null;
  headache_migraine: boolean | null;
  skin_abrasion: boolean | null;
  skin_acne: boolean | null;
  skin_hives: boolean | null;
  skin_eczema: boolean | null;
  skin_blister: boolean | null;
  skin_athletesfoot: boolean | null;
  other_tmp: boolean | null;
  toothache_needle: boolean | null;
  toothache_stomatitis: boolean | null;
  toothache_drylips: boolean | null;
  toothache_badbreath: boolean | null;
  toothache_gum: boolean | null;
  toothache_drymouth: boolean | null;
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
