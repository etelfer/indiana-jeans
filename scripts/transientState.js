const transientState = {
    ownsBlueJeans: false,
    socioLocationId: 0
}

export const setOwnsBlueJeans = (chosenOwnership) => {
        transientState.ownsBlueJeans = chosenOwnership
}

export const setSocioLocationId = (chosenLocation) => {
    transientState.socioLocationId = chosenLocation
}

export const saveSurveySubmission = async () => {

    console.log("Saving survey to database...")
    console.log(transientState)
}