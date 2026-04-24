export interface Skill {
    name: string;
    level: string;
}

// Este modelo representa el documento que contiene el array
export interface SkillsDocument {
    skills: Skill[];
}
