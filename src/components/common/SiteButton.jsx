import React from "react";
import { Button } from "../ui/button";
import { Spinner } from "@/components/ui/spinner";

function SiteButton({
  loading,
  children,
  variant,
  className,
  ...otherButtonProps
}) {
  return (
    <Button
      variant={variant}
      className={`${className} cursor-pointer`}
      disabled={loading}
      {...otherButtonProps}
    >
      {loading && <Spinner />} {children}
    </Button>
  );
}

export default SiteButton;
