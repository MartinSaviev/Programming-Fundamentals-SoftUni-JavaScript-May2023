function languages(counters) {

    let speakLanguages = '';
    
    switch (counters) {
        case 'USA':
        case 'England':
            speakLanguages = 'English'
            break;
        case 'Spain':
        case 'Argentina':
        case 'Mexico':
            speakLanguages = 'Spanish';
            break;
        default:
            speakLanguages = 'unknown';
    }
    console.log(speakLanguages);

}