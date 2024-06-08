"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import React, { useState } from "react";

const AddInterview = () => {
  const [dialogOpen, setDailogOpen] = useState(false);
  return (
    <>
      <div className=" lg:px-20 px-10 md:px-15 w-full h-full">
        <div className=" my-5">
          <h2 className=" font-bold text-2xl">Dashboard</h2>
          <p className=" text-slate-600 my-2 font-bold">
            Create and Start your Ai mockup Interview
          </p>
        </div>
        <Button
          variant="outline"
          className=" font-bold w-[250px] h-[100px] md:w-[300px] md:h-[150px] bg-slate-200 rounded-lg text-xl "
          onClick={() => {
            setDailogOpen(true);
          }}
        >
          + Add New
        </Button>
      </div>
      <Dialog open={dialogOpen}>
        <DialogContent className=" md:max-w-2xl max-w-[300px]">
          <DialogHeader>
            <DialogTitle className=" text-2xl font-bold ">
              Tell us more about job you are interviewing
            </DialogTitle>
            <DialogDescription className=" font-bold">
              Add details about your job position,your skill and year of
              experience
            </DialogDescription>
          </DialogHeader>
          <form className=" flex flex-col gap-5">
            <div className=" flex flex-col gap-3">
              <Label>Job Role / Job Position</Label>
              <Input placeholder="Ex.. FullStack Developer" />
            </div>
            <div className=" flex flex-col gap-3">
              <Label>Job Description / your Skills</Label>
              <Input placeholder="Ex.. React,Python,node js" />
            </div>
            <div className=" flex flex-col gap-3">
              <Label>No of Experience </Label>
              <Input placeholder="0" type="Number" />
            </div>
            <div className=" flex gap-5 justify-end ">
              <Button
                variant="ghost"
                onClick={() => {
                  setDailogOpen(false);
                }}
              >
                Cancel
              </Button>
              <Button className=" bg-blue-500 ">Start</Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AddInterview;
