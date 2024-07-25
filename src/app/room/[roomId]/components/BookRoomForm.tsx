"use client";

import * as React from "react";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { useState } from "react";

type BookRoomFormType = {
  text: string;
};

export default function BookRoomForm({ text }: BookRoomFormType) {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-full font-semibold rounded-lg h-20",
            !date && "text-muted-foreground"
          )}
        >
          <div className="flex flex-col gap-3">
            <p className="text-start">{text}</p>
            <div className="flex gap-2 items-center">
              <CalendarIcon className="mr-4 h-4 w-4" />
              {date ? (
                <p className="tracking-wider">{date.toLocaleDateString()}</p>
              ) : (
                <p>{date}</p>
              )}
            </div>
          </div>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}
