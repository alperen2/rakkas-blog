import { saveBase64AsFile } from "src/upload";
import { supabase } from "./db";
import { setPostTag } from "./postTags";

export interface Post {
	image: string;
	title: string;
	content: string;
	tags?: number[];
}

export async function setPost(post: Post) {
	const postData = {title: post.title, content: post.content}
	const {data, status, error, statusText} = await supabase.from('posts').insert(postData).select()
	if (error) {
		throw new Error(statusText);
	}

	if (status === 201 && data) {
		const fileName = saveBase64AsFile(post.image, data[0].id)
		await supabase.from('posts').update({image: fileName}).eq('id', data[0].id)
		const postTags = post.tags?.map(tag => ({tag_id: tag, post_id: data[0].id }))
		if (postTags) {
			await setPostTag(postTags)
		}
	}
}

export async function getPosts()  {
	const { data } = await supabase.from('posts').select(`
			id,		
			title,
			image,
			created_at,
			postTags(tags(name))
		`);
	return data;
}