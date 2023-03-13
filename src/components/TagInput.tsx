import React, { useEffect, useRef, useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import type { InputRef } from 'antd';
import { Space, Input, Tag, Tooltip, theme } from 'antd';

interface TagInputProps {
    tags?: string[];
    getTags: (tags?: string[]) => void
}

const TagInput:React.FC<TagInputProps> = (props) => {
    const { token } = theme.useToken();
    const [tags, setTags] = useState(props.tags);
    const [inputVisible, setInputVisible] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const inputRef = useRef<InputRef>(null);
  
    props.getTags(tags)
    
    const handleClose = (removedTag: string) => {
      const newTags = tags?.filter((tag) => tag !== removedTag);
      console.log(newTags);
      setTags(newTags);
    };
  
    const showInput = () => {
      setInputVisible(true);
    };
  
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(e.target.value);
    };
  
    const handleInputConfirm = () => {
      if (inputValue && tags?.indexOf(inputValue) === -1) {
        setTags([...tags, inputValue]);
      }
      setInputVisible(false);
      setInputValue('');
    };
  
    const tagInputStyle: React.CSSProperties = {
      width: 78,
      verticalAlign: 'top',
    };
  
    const tagPlusStyle: React.CSSProperties = {
      background: token.colorBgContainer,
      borderStyle: 'dashed',
    };
  
    props.getTags(tags)

    return (
      <Space size={[0, 8]} wrap>
        <Space size={[0, 8]} wrap>
          {tags?.map((tag, index) => {
            const isLongTag = tag.length > 20;
            const tagElem = (
              <Tag
                key={tag}
                closable={true}
                style={{ userSelect: 'none' }}
                onClose={() => handleClose(tag)}
              >
                        {isLongTag ? `${tag.slice(0, 20)}...` : tag}
              </Tag>
            );
            return isLongTag ? (
              <Tooltip title={tag} key={tag}>
                {tagElem}
              </Tooltip>
            ) : (
              tagElem
            );
          })}
        </Space>
        {inputVisible ? (
          <Input
            ref={inputRef}
            type="text"
            size="small"
            style={tagInputStyle}
            value={inputValue}
            onChange={handleInputChange}
            onBlur={handleInputConfirm}
            onPressEnter={handleInputConfirm}
          />
        ) : (
          <Tag style={tagPlusStyle} onClick={showInput}>
            <PlusOutlined /> New Tag
          </Tag>
        )}
      </Space>
    );
};

export default TagInput;