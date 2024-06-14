import { memo } from "react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const BasicCard = memo(function BasicCard({ achievement }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{achievement.title}</CardTitle>
        <CardDescription>{achievement.summary}</CardDescription>
      </CardHeader>
    </Card>
  );
});

export default BasicCard;
