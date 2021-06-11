import fs from 'fs'
import {join} from 'path'
import matter from 'gray-matter'
import remark from 'remark'
import html from 'remark-html'
import {htmlFromMarkdown} from "./markdown";

const eventsPath = join(process.cwd(), 'content/events')
const themePath = join(process.cwd(), 'content/theme')

export interface Event {
    fileName: string
    slug: string
    title: string
    type: string
    md: string
    startDate: string
    endDate: string
    eventLink: string
}

const generateSlug = (startDate: Date, fileName: string) => startDate.toISOString().split('T')[0] + '_' + fileName.split('.')[0]
const recoverFileNameFromSlug = (slug: string, language: string): string => {
    return slug.match(/.*_(.*)/)[1] + `.${language}.md`
}

const getLanguageFilterRegexp = language => new RegExp(`.*\.${language}\.md$`)

export const getAllEventSlugs = async (language: string, path: string = eventsPath): Promise<Event[]> => {
    const regex = getLanguageFilterRegexp(language)
    const events = fs.readdirSync(path)
        .filter(fileName => regex.test(fileName))
        .map(fileName => getEventFromFileName(fileName))
    return Promise.all(events)
}

export const getEventFromFileName = async (fileName: string, path: string = eventsPath): Promise<Event> => {
    const fileContent = fs.readFileSync(join(path, fileName), 'utf8')
    const gMatter = matter(fileContent)
    const slug = generateSlug(gMatter.data.startDate, fileName)
    return (
        {
            fileName,
            slug,
            ...gMatter.data,
            startDate: gMatter.data.startDate.toISOString(),
            endDate: gMatter.data.endDate.toISOString(),
            md: await htmlFromMarkdown(gMatter.content),
        } as Event
    )
}

export const getEventFromSlug = (slug: string, language: string) => getEventFromFileName(recoverFileNameFromSlug(slug, language))
export interface Theme {
    heroMd: string
}

export const getTheme = async (language: string, path: string = themePath): Promise<Theme> => {
    const themeFileName = fs.readdirSync(path)
        .filter(fileName => getLanguageFilterRegexp(language).test(fileName))[0]

    const fileContent = fs.readFileSync(join(path, themeFileName), 'utf8')
    const gMatter = matter(fileContent)
    return {
        heroMd: await htmlFromMarkdown(gMatter.data.hero_content)

    }
}