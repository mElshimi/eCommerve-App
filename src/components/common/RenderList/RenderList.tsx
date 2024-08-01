import { HasId, RenderListProps } from "@interfaces/interfaces";

const RenderList = <T extends HasId>({
  records,
  renderItem,
}: RenderListProps<T>) => {
  const itemsList =
    records.length > 0 ? (
      records.map((record) => {
        return <div key={record.id}>{renderItem(record)}</div>;
      })
    ) : (
      <p className="text-center">There are no items</p>
    );
  return <>{itemsList}</>;
};

export default RenderList;
