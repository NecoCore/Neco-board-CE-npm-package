// Server → Client events (IAppClient methods)
export const SocketEvents = {
    // Projects
    ProjectCreated: "ProjectCreated",
    ProjectUpdated: "ProjectUpdated",
    ProjectDeleted: "ProjectDeleted",

    // Project membership
    UserAddedToProject: "UserAddedToProject",
    UserRoleUpdatedInProject: "UserRoleUpdatedInProject",
    UserRemovedFromProject: "UserRemovedFromProject",

    // Columns
    ColumnCreated: "ColumnCreated",
    ColumnUpdated: "ColumnUpdated",
    ColumnUpdatedOrder: "ColumnUpdatedOrder",
    ColumnDeleted: "ColumnDeleted",

    // Tasks
    TaskCreated: "TaskCreated",
    TaskUpdated: "TaskUpdated",
    TaskColumnUpdated: "TaskColumnUpdated",
    TaskStatusUpdated: "TaskStatusUpdated",
    TaskPriorityUpdated: "TaskPriorityUpdated",
    TaskDeleted: "TaskDeleted",

    // Task assignees
    TaskUserAdded: "TaskUserAdded",
    TaskUserRemoved: "TaskUserRemoved",

    // Task attachments
    TaskAttachmentUploaded: "TaskAttachmentUploaded",
    TaskAttachmentDeleted: "TaskAttachmentDeleted",

    // Task images
    TaskImageUploaded: "TaskImageUploaded",
    TaskImageDeleted: "TaskImageDeleted",

    // Presence
    UserConnected: "UserConnected",
    UserDisconnected: "UserDisconnected",
} as const;

export type SocketEvent = (typeof SocketEvents)[keyof typeof SocketEvents];

// Client → Server hub methods (AppHub)
export const HubActions = {
    JoinProject: "JoinProject",
    LeaveProject: "LeaveProject",
    JoinTask: "JoinTask",
    LeaveTask: "LeaveTask",
    GetOnlineUsers: "GetOnlineUsers",
} as const;

export type HubAction = (typeof HubActions)[keyof typeof HubActions];
