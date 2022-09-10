
const MakePrice = (price, tf) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

export default MakePrice;