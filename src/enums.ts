export enum ColumnTaskStatus {
    NOT_STARTED = 0,
    IN_PROGRESS = 1,
    COMPLETED = 2,
    ON_HOLD = 3
}

export enum LogFor {
    USER = 0,
    FILE = 1,
    PROJECT = 2,
    COLUMN = 3,
    TASK = 4,
}

export enum LogType {
    CREATED = 0,
    DELETED = 1,
    EDITED = 2,
}

export enum ProjectRole {
    OWNER = 0,
    MODERATOR = 1,
    USER = 2,
    VIEWER = 3
}

export enum TaskPriority {
    LOW = 0,
    MEDIUM = 1,
    HIGH = 2,
    URGENT = 3
}

export enum WorkspaceRoles {
    OWNER = 0,
    ADMIN = 1,
    USER = 2
}
