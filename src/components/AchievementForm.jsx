"use client";

import { useForm } from "react-hook-form";
import { useAchievements } from "@/contexts/AchievementsContext";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const schema = yup
  .object({
    title: yup.string().required(),
    summary: yup.string().required(),
    details: yup.string().optional(),
  })
  .required();

const AchievementForm = ({
  className,
  newAchievementAnimationHandler,
  initialData,
  onSave,
  showDetails,
}) => {
  const form = useForm({
    defaultValues: initialData || {
      title: "",
      summary: "",
      details: "",
    },
    resolver: yupResolver(schema),
  });

  const { addAchievement } = useAchievements();

  const onSubmit = async (data) => {
    if (onSave) {
      await onSave(data);
    } else {
      await addAchievement(data);
      newAchievementAnimationHandler();
    }
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
              {showDetails && <FormLabel>Title</FormLabel>}
              <FormControl>
                <Input {...field} placeholder="Title" className="w-64" />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="summary"
          render={({ field }) => (
            <FormItem>
              {showDetails && <FormLabel>Summary</FormLabel>}
              <FormControl>
                <Input {...field} placeholder="Summary" className="w-64" />
              </FormControl>
            </FormItem>
          )}
        />
        {showDetails && (
          <FormField
            control={form.control}
            name="details"
            render={({ field }) => (
              <FormItem>
                {showDetails && <FormLabel>Details</FormLabel>}
                <FormControl className="min-h-48">
                  <Textarea {...field} placeholder="Details" className="w-64" />
                </FormControl>
              </FormItem>
            )}
          />
        )}
        <Button type="submit" className="max-w-44">
          {onSave ? "Save" : "Add"}
        </Button>
      </form>
    </Form>
  );
};

export default AchievementForm;
