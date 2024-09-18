import React from 'react';
import { Select } from 'antd';

const App: React.FC = () => (
  <Select
    showSearch
    placeholder="Select a person"
    filterOption={(input, option) =>
      (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
    }
    options={[
      { value: '1', label: '30008 学习计划' },
      { value: '2', label: '30007 阅读绘本2次' },
      { value: '3', label: '30006 每日登录' },
    ]}
  />
);

export default App;
