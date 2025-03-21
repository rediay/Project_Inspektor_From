export interface RoleUserDTO {
  user : number;  
  logoempresa: value[];
  changepassword: value[];
  thirdparties: value[];
  typeslistbyquery: value[];
  procurator: value[];
  users: value[];
  setting: value[];
  sentto: value[];
  monitoring: value[];
  individual: value[];
  massive: value[];
  type: value[];
  manager: value[];
  historyreport: value[];
  getlog: value[];
  queriesandmatches: value[];
  coincidencedetailing: value[];
  viewpastconsultations: value[];
  certificationlistupdates: value[];
  parameterscategory: value[];
  news: value[];
  roi: value[];
  faqs: value[];
  signal: value[];
}

interface value {
  status?: boolean;
  id?: number;
}

export interface AccessRolDTO {
  accessId: number;
  nameAccess: string;
  logoempresa: boolean;
  changepassword: boolean;
  thirdparties: boolean;
  typeslistbyquery: boolean;
  procurator: boolean;
  users: boolean;
  access: boolean;
  setting: boolean;
  sentto: boolean;
  monitoring: boolean;
  individual: boolean;
  massive: boolean;
  type: boolean;
  manager: boolean;
  historyreport: boolean;
  getlog: boolean;
  queriesandmatches: boolean;
  coincidencedetailing: boolean;
  viewpastconsultations: boolean;
  certificationlistupdates: boolean;
  parameterscategory: boolean;
  news: boolean;
  roi: boolean;
  faqs: boolean;
  signal: boolean;
}



