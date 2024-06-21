import { formatDate } from "@/lib/utils";
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

const DesktopCard = ({ achievement, open, setOpen, onClickFunction }) => {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Card className="cursor-pointer">
          <CardHeader>
            <CardTitle>{achievement.title}</CardTitle>
            <CardDescription>{achievement.summary}</CardDescription>
          </CardHeader>
        </Card>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <div>
          <div className="flex justify-between">
            <CardHeader>
              <CardTitle>{achievement.title}</CardTitle>
            </CardHeader>
            <div className="p-6 text-sm text-muted-foreground">
              Created on {formatDate(achievement.created_at)}
            </div>
          </div>
          <CardContent>
            <div>{achievement.details}</div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline">Edit</Button>
            <Button onClick={onClickFunction}>Close</Button>
          </CardFooter>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DesktopCard;
