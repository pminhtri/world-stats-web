type Props = {
  children: React.ReactNode;
  rounded?:
    | 'rounded-sm'
    | 'rounded-md'
    | 'rounded-lg'
    | 'rounded-full'
    | 'rounded-none';
  border?: 'solid' | 'dashed' | 'dotted' | 'hidden' | 'none' | 'double';
  borderWeight?: '0' | '2' | '4' | '8';
  padding?: 'p-1' | 'p-2' | 'p-3' | 'p-4' | 'p-5';
  margin?: 'm-1' | 'm-2' | 'm-3' | 'm-4' | 'm-5';
  shadow?:
    | 'shadow-xs'
    | 'shadow-sm'
    | 'shadow-md'
    | 'shadow-lg'
    | 'shadow-xl'
    | 'shadow-2xl'
    | 'shadow-inner'
    | 'shadow-none';
  hover?: string;
};

const Box: React.FC<Props> = (props) => {
  const { children, rounded, border, shadow, borderWeight, hover } = props;
  console.log(hover);
  return (
    <div
      className={`flex ${border ? `border-${border}` : 'border-solid'} ${rounded ? rounded : 'rounded'} 
      ${hover ? `hover:${hover}` : ''} ${shadow ? shadow : 'shadow-md'} transition-shadow duration-200
      ${borderWeight ? `border-${borderWeight}` : 'border-0'}`}
    >
      {children}
    </div>
  );
};

export default Box;
