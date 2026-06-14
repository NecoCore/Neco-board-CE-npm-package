import { ColumnTaskStatus, ProjectRole, TaskPriority, WorkspaceRoles } from "./enums.js";

// Auth
export interface EditPasswordRequest {
    oldPassword: string;
    password: string;
    confirmPassword: string;
}

export interface LoginRequest {
    login: string;
    password: string;
}

export interface RegisterRequest {
    name: string;
    login: string;
    password: string;
    confirmPassword: string;
}

// Columns
export interface ColumnRequest {
    name: string;
    color: string;
}

// Projects
export interface EditUserInProjectRequest {
    role: ProjectRole;
}

export interface ProjectRequest {
    name: string;
    description?: string;
}

export interface ProjectUpdateRequest {
    name: string;
    description?: string;
    isArchived: boolean;
    ownerId?: string;
}

export interface UserProjectRequest {
    id: string;
    role: ProjectRole;
}

// Tasks
export interface AddUserInTaskRequest {
    userId?: string;
}

export interface EditTaskColumnRequest {
    columnId: string;
}

export interface EditTaskPriorityRequest {
    priority: TaskPriority;
}

export interface EditTaskStatusRequest {
    status: ColumnTaskStatus;
}

export interface TaskColumnRequest {
    name: string;
    columnId: string;
    description: string;
    text: string;
    priority: TaskPriority;
    status: ColumnTaskStatus;
}

// Users
export interface EditWorkspaceRoleRequest {
    role: WorkspaceRoles;
}
