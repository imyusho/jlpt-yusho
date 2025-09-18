import { FC, ReactNode } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

type Props = {
  icon: ReactNode;
  title: string;
  description?: string;
  children: ReactNode;
};

export const CardLayout: FC<Props> = ({
  icon,
  title,
  description,
  children,
}) => {
  return (
    <div className="min-h-svh flex items-center justify-center p-6">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 flex size-16 items-center justify-center rounded-full bg-primary/10">
            {icon}
          </div>
          <CardTitle className="text-2xl">{title}</CardTitle>
          {description && (
            <CardDescription className="text-balance">
              {description}
            </CardDescription>
          )}
        </CardHeader>
        {children && <CardContent>{children}</CardContent>}
      </Card>
    </div>
  );
};
