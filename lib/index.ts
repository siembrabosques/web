import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export interface TeamMember {
    name: string
    summary: string
    thumbnail: string
}
export const getTeamMembers = (language: string): TeamMember[] => {
    const teamDir = path.join(__dirname, '../content/team_members')
    const msPaths = fs.readdirSync(teamDir)
    const membersInLanguage = msPaths.filter(p => p.split('.').reverse()[1] === language)
    return membersInLanguage.map(fileName => {
        const content = fs.readFileSync(path.join(teamDir, fileName))
        return matter(content).data as TeamMember
    })
}