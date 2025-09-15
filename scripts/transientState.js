const transientState = {
    ownsBlueJeans: undefined,
    socioLocationId: 0
}

export const setOwnsBlueJeans = (chosenOwnership) => {
        transientState.ownsBlueJeans = chosenOwnership
}

export const setSocioLocationId = (chosenLocation) => {
    transientState.socioLocationId = chosenLocation
}

export const saveSurveySubmission = async () => {
    if (transientState.ownsBlueJeans === undefined || transientState.socioLocationId === 0)
        return window.alert("Complete all questions on survey!")
    
    const postOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(transientState)
    }
    const response = await fetch("http://localhost:8088/submissions", postOptions)
}