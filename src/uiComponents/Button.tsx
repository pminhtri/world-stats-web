import { Button as ANTDButton, ButtonProps } from 'antd';
import { useTranslation } from 'react-i18next';

type Props = {
  text: string;
} & ButtonProps;

const Button: React.FC<Props> = ({ text }) => {
  const { t } = useTranslation();

  return <ANTDButton>{t(`${text}`)}</ANTDButton>;
};

export default Button;
