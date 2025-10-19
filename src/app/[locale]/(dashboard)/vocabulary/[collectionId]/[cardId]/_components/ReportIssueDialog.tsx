"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Form, SelectField } from "@/components/ui/form";
import { routing } from "@/i18n/routing";
import {
  reportVocabularyIssue,
  useLocalizedSupabaseErrorMessage,
} from "@/lib/supabaseUtils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import { ComponentProps, FC } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import z from "zod";

type Props = {
  locale: (typeof routing.locales)[number];
  wordId: string;
} & ComponentProps<typeof Dialog>;

export const ReportIssueDialog: FC<Props> = ({ locale, wordId, ...rest }) => {
  const t = useTranslations("reportIssue");

  const { toastWhenError } = useLocalizedSupabaseErrorMessage();

  const formSchema = z.object({
    issue: z.string().min(1, t("noIssueSelected")),
  });
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      issue: "",
    },
  });

  const handleSubmit = form.handleSubmit(async ({ issue }) => {
    const { error } = await reportVocabularyIssue({
      wordId,
      issue,
      locale,
    });

    toastWhenError(error);
    if (!error) {
      toast.info(t("sentToast"));
      rest.onOpenChange?.(false);
    }
  });

  return (
    <Dialog {...rest}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{t("title")}</DialogTitle>
          <DialogDescription>{t("description")}</DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={handleSubmit}>
            <SelectField
              name="issue"
              control={form.control}
              label={t("issueLabel")}
              placeholder={t("placeholder")}
              options={ISSUES.map((x) => ({
                value: x,
                label: t(`issues.${x}`),
              }))}
            />
          </form>
        </Form>

        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">{t("cancel")}</Button>
          </DialogClose>
          <Button onClick={handleSubmit}>{t("submit")}</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

const ISSUES = [
  "kana",
  "kanji",
  "wordPronunciation",
  "definition",
  "example",
  "exampleTranslation",
  "examplePronunciation",
] as const;
