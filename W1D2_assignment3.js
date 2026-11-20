//browserversion and testtype using if-else and switch case statement 

let browserVersion="Safari"
let testType="Smoke"
function launchBrowser(browserVersion) {
    if(browserVersion === "Chrome") {
        console.log("Chrome browser")
    } else if(browserVersion === "Edge") {
        console.log("Edge browser")
    } else if(browserVersion === "Safari") {
        console.log("Safari browser")
    } else {
        console.log("Invalid browser")
    }   
}
launchBrowser(browserVersion)

function runTest(testType) {
    switch(testType) {
        case "Smoke":
            console.log("Running Smoke test")
            break
        case "Regression":
            console.log("Running Regression test")
            break
        case "Sanity":
            console.log("Running Sanity test")
            break
        default:
            console.log("Invalid test type")
    }
}
runTest(testType)