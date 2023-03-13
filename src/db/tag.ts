
import { supabase } from "./db";

export interface TagCreate {
	name: string;
}

export interface TagFetch {
	id: number;
	name: string;
}

export async function setTag(tag: TagCreate | TagCreate[] ) {
	const { data } = await supabase.from('tags').insert(tag).select()
	console.log(data)
	return data;
}

export async function getTags(): Promise<TagFetch[] | []> {
	const {data, error} = await supabase.from('tags').select()
	if (error) return []
	return data;
}


