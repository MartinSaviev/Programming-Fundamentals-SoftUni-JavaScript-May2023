function townProblem(input) {

    for (let i = 0; i < input.length; i++) {

        [town, latitude, longitude] = input[i].split(' | ');

        let townInfo = {

            town:town,
            latitude: Number(latitude).toFixed(2),
            longitude: Number(longitude).toFixed(2),
        };

        console.log(townInfo);
    }

}
townProblem(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']
)