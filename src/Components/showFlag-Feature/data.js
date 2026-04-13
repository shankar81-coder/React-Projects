

const dummyApiResponse = {
    showLightDarkMode : true,
    showTicTacToeBoard : true,
    showRandomColorGenerator : true,
    showAccordain : true,
    showTreeView : true
}


function featureFlagDataServiceCall()
{
    return new Promise((resolve,reject) => {
        if(dummyApiResponse) setTimeout(resolve(dummyApiResponse),500)
        else reject("An Error Occured")
    })
} 


export default featureFlagDataServiceCall
