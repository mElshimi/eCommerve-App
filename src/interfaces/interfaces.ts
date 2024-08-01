export interface ICategory {
  id: string;
  title: string;
  prefix: string;
  img: string;
}

export interface ICategories {
  records: ICategory[];
  loading: "idle" | "pending" | "succeeded" | "failed";
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
  loading: "idle" | "pending" | "succeeded" | "failed";
  error: string | null;
}

interface Path {
  pathname: string;
  search: string;
  hash: string;
}

export interface ILocation<State = any> extends Path {
  state: State;
  key: string;
}
