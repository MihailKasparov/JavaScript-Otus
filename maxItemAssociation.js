const ShoppingAll = [
    ["a","к"],
    ["d","e"],
    ["q","w"],
    ["a","z"],
    ["r","q"],
    ["i","e"]
];


function maxItemAssociation(HitsShopping){
    function getUnion(Products) {
        let incShopping = HitsShopping.filter(Product => (Products.filter(Params => Product.includes(Params))).length > 0);

        let arrShopping = incShopping.reduce((arr, current) => arr.concat(current));
        
        let Shopping = arrShopping.filter((current, index, arr) => {return arr.indexOf(current) === index});

        return Shopping.sort();
    }


    let storage = HitsShopping.reduce((maxItemAssociation, current) => {
        if (current.length == 0)
            return maxItemAssociation


        let Shopping = getUnion(current)

        if((Shopping.length == maxItemAssociation.length && Shopping[0].localeCompare(maxItemAssociation[0]) < 0) || Shopping.length > maxItemAssociation.length)
            return Shopping;
        else return maxItemAssociation;
        
    }, [])

    return storage;
}


console.log(maxItemAssociation(ShoppingAll))