import unified from 'unified';
import parse from 'remark-parse';
import html from 'remark-html';
import Link from 'next/link';

export const htmlFromMarkdown = async (md: string): Promise<string> => {
    const content = await unified()
        .use(parse)
        .use(html)
        .process(md);
    return content.contents as string
}