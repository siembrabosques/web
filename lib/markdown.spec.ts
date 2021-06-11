import {htmlFromMarkdown} from "./markdown";

const markdown = `
# This is a title for the page of the event.

#### This is a secondary title

![](img/fiuc-logo.png)
`

test('markdown to html', async (done) => {
    const html = await htmlFromMarkdown(markdown)
    console.log('html', html)
    done()
})