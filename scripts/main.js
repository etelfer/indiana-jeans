import { JeanChoices } from "./JeanChoices.js"
import { LocationChoices } from "./LocationChoices.js"
import { SubmissionButton } from "./submissionButton.js"

const container = document.querySelector("#container")

const render = async () => {
    const jeansHTML = JeanChoices()
    const locationsHTMl = await LocationChoices()
    const buttonHTML = SubmissionButton()

    container.innerHTML = `
    ${jeansHTML}
    ${locationsHTMl}
    ${buttonHTML}
    `
}

render()

