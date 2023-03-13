import { supabase } from "./db";
import { Post } from "./post";
import { TagFetch } from "./tag";

interface postTagCreate {
	tag_id: number;
    post_id: number;
}

interface postTagFetch {
	id: number;
	tag: TagFetch;
    post: Post;
	created_at: String;
}

export async function setPostTag(tag: postTagCreate | postTagCreate[]) {
	const {data, error, statusText} = await supabase.from('postTags').insert(tag)
}


export async function getPostTag(postId: number): Promise<Tag[] | []> {
	const {data, error} = await supabase.from('postTags').select().eq('postId', postId)
	if(error) return []
	return data;
}
