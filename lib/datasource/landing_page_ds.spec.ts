import {getLandingSections} from "./landing_page";

describe('landing page data source', () => {
    it('Load sections', async (done) => {
        const sections = await getLandingSections('es')
        expect(sections).toHaveLength(1)
        done()
    })
})