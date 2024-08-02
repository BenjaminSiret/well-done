import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import AchievementForm from "./AchievementForm";
import { formatDate } from "@/lib/utils";

const DesktopCard = ({ achievement, open, setOpen, onClickFunction, onSave }) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleSave = (updatedAchievement) => {
    onSave(updatedAchievement);
    setIsEditing(false);
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
          {isEditing ? (
            <AchievementForm
              initialData={achievement}
              onSave={handleSave}
              showDetails={true}
              className="w-full"
            />
          ) : (
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
                {achievement.details ? (
                  <div>{achievement.details}</div>
                ) : (
                  <div>No details provided</div>
                )}
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" onClick={() => setIsEditing(true)}>
                  Edit
                </Button>
                <Button onClick={onClickFunction}>Close</Button>
              </CardFooter>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DesktopCard;
