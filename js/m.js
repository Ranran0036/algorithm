const rob = (nums) => {
    let masterChallenger = 0; //总额数擂主
    let signUped = 0; //报名挑战者
    nums.forEach((item)=>{
      const newChallenger = signUped; //newChallenger是正在参赛的挑战者
      signUped = item + masterChallenger; //更新报名挑战者
      masterChallenger = Math.max(masterChallenger, newChallenger); //比较大小决定新的擂主;
    });
    return Math.max(masterChallenger, signUped); //最后一次报名的挑战者的挑战赛不会在forEach循环中进行，所以手动比一次，并作为结果返回。
  }

console.log(  rob([3,5,20,7,7,8]))