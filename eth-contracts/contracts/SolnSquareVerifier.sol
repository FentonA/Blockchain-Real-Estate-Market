pragma solidity >=0.4.21 <0.6.0;

import './ERC721Mintable.sol';
import './SquareVerifier.sol';


// TODO define another contract named SolnSquareVerifier that inherits from your ERC721Mintable class

contract SolnSquareVerifier is RollerTokens{
SquareVerifier verifier;

    constructor(address squareVerifierContract) public {
        verifier = SquareVerifier(squareVerifierContract);
    }

// TODO define a solutions struct that can hold an index & an address
struct Solutions {
    address solAccount 
    uint solIndex
}

// TODO define an array of the above struct
Solitions[] solutionsArray;

// TODO define a mapping to store unique solutions submitted
mapping(bytes32 => solutionsArray) solMapping;


// TODO Create an event to emit when a solution is added
event AddedSolution(uint256 solIndex, address indexed solAddress);
event Minted(uint256 tokenId, address to);


// TODO Create a function to add the solutions to the array and emit the event
function addSolution(
        uint[2] memory a,
        uint[2] memory a_p,
        uint[2][2] memory b,
        uint[2] memory b_p,
        uint[2] memory c,
        uint[2] memory c_p,
        uint[2] memory h,
        uint[2] memory k,
        uint[2] memory input
)
public retusn(bool){
    bytes32 _hash = keccak256(abi.encodePacked(input[0], input[1]));
    require(solutions[_hash].solutionAddress == address(0), "This already exists");

    bool verified = verifier.verifyTx(a,b,c,input);

        if(verified){
            solutions[_hash] = true;
            Solutions memory newSolution = Solutions(tokenId, to);
            solutionsArray.push(Solutions);
            emit AddedSolution(tokenId, to);
            return true
        }
}


// TODO Create a function to mint new NFT only after the solution has been verified
//  - make sure the solution is unique (has not been used before)
//  - make sure you handle metadata as well as tokenSuplly

function mintNFT(
        uint[2] memory a,
        uint[2] memory a_p,
        uint[2][2] memory b,
        uint[2] memory b_p,
        uint[2] memory c,
        uint[2] memory c_p,
        uint[2] memory h,
        uint[2] memory k,
        uint[2] memory input
)
    public returns(bool){
        bool State = addSolution(to, tokenId, a, b, c, input);

        if(State){
            string memory tokenUri  = _tokenURIs[TokenId]
            mint(to, tokenId, tokenUri);
            emit tokenMint(tokenId, to);
            return true;
        }
        return false
    }
}

// TODO define a contract call to the zokrates generated solidity contract <Verifier> or <renamedVerifier>
contract SquareVerifier{

    function verifyTx(
        uint[2] memory a,
        uint[2] memory a_p,
        uint[2][2] memory b,
        uint[2] memory b_p,
        uint[2] memory c,
        uint[2] memory c_p,
        uint[2] memory h,
        uint[2] memory k,
        uint[2] memory input
    
    )
    public returns(bool);
}
























