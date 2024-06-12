"use client";

import { useForm } from "react-hook-form";
import { useAchievements } from "@/contexts/AchievementsContext";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const schema = yup
  .object({
    title: yup.string().required(),
    summary: yup.string().required(),
  })
  .required();

const AchievementForm = ({ className, newAchievementAnimationHandler }) => {
  const form = useForm({
    defaultValues: {
      title: "",
      summary: "",
    },
    resolver: yupResolver(schema),
  });
  const { addAchievement } = useAchievements();

  const onSubmit = async (data) => {
    await addAchievement(data);
    newAchievementAnimationHandler();
    form.reset();
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={`flex flex-col items-center gap-5 ${className}`}
      >
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input {...field} placeholder="Title" />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="summary"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input {...field} placeholder="Summary" />
              </FormControl>
            </FormItem>
          )}
        />
        <Button type="submit" className="max-w-44">
          Add
        </Button>
      </form>
    </Form>
  );
};

export default AchievementForm;
