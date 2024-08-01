import { LoadingProps } from "@interfaces/interfaces";

const Loading = ({ status, error, children }: LoadingProps) => {
  console.log(error);
  if (status === "pending") {
    return <p className="text-center">loading please wait</p>;
  }
  if (status === "failed") {
    return <p className="text-center">{error&&'Network Error'}</p>;
  }

  return <>{children}</>;
};

export default Loading;
