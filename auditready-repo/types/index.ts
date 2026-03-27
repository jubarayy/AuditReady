export type NavItem = {
  href: string;
  label: string;
};

export type KPI = {
  label: string;
  value: string;
  detail: string;
};

export type Questionnaire = {
  id: string;
  title: string;
  framework: string;
  progress: number;
  status: string;
};

export type DocumentItem = {
  id: string;
  name: string;
  type: string;
  status: string;
};

export type AdminMetric = {
  label: string;
  value: string;
  detail: string;
};
