type Props = {
  children: React.ReactNode;
};

const Container: React.FC<Props> = ({ children }) => {
  return (
    <>
      <div className="flex w-full">{children}</div>
    </>
  );
};

export default Container;
