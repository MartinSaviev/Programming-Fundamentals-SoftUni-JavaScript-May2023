function vacation(numberPeople, typeOfGroup, day) {

    let priceByOnePerson = 0;

    if (typeOfGroup === 'Students' && day === 'Friday') {
        priceByOnePerson = 8.45;

    } else if (typeOfGroup === 'Students' && day === 'Saturday') {
        priceByOnePerson = 9.80;

    } else if (typeOfGroup === 'Students' && day === 'Sunday') {
        priceByOnePerson = 10.46;

    }
    if (typeOfGroup === 'Regular' && day === 'Friday') {
        priceByOnePerson = 15;

    } else if (typeOfGroup === 'Regular' && day === 'Saturday') {
        priceByOnePerson = 20;

    } else if (typeOfGroup === 'Regular' && day === 'Sunday') {
        priceByOnePerson = 22.50;

    }

    if (typeOfGroup === 'Business' && day === 'Friday') {
        priceByOnePerson = 10.90;

    } else if (typeOfGroup === 'Business' && day === 'Saturday') {
        priceByOnePerson = 15.60;

    } else if (typeOfGroup === 'Business' && day === 'Sunday') {
        priceByOnePerson = 16;

    }

    let TotalPrice = numberPeople * priceByOnePerson;

    if (numberPeople >= 30 && typeOfGroup === 'Students') {

        let discount = TotalPrice * 0.15;
        TotalPrice = TotalPrice - discount;
    } else if (numberPeople >= 10 && numberPeople <= 20 && typeOfGroup === 'Regular') {
        let discount = TotalPrice * 0.05;
        TotalPrice = TotalPrice - discount;
    }
    else if (numberPeople >= 100 && typeOfGroup === 'Business') {

        let discount = priceByOnePerson * 10;;
        TotalPrice = TotalPrice - discount;
    }

    console.log(`Total price: ${TotalPrice.toFixed(2)}`);

}