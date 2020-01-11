export const typeDefs = ["type GetAddressUserResponse {\n  ok: Boolean!\n  error: String\n  users: [User]\n}\n\ntype Query {\n  GetAddressUser: GetAddressUserResponse!\n  GetAgeUser: GetAgeUserResponse!\n  GetGenders(dateFrom: Date, dateTo: Date): GetGendersResponse!\n  GetNationalityUser: GetNationalityUserResponse!\n  GetPeriodMedicalRecord(date: GetPeriodMedicalRecordArgs!): GetPeriodMedicalRecordResponse!\n  GetUserBoards: GetUserBoardsResponse!\n  GetUsers(skip: Int!, take: Int!): GetUsersResponse!\n  GetMyBoards(take: Int!, skip: Int!): GetMyBoardsResponse!\n  GetMyMedicalRecords(first: Int, offset: Int): GetMyMedicalRecordsResponse!\n  EmailSignIn(userId: String!, password: String!): EmailSignInResponse!\n  ForgotMyAccount(firstName: String!, lastName: String!, email: String!): ForgotMyAccountResponse!\n  GetMyProfile: GetMyProfileResponse!\n}\n\ntype GetAgeUserResponse {\n  ok: Boolean!\n  error: String\n  userAge: [UserAgeResponse]\n}\n\ntype UserAgeResponse {\n  title: String!\n  count: Int!\n}\n\ntype GetGendersResponse {\n  ok: Boolean\n  error: String\n  monthGender: [MonthGender]\n}\n\ntype MonthGender {\n  month: Int\n  men: Int\n  women: Int\n}\n\ninput Date {\n  dateStartYear: Int!\n  dateStartMonth: Int!\n}\n\ntype GetNationalityUserResponse {\n  ok: Boolean!\n  error: String\n  countries: [Country]\n}\n\ntype Country {\n  name: String!\n  count: Int!\n}\n\ninput PeriodDate {\n  year: Int!\n  month: Int!\n  day: Int!\n}\n\ninput GetPeriodMedicalRecordArgs {\n  startDate: PeriodDate!\n  endDate: PeriodDate!\n}\n\ntype GetPeriodMedicalRecordData {\n  title: String!\n  count: Int!\n}\n\ntype GetPeriodMedicalRecordResponse {\n  ok: Boolean!\n  error: String\n  data: [GetPeriodMedicalRecordData]\n}\n\ntype GetUserBoardsResponse {\n  ok: Boolean!\n  error: String\n  boards: [Board]\n}\n\ntype GetUsersResponse {\n  ok: Boolean!\n  error: String\n  users: [User]\n  totalUsers: Int\n}\n\ntype UpdateBoardResultResponse {\n  ok: Boolean!\n  error: String\n}\n\ntype Mutation {\n  UpdateBoardResult(boardId: Int!, result: String!): UpdateBoardResultResponse!\n  CreateBoard(text: String!, selector: SELECTOR!): CreateBoardResponse!\n  CreateConfirm(data: [CreateConfirmVariables!]!): CreateConfirmResponse!\n  CreateMedicalRecord(lang: Language!, status: Status!, allergy: Allergy!, pregnant: Pregnant!, chronicDiseases: ChronicDiseases!, cold_cough: Boolean, cold_headache: Boolean, cold_runnyNose: Boolean, cold_soreThroat: Boolean, cold_fever: Boolean, cold_bodyache: Boolean, hangover_headache: Boolean, hangover_diarrhea: Boolean, hangover_vomit: Boolean, hangover_nausea: Boolean, hangover_heartburn: Boolean, stomachache_diarrhead: Boolean, stomachache_periodCramps: Boolean, stomachache_indigestion: Boolean, stomachache_constipation: Boolean, stomachache_nausea: Boolean, stomachache_heartburn: Boolean, skin_abrasion: Boolean, skin_acne: Boolean, skin_rash: Boolean, skin_eczema: Boolean, skin_blister: Boolean, skin_athletesfoot: Boolean, female_periodCramp: Boolean, female_pregnancyTest: Boolean, female_oralBirthControl: Boolean, female_postCoitalBirthControl: Boolean, other_bandAid: Boolean, other_bandage: Boolean, other_disinfectant: Boolean, other_salineSolution: Boolean, other_artificialTears: Boolean): CreateMedicalRecordResponse!\n  UpdateConfirmRecord(confirmRecordId: Int!): UpdateConfirmRecordResponse!\n  EmailSignUp(userId: String!, email: String!, firstName: String!, lastName: String!, password: String!, isAbroad: Boolean!, abroadAddress: String, addressList: Address, addressItem: String, age: Int!, gender: Gender!, nationality: Nationality!): EmailSignUpResponse!\n  ResetPassword(userId: String!, email: String!): ResetPasswordResponse!\n  UpdateMyPassword(currentPassword: String!, newPassword: String!): UpdateMyPasswordResponse!\n  UpdateMyProfile(isAbroad: Boolean!, abroadAddress: String, addressList: Address, addressItem: String, firstName: String, lastName: String, email: String, age: Int, password: String, gender: Gender, nationality: Nationality): UpdateMyProfileResponse!\n}\n\ntype CreateBoardResponse {\n  ok: Boolean!\n  error: String\n  boardId: Int\n}\n\ntype GetMyBoardsResponse {\n  ok: Boolean!\n  error: String\n  boards: [Board]\n}\n\nenum SELECTOR {\n  BOARD_SUGGESTION\n  BOARD_QUESTION\n  BOARD_PROBLEM\n}\n\ntype Board {\n  id: Int!\n  text: String!\n  result: String\n  selector: SELECTOR!\n  writerId: Int\n  writer: User!\n  createdAt: String!\n  updatedAt: String\n}\n\ntype CreateConfirmResponse {\n  ok: Boolean!\n  error: String\n}\n\ninput CreateConfirmVariables {\n  medicalRecordId: Int!\n  res_perOneTimeCnt: Int!\n  res_amount: RES_AMOUNT!\n  res_way: RES_WAY!\n  TO_MORNING: Boolean\n  TO_LUNCH: Boolean\n  TO_DINNER: Boolean\n  TO_SLEEP: Boolean\n  CAUTION_SLEEP: Boolean\n  CAUTION_STOMACAHCHE: Boolean\n  CAUTION_RASH: Boolean\n  CAUTION_DIZZY: Boolean\n  CAUTION_DIARRHEA: Boolean\n  CAUTION_BLOODPRESSURE: Boolean\n}\n\ntype CreateMedicalRecordResponse {\n  ok: Boolean\n  error: String\n  medicalRecordId: Int\n  lang: Language\n}\n\ntype GetMyMedicalRecordsResponse {\n  ok: Boolean!\n  error: String\n  medicalRecords: [MedicalRecord]\n  totalCount: Int\n}\n\nenum RES_AMOUNT {\n  D1\n  D2\n  D3\n  D5\n  D7\n}\n\nenum RES_WAY {\n  AGO_EAT\n  AFTER_EAT\n  NO_EAT\n}\n\ntype ConfirmRecord {\n  id: Int!\n  medicalRecordId: Int\n  medicalRecord: MedicalRecord!\n  res_perOneTimeCnt: Int!\n  res_amount: RES_AMOUNT!\n  res_way: RES_WAY!\n  # Time\n  TO_MORNING: Boolean\n  TO_LUNCH: Boolean\n  TO_DINNER: Boolean\n  TO_SLEEP: Boolean\n  # Caution\n  CAUTION_SLEEP: Boolean\n  CAUTION_STOMACAHCHE: Boolean\n  CAUTION_RASH: Boolean\n  CAUTION_DIZZY: Boolean\n  CAUTION_DIARRHEA: Boolean\n  CAUTION_BLOODPRESSURE: Boolean\n  createdAt: String!\n  updatedAt: String\n}\n\nenum Language {\n  JA\n  FR\n  ES\n  RU\n  MO\n  VI\n  TH\n  KO\n  EN\n  CH\n  # 5국가 추가\n  US\n  CA\n  ME\n  TA\n  HO\n}\n\nenum Status {\n  COLD\n  HANGOVER\n  STOMACHACHE\n  SKIN\n  FEMALE\n  OTHER\n}\n\nenum Allergy {\n  NULL\n  ALLERGY_PAINKILLER\n  ALLERGY_ANTIBIOTIC\n  ALLERGY_LACTOSE\n}\n\nenum Pregnant {\n  NULL\n  PREGNANT_TRUE\n}\n\nenum ChronicDiseases {\n  NULL\n  CHRONIC_LIVER\n  CHRONIC_KIDNEY\n}\n\ntype MedicalRecord {\n  id: Int!\n  lang: Language!\n  status: Status!\n  allergy: Allergy!\n  pregnant: Pregnant!\n  chronicDiseases: ChronicDiseases!\n  createdAt: String!\n  updatedAt: String\n  patientId: Int\n  patient: User!\n  confirm: [ConfirmRecord]\n  confirmCount: Int\n  # Cold - 감기\n  cold_cough: Boolean\n  cold_headache: Boolean\n  cold_runnyNose: Boolean\n  cold_soreThroat: Boolean\n  cold_fever: Boolean\n  cold_bodyache: Boolean\n  # Hangover - 숙취\n  hangover_headache: Boolean\n  hangover_diarrhea: Boolean\n  hangover_vomit: Boolean\n  hangover_nausea: Boolean\n  hangover_heartburn: Boolean\n  # Stomachache - 복통\n  stomachache_diarrhead: Boolean\n  stomachache_periodCramps: Boolean\n  stomachache_indigestion: Boolean\n  stomachache_constipation: Boolean\n  stomachache_nausea: Boolean\n  stomachache_heartburn: Boolean\n  # Skin - 피부질환\n  skin_abrasion: Boolean\n  skin_acne: Boolean\n  skin_rash: Boolean\n  skin_eczema: Boolean\n  skin_blister: Boolean\n  skin_athletesfoot: Boolean\n  # Female - 여성질환\n  female_periodCramp: Boolean\n  female_pregnancyTest: Boolean\n  female_oralBirthControl: Boolean\n  female_postCoitalBirthControl: Boolean\n  # Other - 응급처치\n  other_bandAid: Boolean\n  other_bandage: Boolean\n  other_disinfectant: Boolean\n  other_salineSolution: Boolean\n  other_artificialTears: Boolean\n}\n\ntype UpdateConfirmRecordResponse {\n  ok: Boolean!\n  error: String\n  confirmRecordId: Int\n}\n\ntype EmailSignInResponse {\n  ok: Boolean!\n  error: String\n  token: String\n}\n\ntype EmailSignUpResponse {\n  ok: Boolean!\n  error: String\n  token: String\n}\n\nenum Gender {\n  M\n  W\n}\n\nenum Nationality {\n  JA\n  FR\n  ES\n  RU\n  MO\n  VI\n  TH\n  KO\n  EN\n  CH\n  JA\n  FR\n  ES\n  RU\n  MO\n  VI\n  TH\n  KO\n  EN\n  CH\n  # 5국가 추가.\n  US\n  CA\n  ME\n  TA\n  HO\n}\n\ntype ForgotMyAccountResponse {\n  ok: Boolean!\n  error: String\n  userId: String\n}\n\ntype GetMyProfileResponse {\n  ok: Boolean!\n  error: String\n  user: User\n}\n\ntype ResetPasswordResponse {\n  ok: Boolean!\n  error: String\n}\n\nenum Address {\n  SEOUL\n  BUSAN\n  DAEGU\n  INCHEON\n  GWANGJU\n  DAEJEON\n  ULSAN\n  SEJONG\n  GYEONGGI\n  GANGWON\n  CHUNGBUK\n  CHUNGNAM\n  JEONBUK\n  JEONNAM\n  GYEONGBUK\n  GYEONGNAM\n  JEJU\n}\n\ntype User {\n  id: Int!\n  userId: String!\n  firstName: String!\n  lastName: String!\n  fullName: String\n  email: String!\n  password: String!\n  age: Int!\n  medicalRecords: [MedicalRecord]!\n  medicalRecordsCount: Int\n  gender: Gender!\n  isAbroad: Boolean!\n  nationality: Nationality!\n  abroadAddress: String\n  addressList: Address\n  addressItem: String\n  boards: [Board]\n  boardCount: Int\n  createdAt: String!\n  updatedAt: String\n}\n\ntype UpdateMyPasswordResponse {\n  ok: Boolean!\n  error: String\n}\n\ntype UpdateMyProfileResponse {\n  ok: Boolean!\n  error: String\n  user: User\n}\n"];
/* tslint:disable */

