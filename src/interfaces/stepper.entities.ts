export interface StepperConfig {
  title: string;
  steps?: string[];
  fields: LabelValue[];
  buttons: LabelValue[];
}

export interface LabelValue {
  label: string;
  value: string;
}
