import { memo } from "react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const TaskCard = memo(function TaskCard({ task }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{task.title}</CardTitle>
        <CardDescription>{task.description}</CardDescription>
      </CardHeader>
    </Card>
  );
});

export default TaskCard;
