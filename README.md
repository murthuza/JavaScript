# Murthuza's NFT Collection

This project is a simple implementation of a system to mint and manage NFTs (Non-Fungible Tokens) using JavaScript. The NFTs contain metadata such as name, age, country, course, and pincode.

## Introduction

This project demonstrates how to create a simple NFT collection using JavaScript. It includes functionalities to mint new NFTs, list all NFTs with their metadata, and get the total supply of minted NFTs.

## Getting Started

To run this project, you only need a web browser with JavaScript support. You can copy the provided code into a JavaScript file and run it in the browser console or include it in an HTML file.

## Functions

### 1. mintNFT(name, age, country, course, pincode)

This function takes five parameters and creates a new NFT object with the provided metadata. The NFT is then added to the `MurthuzaNFTs` array.

#### Parameters:
- `name`: The name of the person.
- `age`: The age of the person.
- `country`: The country of the person.
- `course`: The course the person is enrolled in.
- `pincode`: The pincode of the person's location.

### 2. listNFTs()

This function iterates over the `MurthuzaNFTs` array and prints the metadata of each NFT to the console.

### 3. getTotalSupply()

This function prints the total number of NFTs that have been minted.

## Usage

Here is an example of how to use the functions:

```javascript
// Minting new NFTs
mintNFT("Mahesh", 24, "India", "CSE", 534211);
mintNFT("Alen", 23, "USA", "EEE", 120034);
mintNFT("Raja", 20, "India", "CSE", 543678);
mintNFT("James", 26, "Canada", "ECE", 456321);
mintNFT("David", 20, "USA", "EEE", 120098);

// Listing all NFTs
listNFTs();

// Getting the total supply of NFTs
getTotalSupply();
```

### Example Output

```
Name      : Mahesh
age       : 24
country   : India
course    : CSE
pincode   : 534211

Name      : Alen
age       : 23
country   : USA
course    : EEE
pincode   : 120034

Name      : Raja
age       : 20
country   : India
course    : CSE
pincode   : 543678

Name      : James
age       : 26
country   : Canada
course    : ECE
pincode   : 456321

Name      : David
age       : 20
country   : USA
course    : EEE
pincode   : 120098

5
```
