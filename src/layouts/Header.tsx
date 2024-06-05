import { Dropdown, Typography } from 'antd';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import type { MenuProps } from 'antd';
import { MenuOutlined } from '@ant-design/icons';

const Header = () => {
  const { t } = useTranslation();
  const [selectedOption, setSelectedOption] = useState('');

  const listOption = [
    { key: 'Geography', value: t('header.listOption.Geography') },
    { key: 'Population', value: t('header.listOption.Population') },
  ];

  const listItems: MenuProps['items'] = listOption.map((option) => {
    return {
      key: option.key,
      label: (
        <span className="font-[600] flex justify-center items-center hover:text-blue-500">
          {option.value}
        </span>
      ),
      onClick: () => setSelectedOption(option.key),
    };
  });

  return (
    <div className="flex w-full items-center shadow-md py-3 px-5">
      <div className="flex w-1/4 justify-center items-center cursor-pointer">
        <Typography.Title style={{ margin: 0 }} level={4}>
          {t('mainTitle')}
        </Typography.Title>
      </div>
      <div className="hidden md:flex w-full gap-10">
        {listOption.map((option) => (
          <div
            key={option.key}
            className={`cursor-pointer font-[600] ${
              selectedOption === option.key ? 'text-blue-500' : 'text-stone-400'
            } hover:text-blue-500`}
            onClick={() => setSelectedOption(option.key)}
          >
            {option.value}
          </div>
        ))}
      </div>
      <div className="md:hidden flex justify-end w-full">
        <Dropdown
          menu={{ items: listItems }}
          overlayStyle={{
            width: '200px',
          }}
        >
          <MenuOutlined className="text-2xl cursor-pointer" />
        </Dropdown>
      </div>
    </div>
  );
};

export default Header;
