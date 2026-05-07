import configuration from "../../content-collections.ts";
import { GetTypeByName } from "@content-collections/core";

export type Workflow = GetTypeByName<typeof configuration, "workflows">;
export declare const allWorkflows: Array<Workflow>;

export type CaseStudy = GetTypeByName<typeof configuration, "caseStudies">;
export declare const allCaseStudies: Array<CaseStudy>;

export type Project = GetTypeByName<typeof configuration, "projects">;
export declare const allProjects: Array<Project>;

export type Prd = GetTypeByName<typeof configuration, "prds">;
export declare const allPrds: Array<Prd>;

export {};
