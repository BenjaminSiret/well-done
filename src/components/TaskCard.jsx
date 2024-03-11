import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function TaskCard({task}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{task.title}</CardTitle>
      </CardHeader>
      <CardContent>{task.description}</CardContent>
    </Card>
  );
}
