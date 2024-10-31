class Create{

    async click_createButton(){
        const createButton = await $('//button[@id = "createGlobalItem"]');

        await browser.waitUntil(async ()=>{
            if(await createButton.isDisplayed()){
                return true;
            }
        },{
            timeout: 10000,
            timeoutMsg: "Button not found..."
        })

        await createButton.click();
        await browser.pause(1000);
    }

    async add_Project(project){

        const projectInput = await $('//input[contains(@id,"project")]/parent::div'); //parent
        await projectInput.scrollIntoView({block:'center'});
        await browser.waitUntil(async ()=>{
            if(await projectInput.isDisplayed()){
                return true;
            }
        },{
            timeout:10000,
            timeoutMsg:"Not Found!!!"
        })
        await projectInput.click();
        await browser.pause(500);
        await browser.keys(project);
        await browser.pause(2000);
        await browser.keys('Enter');
        await browser.pause(500);  
    }


    async add_IssueType(issue_type){
        const issueType_Input = await $('//input[contains(@id,"type-picker")]/parent::div');        
        await issueType_Input.scrollIntoView({block:'center'});
        await browser.pause(500);
        await issueType_Input.click();
        await browser.pause(500);
        await browser.keys(issue_type);
        await browser.pause(2000);
        await browser.keys("Enter");
        await browser.pause(500);
    }

    async add_summary(summary){
        const summary_Input = await $('//input[@id = "summary-field"]/parent::div');    
        await summary_Input.scrollIntoView({block:'center'});
        await browser.pause(500);
        await summary_Input.click();
        await browser.pause(500);
        await browser.keys(summary);
        await browser.pause(2000);
    }

    async add_assignee(assignee){
        const assignee_Input = await $('//input[@id="assignee-field"]/parent::div');
        await browser.scroll(0,200);        
        await assignee_Input.scrollIntoView({block:'center'});
        await browser.pause(500);
        await assignee_Input.click();
        await browser.pause(500);
        await browser.keys(assignee);
        await browser.pause(2000);
        await browser.keys("Enter");
        await browser.pause(500);
    }

    async click_submit(){
        const submit_button = await $('//button[@type="submit"]');
        await submit_button.click();
        await browser.pause(3000);
    }
}

export default new Create();