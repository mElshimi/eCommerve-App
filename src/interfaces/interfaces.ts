export interface ICategory {
  id: string;
  title: string;
  prefix: string;
  img: string;
}
type TLoading = "idle" | "pending" | "succeeded" | "failed";
export interface ICategories {
  records: ICategory[];
  loading: TLoading;
  error: string | null;
}

export interface IProduct {
  id: string;
  title: string;
  price: string;
  cat_prefix: string;
  img: string;
}

export interface IProducts {
  records: IProduct[];
  loading: TLoading;
  error: string | null;
}

export interface LoadingProps {
  status: TLoading;
  error: null | string;
  children: React.ReactNode;
}

export type HasId = { id: string };
export interface RenderListProps<T> {
  records: T[];
  renderItem: (record: T) => React.ReactNode;
}
