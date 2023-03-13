import React, { useEffect, useRef, useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import type { InputRef } from 'antd';
import { Space, Input, Tag, Tooltip, theme } from 'antd';
import TagInput from 'src/components/TagInput';

const Test: React.FC = () => {
 

  
 return <TagInput getTags={e => {
      console.log(e)
    }} tags={["asd", "bsd"]} />
};


export default Test;