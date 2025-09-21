import { PageInfo } from "./PageInfo";

export type GetUnitsResponse = {
  data: {
    uuid: string;
    title: string;
    description: string;
    count: number;
    vocabularyPreview: string[];
  }[];
  pageInfo: PageInfo;
};
