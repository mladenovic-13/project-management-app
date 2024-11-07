"use client";

import { ResponsiveModal } from "@/components/responsive-modal";
import { useEditTaskModal } from "../hooks/use-edit-task";
import { EditTaskFormWrapper } from "./edit-task-form-wrapper";

export const EditTaskModal = () => {
  const { taskId, setTaskId, close } = useEditTaskModal();

  return (
    <ResponsiveModal open={!!taskId} onOpenChange={close}>
      {taskId && <EditTaskFormWrapper onCancel={close} id={taskId} />}
    </ResponsiveModal>
  );
};