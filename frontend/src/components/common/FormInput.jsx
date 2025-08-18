"use client";

import { forwardRef } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export const FormInput = forwardRef(
  (
    {
      label,
      type = "text",
      placeholder,
      required = false,
      error,
      className = "",
      ...props
    },
    ref
  ) => {
    return (
      <div className="space-y-2">
        {label && (
          <Label
            htmlFor={props.name}
            className={
              required ? "after:content-['_*'] after:text-red-500" : ""
            }
          >
            {label}
          </Label>
        )}
        <Input
          ref={ref}
          type={type}
          placeholder={placeholder}
          className={`${className} ${error ? "border-red-500" : ""}`}
          {...props}
        />
        {error && <p className="text-sm text-red-500">{error}</p>}
      </div>
    );
  }
);

export const FormTextarea = forwardRef(
  (
    {
      label,
      placeholder,
      required = false,
      error,
      rows = 4,
      className = "",
      ...props
    },
    ref
  ) => {
    return (
      <div className="space-y-2">
        {label && (
          <Label
            htmlFor={props.name}
            className={
              required ? "after:content-['_*'] after:text-red-500" : ""
            }
          >
            {label}
          </Label>
        )}
        <Textarea
          ref={ref}
          placeholder={placeholder}
          rows={rows}
          className={`${className} ${error ? "border-red-500" : ""}`}
          {...props}
        />
        {error && <p className="text-sm text-red-500">{error}</p>}
      </div>
    );
  }
);

FormInput.displayName = "FormInput";
FormTextarea.displayName = "FormTextarea";
