describe('Test if the app visits the homepage', () => {
    it('goes to the homepage', () => {
       cy.visit('https://emmalaja-pupvote.netlify.app/')
       cy.contains('Pupvote')
    })
})