export interface Query {
  GetAddressUser: GetAddressUserResponse;
  GetAgeUser: GetAgeUserResponse;
  GetGenders: GetGendersResponse;
  GetNationalityUser: GetNationalityUserResponse;
  GetPeriodMedicalRecord: GetPeriodMedicalRecordResponse;
  GetUserBoards: GetUserBoardsResponse;
  GetUsers: GetUsersResponse;
  GetMyBoards: GetMyBoardsResponse;
  GetMyMedicalRecords: GetMyMedicalRecordsResponse;
  EmailSignIn: EmailSignInResponse;
  ForgotMyAccount: ForgotMyAccountResponse;
  GetMyProfile: GetMyProfileResponse;
}

export interface GetGendersQueryArgs {
  dateFrom: Date | null;
  dateTo: Date | null;
}

export interface GetPeriodMedicalRecordQueryArgs {
  date: GetPeriodMedicalRecordArgs;
}

export interface GetUsersQueryArgs {
  skip: number;
  take: number;
}

export interface GetMyBoardsQueryArgs {
  take: number;
  skip: number;
}

export interface GetMyMedicalRecordsQueryArgs {
  first: number | null;
  offset: number | null;
}

export interface EmailSignInQueryArgs {
  userId: string;
  password: string;
}

export interface ForgotMyAccountQueryArgs {
  firstName: string;
  lastName: string;
  email: string;
}

