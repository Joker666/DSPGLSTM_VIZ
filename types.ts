export enum ModelComponentType {
  INPUT = 'INPUT',
  TRIPLE_STREAM = 'TRIPLE_STREAM',
  ATTENTION = 'ATTENTION',
  DECODER = 'DECODER',
  PHYSICS = 'PHYSICS',
  OUTPUT = 'OUTPUT'
}

export interface ComponentDetail {
  id: ModelComponentType;
  title: string;
  description: string;
  technicalDetails: string[];
  extendedDescription: string; // New field for deep-dive modal
  iconName: string;
}

export interface CurriculumStage {
  horizon: string;
  hours: number;
  description: string;
  transfer: boolean;
}
