import { memo } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const TaskCard = memo(function TaskCard({ task }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{task.title}</CardTitle>
        <CardDescription>{task.description}</CardDescription>
      </CardHeader>
      {/* <CardFooter className="flex justify-end">
        <Button variant="secondary">Details</Button>
      </CardFooter> */}
    </Card>
  );
});

export default TaskCard;
