import { useState } from "react";
import { useMediaQuery } from "@/hooks/use-media-query";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
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
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

const AchievementModal = ({ achievement }) => {
  const [open, setOpen] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (isDesktop) {
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
          <div className="cursor-pointer">
            <div className="flex justify-between">
              <CardHeader>
                <CardTitle>{achievement.title}</CardTitle>
                <CardDescription>{achievement.summary}</CardDescription>
              </CardHeader>
              <div className="p-6 text-muted-foreground">{achievement.created_at}</div>
            </div>
            <CardContent>
              <div>{achievement.details}</div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <p className="text-muted-foreground">Created April 2023</p>
              <Button variant="outline">Edit</Button>
              <Button onClick={() => setOpen(false)}>Close</Button>
            </CardFooter>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Card>
          <CardHeader>
            <CardTitle>{achievement.title}</CardTitle>
            <CardDescription>{achievement.summary}</CardDescription>
          </CardHeader>
        </Card>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>{achievement.title}</DrawerTitle>
          <DrawerDescription>{achievement.details}</DrawerDescription>
        </DrawerHeader>
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="outline">Close</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default AchievementModal;
