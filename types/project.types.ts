import { PortableTextBlock } from "sanity";

export type IProject = {
    _id: string;

    _createdAt: Date;

    name: string;

    slug: string;

    image: string;

    url: string;


    content: PortableTextBlock[];
}
