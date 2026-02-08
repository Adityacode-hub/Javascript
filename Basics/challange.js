
//first challange of the array is to make a teaflavour named variable now  access the first element and store it in firsttea variable
let teaFlavour=["green tea","black tea","oolong tea"];
let firstTea=teaFlavour[0];
console.log(firstTea)


//second challange

let Cities=["London","Tokyo","New York"]
let favouriteCity=Cities[2]
console.log(favouriteCity)


//third challenge

let teaType=["herbal tea","white tea","masala tea"]
teaType[1]="jasmine tea"
console.log(teaType)

//fourth challenge

let citiesVisited=["Mumbai","Sydney"]
citiesVisited.push("Berlin")
console.log(citiesVisited)

//fifth challenge

let teaOrder=["chai","iced tea","matcha","earl grey"]
teaOrder.pop()
console.log(teaOrder)


//sixth challenge

let popularTea=["green tea","oolong tea","chai"]
let softCopyTeas=popularTea;
console.log(softCopyTeas)

//seventh challenge creating hard copy by using the spread operator
let topCities=["Berlin","New York","Singapore"]

let hardCopyCities=[...topCities]
hardCopyCities.pop()
console.log(topCities)
console.log(hardCopyCities)
console.log(topCities)

//eight challenge
let europeanCities=["Paris","France","Rome"]
let asianCities=["Tokyo","Bankok","Thailand"]
let wordCities=europeanCities.concat(asianCities)
console.log(wordCities)

//nineth challenge

let teaMenu=["Masala chai","oolong tea","green tea","early tea"]
let menuLength=teaMenu.length
console.log(menuLength)

//tenth challenge

let cityBucketList=["Kyoto","London","Cape Town","Vancouver"]
let isLondoninlist=cityBucketList.includes("London")
console.log(isLondoninlist)