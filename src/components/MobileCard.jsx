import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { formatDate } from "@/lib/utils";

const MobileCard = ({ achievement, open, setOpen }) => {
  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>{achievement.title}</CardTitle>
              <div className="text-xs text-muted-foreground">
                {formatDate(achievement.created_at)}
              </div>
            </div>
            <CardDescription>{achievement.summary}</CardDescription>
          </CardHeader>
        </Card>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>{achievement.title}</DrawerTitle>
          <DrawerDescription>
            {achievement.details ? achievement.details : "No details provided"}
          </DrawerDescription>
        </DrawerHeader>
        <DrawerFooter className="pt-2 justify-between">
          <Button variant="outline">Edit</Button>
          <DrawerClose asChild>
            <Button>Close</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default MobileCard;
