import { UploadOutlined } from "@ant-design/icons";
import { Button, Form, Image, Input, Select, Upload } from "antd";
import { useForm } from "antd/lib/form/Form";
import { Page, useQuery, useServerSideMutation } from "rakkasjs";
import { useEffect, useState } from "react";
import TextEditor from "src/components/TextEditor";
import { setPost } from "src/db/post";
import { getPostTag } from "src/db/postTags";
import { getTags } from "src/db/tag";
import { convertBase64 } from "src/upload"

interface tagOptions {
	label: String;
	value: number;
}

const createPostPage:Page = () => {
	const preloaded = useQuery("preload", () => {
		return getTags();
	});

	const [form] = useForm();
	const [localPost, setLocalpost] = useState({
		title: "",
		content: "",
		image: ""
	})
	
	const [tags, setTags] = useState<tagOptions[] | undefined>();
	
	const mutation = useServerSideMutation(
		async () => await setPost(localPost),
		{
			onSuccess() {
				console.log(1)
			},
			onError(error) {
				console.log(error)
			}
		},
	);


	return (
		<Form
			name="form"
			form={form}
			layout="vertical"
			onSubmitCapture={e => mutation.mutate()}>
			
			<Image
				width={200}
				src={form.getFieldValue('image')}
			/>
			<Form.Item name="image" label="Blog görseli seçiniz">
				<Upload 
					onChange={async e => {
						let decoded = await convertBase64(e.file.originFileObj)
						console.log(decoded)
						form.setFieldValue('image', decoded)
					}}
					maxCount={1}
					isImageUrl={e => true}
				>
					<Button icon={<UploadOutlined />}>Click to Upload</Button>
				</Upload>
			</Form.Item>

			<Form.Item name="title" label="Blog başlığı giriniz">
				<Input />
			</Form.Item>
			
			<Form.Item label="Blog ile ilgili etiketleri giriniz" name="tags">
				<Select
					mode="multiple"
					style={{ width: '100%' }}
					placeholder="Tags Mode"
					options={preloaded.data.map(tag => ({label: tag.name, value: tag.id}))}
				>
				</Select> 
			</Form.Item>

			<Form.Item label="Blog içeriği giriniz" name="content">
				<TextEditor onChange={e => form.setFieldValue('content', e)} />
			</Form.Item>

			<Button
				type="primary"
				htmlType="submit"
				onClick={() => {
					setLocalpost(form.getFieldsValue())
				}}>
				Kaydet
			</Button>
		</Form>
	);
}
export default createPostPage;

createPostPage.preload = async (ctx) => {
	if (!ctx.queryClient.getQueryData("preload")) {
		ctx.queryClient.prefetchQuery("preload", getTags());
	}
}