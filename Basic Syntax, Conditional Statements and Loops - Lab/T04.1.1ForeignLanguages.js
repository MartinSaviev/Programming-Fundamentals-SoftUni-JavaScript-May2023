function languages(country) {

    let spoken;
    if (country === 'England' || country === 'USA') {

        spoken = 'English'
    } else if (country === 'Spain' || country === 'Argentina' || country === 'Mexico'){
        
        spoken = 'Spanish'

    }
    else {

        spoken = 'unknown'
    }

    console.log(spoken);
}