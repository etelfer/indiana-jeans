import { JeanChoices } from "./JeanChoices.js"
import { LocationChoices } from "./LocationChoices.js"
import { SubmissionButton } from "./submissionButton.js"
import { SubmissionList } from "./submissionsList.js"

const container = document.querySelector("#container")

const render = async () => {
    const jeansHTML = JeanChoices()
    const locationsHTMl = await LocationChoices()
    const buttonHTML = SubmissionButton()
    const submissionsHTML = await SubmissionList()

    container.innerHTML = `
    ${jeansHTML}
    ${locationsHTMl}
    ${buttonHTML}
    ${submissionsHTML}
    `
}

render()

