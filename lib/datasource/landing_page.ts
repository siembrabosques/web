import {join} from "path";
import fs from "fs";
import {getLanguageFilterRegexp} from "./datasource";
import matter from "gray-matter";
import {htmlFromMarkdown} from "../markdown";

const landingSectionsPath = join(process.cwd(), 'content/landing_sections')
export interface LandingPageSection {
    originFile: string
    content: string
    background: string
}

export const getLandingSections = async (language: string): Promise<LandingPageSection[]> => {
    const regex = getLanguageFilterRegexp(language)
    const sections = fs.readdirSync(landingSectionsPath)
        .filter(fileName => regex.test(fileName))
        .map(fileName => getLandingPageFromFilename(join(landingSectionsPath, fileName)))



    return Promise.all(sections)
}

const getLandingPageFromFilename = async (pagePath: string): Promise<LandingPageSection> => {
    const fileContent = fs.readFileSync(pagePath, 'utf8')
    const gMatter = matter(fileContent)

    const result = {
        background: gMatter.data.background,
        content: await htmlFromMarkdown(gMatter.data.content),
        originFile: pagePath
    }
    return result
}