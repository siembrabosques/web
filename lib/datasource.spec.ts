import {getAllEventSlugs, getTheme} from './datasource'
import {join} from "path";

test('get events', (done) => {
    const events = getAllEventSlugs('en', join(__dirname, 'test_data/events'))
    expect(events).toHaveLength(2)
    expect(events[0].startDate).toEqual("18/03/2021")
    expect(events[0].title).toMatch(/TEST:.*/)
    done()
})

test('get theme', async (done) => {
    const theme =  await getTheme('en')
    expect(theme.heroMd).toBeDefined()
    done()
})