import { ClientSuspense } from 'rakkasjs';
import React, { lazy } from 'react';
import 'react-quill/dist/quill.snow.css';

const modules = {
  toolbar: [
    [{ header: [1, 2, false] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [
      { list: 'ordered' },
      { list: 'bullet' },
      { indent: '-1' },
      { indent: '+1' },
    ],
    ['link', 'code'],
    ['clean'],
  ],
};

const formats = [
  'header',
  'bold',
  'italic',
  'underline',
  'strike',
  'blockquote',
  'list',
  'bullet',
  'indent',
  'link',
  'code',
];

interface OnChangeHandler {
  (e: any): void;
}

type Props = {
  onChange: OnChangeHandler;
};

const ReactQuill = lazy(() => import("react-quill"));

const TextEditor: React.FC<Props> = ({ onChange }) => {
    return (
      <ClientSuspense fallback="Text editör yükleniyor">
				<ReactQuill
          formats={formats}
          modules={modules}
          onChange={onChange}
          style={{background: "white"}}
          theme="snow"
        />
			</ClientSuspense>
    );
};

export default TextEditor;

