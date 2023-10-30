import { Button } from "@ui/components/button";
import { Alert, AlertTitle, AlertDescription } from "@ui/components/alert";
import { FC } from "react";

const Page: FC = () => {
  return (
    <div>
      <p>Hello world</p>
      <Button variant="destructive">Button</Button>
      <Alert>
        <AlertTitle>Title</AlertTitle>
        <AlertDescription>AlertDescription</AlertDescription>
      </Alert>
    </div>
  );
};

export default Page;
