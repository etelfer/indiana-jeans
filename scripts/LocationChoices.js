import { setSocioLocationId } from "./transientState.js"

const handleLocationChange = (changeEvent) => {
    if (changeEvent.target.name === "location") {
        const convertedToInteger= parseInt(changeEvent.target.value)
        setSocioLocationId(convertedToInteger)
    }
}


export const LocationChoices = async() => {
    const response = await fetch("http://localhost:8088/socioLocations")
    const locations = await response.json()

    document.addEventListener("change", handleLocationChange)

    let html = `
    <div class="survey-input" id="location-choice">
        <h2>What type of area do you live in?</h2>
        `

    const locationsHTML = locations.map((location) => {
        html += `<input type="radio" name="location" value="${location.id}" /> ${location.label}`
    }
)

        html += `
        </div>
        `

return html
}