export const PROJECT_CATEGORIES=["web-development","mobile-app","design","marketing","writing","automation","business-services","other"] as const;
export type ProjectCategory=typeof PROJECT_CATEGORIES[number];
export type Complexity="small"|"medium"|"large"|"unknown";
export interface ProjectBrief {id:string;title:string;overview:string;objective:string;category:ProjectCategory;complexity:Complexity;functionalRequirements:{title:string;items:string[];source:"user"|"ai_suggestion"|"unknown"};technicalRequirements:{title:string;items:string[];source:"user"|"ai_suggestion"|"unknown"};skills:string[];deliverables:string[];milestones:{title:string;description:string;acceptanceCriteria:string[]}[];acceptanceCriteria:string[];dependencies:string[];assumptions:string[];missingInformation:string[];clarificationQuestions:string[];createdAt:string;}
export interface GenerateBriefInput {description:string;category:ProjectCategory;complexity?:Complexity;answers?:Record<string,string>}