export interface GetAddressUserResponse {
  ok: boolean;
  error: string | null;
  users: Array<User> | null;
}

export interface User {
  id: number;
  userId: string;
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
  abroadAddress: string | null;
  addressList: Address | null;
  addressItem: string | null;
  boards: Array<Board> | null;
  boardCount: number | null;
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
  patientId: number | null;
  patient: User;
  confirm: Array<ConfirmRecord> | null;
  confirmCount: number | null;
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
  other_bandAid: boolean | null;
  other_bandage: boolean | null;
  other_disinfectant: boolean | null;
  other_salineSolution: boolean | null;
  other_artificialTears: boolean | null;
}

export type Language = "JA" | "FR" | "ES" | "RU" | "MO" | "VI" | "TH" | "KO" | "EN" | "CH" | "US" | "CA" | "ME" | "TA" | "HO";

export type Status = "COLD" | "HANGOVER" | "STOMACHACHE" | "SKIN" | "FEMALE" | "OTHER";

export type Allergy = "NULL" | "ALLERGY_PAINKILLER" | "ALLERGY_ANTIBIOTIC" | "ALLERGY_LACTOSE";

export type Pregnant = "NULL" | "PREGNANT_TRUE";

export type ChronicDiseases = "NULL" | "CHRONIC_LIVER" | "CHRONIC_KIDNEY";

