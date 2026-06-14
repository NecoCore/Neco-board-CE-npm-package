import { ColumnTaskStatus, LogType, ProjectRole, TaskPriority, WorkspaceRoles } from "./enums.js";

// Auth
export interface MeResponse {
    id: string;
    name: string;
    login: string;
    role: string;
    avatar?: string;
}

export interface RefreshResponse {
    accessToken: string;
}

// Column
export interface ColumnItemResponse {
    id: string;
    name: string;
    queue: number;
    color?: string;
    createdAt: string;
}

// Logs
export interface LogItemResponse {
    id: string;
    name: string;
    description?: string;
    logType: LogType;
    createdAt: string;
    userId: string;
    userName: string;
    projectId?: string;
    projectName?: string;
}

// Messages
export interface ErrorMessageResponse {
    message: string;
}

// Projects
export interface CreateProjectRequest {
    projectId: string;
}

export interface ProjectDetailResponse {
    id: string;
    name: string;
    description?: string;
    isArchived: boolean;
    ownerId: string;
    ownerName: string;
    createdAt: string;
    columnCount: number;
    taskCount: number;
    memberCount: number;
}

export interface ProjectItemResponse {
    id: string;
    name: string;
    isArchived: boolean;
}

// Socket
export interface ColumnUpdatedResponse {
    columnId: string;
    name: string;
}

export interface EmptyPayload {}

export interface ProjectUpdatedResponse {
    id: string;
    name: string;
}

export interface TaskColumnUpdatedResponse {
    oldColumnId: string;
    newColumnId: string;
}

export interface TaskDeletedResponse {
    taskId: string;
    columnId: string;
}

export interface TaskPriorityUpdatedResponse {
    taskId: string;
    columnId: string;
    priority: TaskPriority;
}

export interface TaskStatusUpdatedResponse {
    taskId: string;
    columnId: string;
    status: ColumnTaskStatus;
}

export interface UserRoleUpdatedResponse {
    userId: string;
    role: ProjectRole;
}

// Task
export interface MyTaskResponse {
    id: string;
    name: string;
    description?: string;
    status: ColumnTaskStatus;
    priority: TaskPriority;
    createAt: string;
    columnId: string;
}

export interface TaskDetailResponse {
    id: string;
    name: string;
    description?: string;
    text: string;
    priority: TaskPriority;
    status: ColumnTaskStatus;
    createdAt: string;
    columnId: string;
    ownerId: string;
    ownerName: string;
    assignedUserNames: string[];
    imageCount: number;
    attachmentCount: number;
}

export interface TaskResponse {
    id: string;
    name: string;
    description?: string;
    priority: TaskPriority;
    status: ColumnTaskStatus;
    createdAt: string;
    columnId: string;
}

// Users
export interface AccountDetailResponse {
    id: string;
    name: string;
    avatar?: string;
    role: WorkspaceRoles;
    createdAt: string;
    lastLoginAt?: string;
    projectCount: number;
    assignedTaskCount: number;
}

export interface AllMyTasksResponse {
    projectId: string;
    projectName: string;
    tasks: MyTaskResponse[];
}

export interface UserInfoProjectResponse {
    id: string;
    name: string;
    avatar?: string;
    role: ProjectRole;
}

export interface UserInfoResponse {
    id: string;
    name: string;
    avatar?: string;
    role: WorkspaceRoles;
}
