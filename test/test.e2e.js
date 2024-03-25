describe(`$$ command issue`, function() {
    
    let paragraphs1, paragraphs2;
    
    beforeEach(`Open page`, async function() {
        await browser.url('https://nikola-dz.github.io/Fetch_multiple_elements_issue/');
    });
    
    context(`Paragraphs exist in DOM`, async function() {
        
        it(`Case 1 - toBeDisplayed (Synchronous assignment)`, async function() {
            
            paragraphs1 = $$('.div-holder-1 .paragraph-class');
            await expect(paragraphs1[0]).toBeDisplayed();
        })
        
        it(`Case 2 - toBeDisplayed (Asynchronous assignment)`, async function() {
            
            paragraphs1 = await $$('.div-holder-1 .paragraph-class');
            await expect(paragraphs1[0]).toBeDisplayed();
        })
    })
    
    context(`Paragraphs don't exist in DOM`, async function() {
        
        it(`Case 1 - not.toBeDisplayed (Synchronous assignment)`, async function() {
            
            // This doesn't work in v8.35.0
            paragraphs2 = $$('.div-holder-2 .paragraph-class');
            await expect(paragraphs2[0]).not.toBeDisplayed();
        })
        
        it(`Case 2 - not.toBeDisplayed (Asynchronous assignment)`, async function() {
            
            paragraphs2 = await $$('.div-holder-2 .paragraph-class');
            await expect(paragraphs2[0]).not.toBeDisplayed();
        })
    })
})

