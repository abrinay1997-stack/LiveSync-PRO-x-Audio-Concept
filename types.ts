
export interface AgendaItem {
  time: string;
  title: string;
  speaker?: string;
  details?: string[];
}

export interface Objective {
  text: string;
  isPrimary: boolean;
}

export interface AudienceProfile {
  title: string;
  items: string[];
  percentage: number;
  description: string;
}
