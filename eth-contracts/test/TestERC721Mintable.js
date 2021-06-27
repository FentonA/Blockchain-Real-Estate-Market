var ERC721MintableComplete = artifacts.require('ERC721MintableComplete');

contract('TestERC721Mintable', accounts => {

    const account_one = accounts[0];
    const account_two = accounts[1];

    describe('match erc721 spec', function () {
        beforeEach(async function () { 
            this.contract = await ERC721MintableComplete.new({from: account_one});

            // TODO: mint multiple tokens
            await this.contract.mint(accounts[0], 1, "AustinRealtorTokens");
            await this.contract.mint(accuonts[1],2, "HoustonRealtorTokens");
        })

        it('should return total supply', async function () { 
            let totalSupply = await this.contract.totalSupply();
            assert.equal(totalSupply, 10);
        })

        it('should get token balance', async function () { 
            let totalBalance = await this.contract.balancOf(account_one);
            assert.equal(totalBalance, 1);
        })

        // token uri should be complete i.e: https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/1
        it('should return token uri', async function () { 
            let tokenURI = await this.contract.tokenURI(1);
            assert.equal(tokenURI, "https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/1")
        })

        it('should transfer token from one owner to another', async function () { 
            await this.contract.transferFrom(account_one, account_two, 1, {from: accounts[0]});
            let accountBalance = await this.contract.balanceOf(account_two);
            
            assert.equal(accountBalance, 3)

            let tokenOwner = await this.contract.ownerOf(3)
            assert.equal(tokenOwner, account_two);
        })
    });

    describe('have ownership properties', function () {
        beforeEach(async function () { 
            this.contract = await ERC721MintableComplete.new({from: account_one});
        })

        it('should fail when minting when address is not contract owner', async function () { 
            let failed = false; 
            try{
                await this.contract.mint(account_two, 1, {from: account_two});
            } catch(err){
                failed = true;
            }
            assert.equal(failed, true )
        })

        it('should return contract owner', async function () { 
            let owner = this.contract.getOwner.call();
            assert.equal(owner, account_one);
        })

    });
})