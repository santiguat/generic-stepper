export interface StepperConfig {
  title: string;
  steps: Step[];
  fields: LabelValue[];
  buttons: LabelValue[];
}

export interface ButtonsConfig {
  next: LabelValue;
  prev: LabelValue;
}

export interface LabelValue {
  label: string;
  value: string;
}

export interface Step {
  label: string;
  name: string;
  fields: LabelValue[];
}

export interface StepToHtml {
  name: string;
  fields: LabelValue[];
}

