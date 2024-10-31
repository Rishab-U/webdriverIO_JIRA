import loginData from "../Testdata/login_testdata.json"  assert {type:"json"}
import issueData from "../Testdata/createIssue_testdata.json"  assert {type:"json"}
import login from "../Pageobjects/JIRA.login"
import create from "../Pageobjects/Create.JIRA_Issue"

describe("CREATE AN JIRA ISSUE USING WEBDRIVERIO AUTOMATION", async ()=>{
    
    it("Login to the JIRA Application", async ()=>{
        await login.jiraUrl(loginData.Jira_Url);
        await browser.maximizeWindow();
        await login.login_2_Jira(loginData.Username,loginData.Password);
    })

    it("GO TO JIRA PAGE", async()=>{
        await login.jira_Page();
    })

    it("CREATE ISSUES", async ()=>{
        for(let index =0; index<3; index++)
        {
            await create.click_createButton();

            await create.add_Project(issueData.Project);

            await create.add_IssueType(issueData.Issue_type[index]);

            let randomNum = Math.random()*100000;
            let uniqueNumber = randomNum.toFixed(0);
            let summary = issueData.Summary + uniqueNumber;
            console.log("Summary::::=====>",summary);
            await create.add_summary(summary);

            await create.add_assignee(issueData.Assignee[index]);

            await create.click_submit();
        }
        
    })
        
})