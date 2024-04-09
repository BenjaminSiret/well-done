"use client";

import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function TaskForm({ newTaskHandler, className }) {
  const form = useForm({
    defaultValues: {
      title: "",
      description: "",
    },
  });

  const onSubmit = (data) => {
    newTaskHandler(data);
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
}
