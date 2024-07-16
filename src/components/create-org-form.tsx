"use client";

import React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Button } from "./ui/button";
import { Plus } from "lucide-react";
import ImagesForm from "./images-form";
import InputForm from "./input-form";
import FormSubmit from "./form-submit";
import { toast } from "sonner";
import { createOrganization } from "@/services/organization";
import { useRouter } from "next/router";

const CreateOrgForm = () => {
  const router = useRouter;

  const handleSubmit = async (formData: FormData) => {
    try {
      const title = formData.get("title") as string;
      const image = formData.get("image") as string;
      if (!title || !image) {
        toast.error("please fill all required fields");
        return;
      }
      const res = await createOrganization({ title, image });
      toast.success("Organization successfully added");
      router.push(`/organizations/${res?.result?.id}`);
    } catch (error) {
      toast.error("organization not created");
    }
  };
  
  return (
    <div className="font-medium flex items-center mb-1">
      <span>Workspaces</span>

      <Popover>
        <PopoverTrigger asChild>
          <Button
            asChild
            type="button"
            variant="ghost"
            size="icon"
            className="ml-auto cursor-pointer"
          >
            <Plus className="h-4 w-4" />
          </Button>
        </PopoverTrigger>
        <PopoverContent>
          <div className="font-medium text-center text-gray-600 pb-4 text-sm">
            Create Organization
          </div>
          <form action={handleSubmit}>
            <div>
              <ImagesForm name="image" />
              <InputForm id="title" label="Organization Title" type="text" />
              <FormSubmit className="w-full mt-2">Create Org</FormSubmit>
            </div>
          </form>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default CreateOrgForm;
