// Clothing Object 
export const Clothing = (
  num: number,
  name: string, 
  brand: string, 
  colour: string, 
  type: string, 
  season: string[], 
  tags: string[], 
  desc: string,
  img: string
  ) => {
  
  return {
    num:num, name: name, brand: brand, colour: colour, 
    type: type, season: season, tags:tags, desc: desc, img:img
  } }


// all[Colours|Seasons|Types] are arrays of the available options for each category
export const allColours = ['Black','Blue','Brown','Burdgundy','Gray','Green','Navy','Orange','Pink',
'Purple','Red','Tan','White','Yellow'];

export const allSeasons = ['Winter','Spring', 'Summer', 'Fall'];


export const allTypes = ['Outerwear','Top','Bottom', 'Footwear', 'Accessories']

// activeFilters keeps tracks of filters currently enabled by the user
export const activeFilters: string[] = [];

// FiltersDB compiles all filters into one object
let FiltersDB = { 
  'allSeasons': allSeasons,
  'allColours': allColours,
  
    'allTypes': allTypes, 
  'UserTags': ["For windy weather","Running"]
}; 

// retries FilterDB from localStorage if it already exists
if (localStorage["FiltersDB"]) { 
  FiltersDB = JSON.parse(localStorage["FiltersDB"]);
}

// The three objects below and the user tags above are for first term users. 
const obj1 = Clothing(0, "Track Jacket", "Adidas", "Tan", "Outerwear", ["Spring","Summer", "Fall"], 
["For windy weather"], "Great jacket for every situation.", 
"https://firebasestorage.googleapis.com/v0/b/the-cloud-closet.appspot.com/o/images%2Fclothing%20(1).jpg?alt=media&token=26bc788a-48cd-4034-bd29-1420dc8af705");

const obj2 = Clothing(1, "Running Shorts", "Nike", "Black", "Bottom", ["Spring","Summer"], 
["Running"], "Very breathable and lightweight.", 
"https://firebasestorage.googleapis.com/v0/b/the-cloud-closet.appspot.com/o/images%2F20210913_211532.jpg?alt=media&token=18d5e53e-5dac-4281-8083-d083a2a31867");

const obj3 = Clothing(2, "Joggers", "Puma", "Black", "Bottom", ["Spring","Summer", "Fall"], 
["Running", "For windy weather"], "Very comfortable.", 
"https://firebasestorage.googleapis.com/v0/b/the-cloud-closet.appspot.com/o/images%2F20210823_113800.jpg?alt=media&token=59c008f6-07ec-4fdb-8fb5-98a7b19f8c69");


// closetDB is array where user's clothing is stored 
let ClosetDB = [obj1, obj2, obj3];




// retrieves closetDB from localStorage if it already exists
if (localStorage["ClosetDB"]) { 
  ClosetDB = JSON.parse(localStorage["ClosetDB"])
}

export {ClosetDB, FiltersDB};