export interface ConfirmRecord {
  id: number;
  medicalRecordId: number | null;
  medicalRecord: MedicalRecord;
  res_perOneTimeCnt: number;
  res_amount: RES_AMOUNT;
  res_way: RES_WAY;
  TO_MORNING: boolean | null;
  TO_LUNCH: boolean | null;
  TO_DINNER: boolean | null;
  TO_SLEEP: boolean | null;
  CAUTION_SLEEP: boolean | null;
  CAUTION_STOMACAHCHE: boolean | null;
  CAUTION_RASH: boolean | null;
  CAUTION_DIZZY: boolean | null;
  CAUTION_DIARRHEA: boolean | null;
  CAUTION_BLOODPRESSURE: boolean | null;
  createdAt: string;
  updatedAt: string | null;
}

export type RES_AMOUNT = "D1" | "D2" | "D3" | "D5" | "D7";

export type RES_WAY = "AGO_EAT" | "AFTER_EAT" | "NO_EAT";

export type Gender = "M" | "W";

export type Nationality = "JA" | "FR" | "ES" | "RU" | "MO" | "VI" | "TH" | "KO" | "EN" | "CH" | "US" | "CA" | "ME" | "TA" | "HO";

export type Address = "SEOUL" | "BUSAN" | "DAEGU" | "INCHEON" | "GWANGJU" | "DAEJEON" | "ULSAN" | "SEJONG" | "GYEONGGI" | "GANGWON" | "CHUNGBUK" | "CHUNGNAM" | "JEONBUK" | "JEONNAM" | "GYEONGBUK" | "GYEONGNAM" | "JEJU";

export interface Board {
  id: number;
  text: string;
  result: string | null;
  selector: SELECTOR;
  writerId: number | null;
  writer: User;
  createdAt: string;
  updatedAt: string | null;
}

export type SELECTOR = "BOARD_SUGGESTION" | "BOARD_QUESTION" | "BOARD_PROBLEM";

export interface GetAgeUserResponse {
  ok: boolean;
  error: string | null;
  userAge: Array<UserAgeResponse> | null;
}

export interface UserAgeResponse {
  title: string;
  count: number;
}

export interface Date {
  dateStartYear: number;
  dateStartMonth: number;
}

export interface GetGendersResponse {
  ok: boolean | null;
  error: string | null;
  monthGender: Array<MonthGender> | null;
}

export interface MonthGender {
  month: number | null;
  men: number | null;
  women: number | null;
}

export interface GetNationalityUserResponse {
  ok: boolean;
  error: string | null;
  countries: Array<Country> | null;
}

export interface Country {
  name: string;
  count: number;
}

export interface GetPeriodMedicalRecordArgs {
  startDate: PeriodDate;
  endDate: PeriodDate;
}

