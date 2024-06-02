/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's

const MurthuzaNFTs  = [];

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.


function mintNFT (_name,_age,_country,_course,_pincode){
      const NFT =
        {
          "name" : _name ,
          "age"  : _age ,
          "country": _country ,
          "course" : _course ,
          "pincode": _pincode ,
        }
      MurthuzaNFTs.push(NFT);
}

// creating a "loop" that will traverse "array" of NFT's
// next print their metadata using console.log()

function listNFTs (){
   for(let i=0;i<MurthuzaNFTs.length;i++)
      {
         console.log("\n");
         console.log("Name      :"+MurthuzaNFTs[i].name);
         console.log("age       :"+MurthuzaNFTs[i].age);
         console.log("country   :"+MurthuzaNFTs[i].country);
         console.log("course    :"+MurthuzaNFTs[i].course);
         console.log("pincode   :"+MurthuzaNFTs[i].pincode);
      }

}

// getTotalSupply() should return the number of NFT's you have created 
function getTotalSupply(){
   console.log("\n");
   console.log(MurthuzaNFTs.length);
}

// call your functions below this line
mintNFT("Mahesh",24,"India","CSE",534211);
mintNFT("Alen",23,"USA","EEE",120034);
mintNFT("Raja",20,"India","CSE",543678);
mintNFT("James",26,"Canada","ECE",456321);
mintNFT("David",20,"USA","EEE",120098);

listNFTs();
getTotalSupply();


