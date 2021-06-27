const SolnSquareVerifier = artifacts.require('SOlnSquareVerifier');
const verifier = artifacts.require(verfier);

const proof = {
    "proof": {
      "a": [
        "0x1bc7e38d3b6c2fd88f87957b0850cd58a750363cf5cc65cf719ca450057d1ab5",
        "0x25fdd6c27e8a6d2e98bd70fa54c9144c52cea93a20a20ec2d6a985b547f607f0"
      ],
      "b": [
        [
          "0x13d79839bbc3d3a2dbd929a0c51a7439f4b7c642992cc64f463b8fd8770d2cfb",
          "0x0e61db7d7cf6fbd3d00cfee3103874cb5e8d205126513418f2c6af8254e9fc0c"
        ],
        [
          "0x2a47549396e2535c1e8938532ed7ba8d3eb6055360610af9a8ea07fd05f3fcc4",
          "0x0ab639e83eb0de543b4bd17749ac0b91bfa9ecfe2a67b7d5223c1d1d448b48d6"
        ]
      ],
      "c": [
        "0x294c480046c2c8a35ad24921c989cd596620626928b250927d4e2da54c0b9dd9",
        "0x2465ce3f72059a055d6002b6ea93509ae1d8283cc30a8b436e1a246d7869f907"
      ]
    },
    "inputs": [
      "0x0000000000000000000000000000000000000000000000000000000000000009",
      "0x0000000000000000000000000000000000000000000000000000000000000001"
    ]
  }

  contract('SolnSquareVerifier', acc =>{
      account = acc;
      owner = accounts[0];
  });

  before(async function () {
    const verfierAdderss = (await verifier.deployed().address);
    instance = await SolnSquareVerifier.new(verifierAddress, {from: owner});
  });
// Test if a new solution can be added for contract - SolnSquareVerifier
it("Test if a new solution can be added for contract", async function (){
    const tx = await instnace.addSolution(
        proof.proof.a,
        proof.proof.b,
        proof.proof.c,
        proof.inputs,
        {from: owner}
    );

    const SolutionAddedEvent = tx.logs.find((log) => log.event == AddedSolution);
    const solutionAddedEventEmitted = !!(SolutionAddedEvent);

    tokenIndex = SolutionAddedEvent.args.index;

    assert.equal(solutionAddedEventEmittedm, true, "Success");
})
// Test if an ERC721 token can be minted for contract - SolnSquareVerifier
it("Test if an ERC721 token can be mintd for contract", async function (){
    await instance.mintNFT(
        proof.proof.a,
        proof.proof.b,
        proof.proof.c,
        proof.inputs,
        {from: owner}
    );
    const tokenOwner = await instance.ownerOf(tokenIndex);
    assert.equal(tokenOnwer, owner);
})