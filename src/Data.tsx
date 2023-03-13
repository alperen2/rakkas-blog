import { supabase } from './db/db'

type posts = Array<{
    image?: string,
    title: string,
    comment: number,
    like: number
    tags?: Array<String>,
    date: string,
    author: string,

}>

export const posts: posts = [
    {
        title: "Dev to cloning by alperen through rakkas",
        comment:100,
        like:1000,
        date: "Oct 25",
        author: "Alperen Durmuş",
        tags: [
            "rakkas",
            "react",
            "blog",
            "development",
            "success",
            "another tag"
        ]
    },
    {
        title: "Dev to cloning by alperen through rakkas",
        comment:100,
        like:1000,
        date: "Oct 25",
        author: "Alperen Durmuş",
        tags: [
            "rakkas",
            "react",
            "blog"
        ]
    },
    {
        title: "Dev to cloning by alperen through rakkas",
        comment:100,
        like:1000,
        date: "Oct 25",
        author: "Alperen Durmuş",
        tags: [
            "rakkas",
            "react",
            "blog"
        ]
    },
    {
        title: "Dev to cloning by alperen through rakkas",
        comment:100,
        like:1000,
        date: "Oct 25",
        author: "Alperen Durmuş",
        tags: [
            "rakkas",
            "react",
            "blog"
        ]
    },
    {
        title: "Dev to cloning by alperen through rakkas",
        comment:100,
        like:1000,
        date: "Oct 25",
        author: "Alperen Durmuş",
        tags: [
            "rakkas",
            "react",
            "blog"
        ]
    },
]

type user = {
    avatar: string,
    username: string,
    fullName: string,
    location: string,
    bio: string,
}

export const user: user = {
    avatar: "string",
    username: "alperenn",
    fullName: "Alperen Durmuş",
    location: "İstanbul-Turkey",
    bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid omnis neque velit mollitia dolorum vero corporis ratione in officia, minus tempora! Blanditiis enim harum, alias possimus ullam vero ex fugiat?"
}

export async function getPosts() {
    const {data, status} =  await supabase.from('posts').select();
    console.log(data)
    return data;
}

