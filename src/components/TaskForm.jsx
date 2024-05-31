"use client";

import { useForm } from "react-hook-form";
import { useTasks } from "@/contexts/TasksContext";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const schema = yup
  .object({
    title: yup.string().required(),
    description: yup.string().required(),
  })
  .required();

const TaskForm = ({ className }) => {
  const form = useForm({
    defaultValues: {
      title: "",
      description: "",
    },
    resolver: yupResolver(schema),
  });
  const { addTask } = useTasks();

  const onSubmit = async (data) => {
    await addTask(data);
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
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input {...field} placeholder="Description" />
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

export default TaskForm;
