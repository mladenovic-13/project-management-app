import { getCurrent } from "@/features/auth/queries";
import { redirect } from "next/navigation";

interface WorkspaceIdJoinPageProps {
  params: {
    workspaceId: string;
  };
}

const WorkspaceIdJoinPage = async ({ params }: WorkspaceIdJoinPageProps) => {
  const user = await getCurrent();

  if (!user) redirect("/sign-in");

  return <div className="">join</div>;
};

export default WorkspaceIdJoinPage;