export interface PeriodDate {
  year: number;
  month: number;
  day: number;
}

export interface GetPeriodMedicalRecordResponse {
  ok: boolean;
  error: string | null;
  data: Array<GetPeriodMedicalRecordData> | null;
}

export interface GetPeriodMedicalRecordData {
  title: string;
  count: number;
}

export interface GetUserBoardsResponse {
  ok: boolean;
  error: string | null;
  boards: Array<Board> | null;
}

export interface GetUsersResponse {
  ok: boolean;
  error: string | null;
  users: Array<User> | null;
  totalUsers: number | null;
}

export interface GetMyBoardsResponse {
  ok: boolean;
  error: string | null;
  boards: Array<Board> | null;
}

export interface GetMyMedicalRecordsResponse {
  ok: boolean;
  error: string | null;
  medicalRecords: Array<MedicalRecord> | null;
  totalCount: number | null;
}

export interface EmailSignInResponse {
  ok: boolean;
  error: string | null;
  token: string | null;
}

export interface ForgotMyAccountResponse {
  ok: boolean;
  error: string | null;
  userId: string | null;
}

export interface GetMyProfileResponse {
  ok: boolean;
  error: string | null;
  user: User | null;
}

export interface Mutation {
  UpdateBoardResult: UpdateBoardResultResponse;
  CreateBoard: CreateBoardResponse;
  CreateConfirm: CreateConfirmResponse;
  CreateMedicalRecord: CreateMedicalRecordResponse;
  UpdateConfirmRecord: UpdateConfirmRecordResponse;
  EmailSignUp: EmailSignUpResponse;
  ResetPassword: ResetPasswordResponse;
  UpdateMyPassword: UpdateMyPasswordResponse;
  UpdateMyProfile: UpdateMyProfileResponse;
}

export interface UpdateBoardResultMutationArgs {
  boardId: number;
  result: string;
}

export interface CreateBoardMutationArgs {
  text: string;
  selector: SELECTOR;
}

export interface CreateConfirmMutationArgs {
  data: Array<CreateConfirmVariables>;
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
  other_bandAid: boolean | null;
  other_bandage: boolean | null;
  other_disinfectant: boolean | null;
  other_salineSolution: boolean | null;
  other_artificialTears: boolean | null;
}

export interface UpdateConfirmRecordMutationArgs {
  confirmRecordId: number;
}

export interface EmailSignUpMutationArgs {
  userId: string;
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  isAbroad: boolean;
  abroadAddress: string | null;
  addressList: Address | null;
  addressItem: string | null;
  age: number;
  gender: Gender;
  nationality: Nationality;
}

export interface ResetPasswordMutationArgs {
  userId: string;
  email: string;
}

export interface UpdateMyPasswordMutationArgs {
  currentPassword: string;
  newPassword: string;
}

export interface UpdateMyProfileMutationArgs {
  isAbroad: boolean;
  abroadAddress: string | null;
  addressList: Address | null;
  addressItem: string | null;
  firstName: string | null;
  lastName: string | null;
  email: string | null;
  age: number | null;
  password: string | null;
  gender: Gender | null;
  nationality: Nationality | null;
}

export interface UpdateBoardResultResponse {
  ok: boolean;
  error: string | null;
}

export interface CreateBoardResponse {
  ok: boolean;
  error: string | null;
  boardId: number | null;
}

export interface CreateConfirmVariables {
  medicalRecordId: number;
  res_perOneTimeCnt: number;
  res_amount: RES_AMOUNT;
  res_way: RES_WAY;
  TO_MORNING: boolean | null;
  TO_LUNCH: boolean | null;
  TO_DINNER: boolean | null;
  TO_SLEEP: boolean | null;
  CAUTION_SLEEP: boolean | null;
  CAUTION_STOMACAHCHE: boolean | null;
  CAUTION_RASH: boolean | null;
  CAUTION_DIZZY: boolean | null;
  CAUTION_DIARRHEA: boolean | null;
  CAUTION_BLOODPRESSURE: boolean | null;
}

export interface CreateConfirmResponse {
  ok: boolean;
  error: string | null;
}

export interface CreateMedicalRecordResponse {
  ok: boolean | null;
  error: string | null;
  medicalRecordId: number | null;
  lang: Language | null;
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

export interface ResetPasswordResponse {
  ok: boolean;
  error: string | null;
}

export interface UpdateMyPasswordResponse {
  ok: boolean;
  error: string | null;
}

export interface UpdateMyProfileResponse {
  ok: boolean;
  error: string | null;
  user: User | null;
}
