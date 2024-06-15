const button =  document.querySelector('button')
let resultdiv = document.createElement('div')
    resultdiv.id = 'result'
    document.getElementById('wrapper').appendChild(resultdiv)
//eventlistener


button.addEventListener('click',displayStats)
function displayStats()
{
    const input=document.getElementById("input")
    const city = input.options[input.selectedIndex].value
    let population = 0,literacyRate = 0,language =''
switch(city)
{
    case 'Bengaluru':
        population = 6520185
        literacyRate = 93.25
        language = 'kanndam'
        break
    case 'Pondicherry':
        population = 2589630
        literacyRate = 85.20
        language = 'tamil'
        break
    case 'Chennai':
        population = 4646852
        literacyRate = 90.20
        language = 'tamil'
        break
    case 'Coimbatore':
        population = 3895610
        literacyRate = 88.20
        language = 'tamil'
        break
    case 'Madurai':
        population = 7539148
        literacyRate = 83.20
        language = 'tamil'
        break
}
    let text = `The Indian city of ${city} has a population  of ${population} language spoken is ${language} and literacy rate is ${literacyRate}%`
    
    document.getElementById('result').innerHTML = text
}