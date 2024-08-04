import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { formatDate } from "@/lib/utils";
import { useCallback, useState } from "react";
import AchievementForm from "./AchievementForm";

const DesktopCard = ({ achievement, open, setOpen, onClickFunction, onSave }) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleSave = useCallback(
    (updatedAchievement) => {
      onSave(updatedAchievement);
      setIsEditing(false);
    },
    [onSave]
  );

  const renderDialogContent = () => {
    if (isEditing)
      return (
        <AchievementForm
          initialData={achievement}
          onSave={handleSave}
          showDetails={true}
          className="w-full"
        />
      );

    return (
      <div>
        <div className="flex justify-between">
          <CardHeader>
            <CardTitle>{achievement.title}</CardTitle>
          </CardHeader>
          <div className="p-6 text-sm text-muted-foreground">
            Created on {formatDate(achievement.created_at)}
          </div>
        </div>
        <CardContent className="text-sm">
          {achievement.details ? <div>{achievement.details}</div> : <div>No details provided</div>}
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" onClick={() => setIsEditing(true)}>
            Edit
          </Button>
          <Button onClick={onClickFunction}>Close</Button>
        </CardFooter>
      </div>
    );
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Card className={`cursor-pointer ${isEditing ? "expanded" : ""}`}>
          <CardHeader>
            <CardTitle>{achievement.title}</CardTitle>
            <CardDescription>{achievement.summary}</CardDescription>
          </CardHeader>
        </Card>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <div className={`transition-all duration-300 ${isEditing ? "scale-105" : ""}`}>
          {renderDialogContent()}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DesktopCard;
