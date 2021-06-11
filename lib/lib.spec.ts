import {getTeamMembers} from './index'

test('get team members', (t) => {
    const members = getTeamMembers('en')
    t()
})